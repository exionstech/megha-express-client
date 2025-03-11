"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import useLocation from "@/hooks/useLocation";
import { ICity, IState } from "country-state-city";
import { PhoneInput } from "@/components/ui/phone-number-input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { FranchiseApiInstance } from "@/lib/apis";
import { toast } from "sonner";
import WaitingScreen from "./waiting-screen";

const schema = z.object({
  firstName: z.string().min(1, "Name must be at least 1 characters"),
  lastName: z.string().min(1, "Name must be at least 1 characters"),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(10, "Phone number must be at least 10 characters"),
  companyName: z.string().optional(),
  gstNum: z.string().optional(),
  address: z.string().min(1, "Address must be at least 1 characters"),
  landmark: z.string().optional(),
  country: z.string().min(1, "Country selection is required"),
  state: z.string().min(1, "State selection is required"),
  city: z.string().min(1, "City selection is required"),
  district: z.string().min(1, "District must be at least 1 characters"),
  pincode: z.string().min(1, "Pincode must be at least 1 characters"),
});

type FormValues = z.infer<typeof schema>;

const ApplyForm = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    getAllCountries,
    getCountryStates,
    getStateCities,
    getCountryByCode
  } = useLocation();

  const countries = getAllCountries();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      companyName: "",
      gstNum: "",
      address: "",
      landmark: "",
      country: "IN",
      state: "",
      city: "",
      district: "",
      pincode: "",
    },
  });

  useEffect(() => {
    const selectedCountry = form.watch("country");
    if (selectedCountry) {
      const countryStates = getCountryStates(selectedCountry);
      if (countryStates) {
        setStates(countryStates);
      }
      form.setValue("state", "");
      form.setValue("city", "");
    }
  }, [form.watch("country")]);

  useEffect(() => {
    const selectedState = form.watch("state");
    const selectedCountry = form.watch("country");

    if (selectedCountry && selectedState) {
      const stateCities = getStateCities(selectedCountry, selectedState);
      if (stateCities) {
        setCities(stateCities);
      }

      form.setValue("city", "");
    }
  }, [form.watch("state")]);

  // Function to add "+" prefix to pincode if not already present
  const formatPincode = (pincode: string) => {
    if (!pincode.startsWith("+")) {
      return "+" + pincode;
    }
    return pincode;
  };

  // Function to get full country name from country code
  const getFullCountryName = (countryCode: string) => {
    const country = getCountryByCode(countryCode);
    return country ? country.name : countryCode;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormValues) => {
      const apiData = {
        ...values,
        pincode: formatPincode(values.pincode),
        country: getFullCountryName(values.country)
      };
      
      const res = await FranchiseApiInstance.post("/apply", apiData);
      if (res.status !== 200) throw new Error("Failed to apply Franchise");
      const json = res.data;
      if (!json.success)
        throw new Error(json.message || "Failed to apply Franchise");
      return json;
    },
    onSuccess: () => {
      setIsSubmitting(false);
      toast.success("Successfully applied for Franchise");
      setIsSubmitted(true);
    },
    onError: () => {
      setIsSubmitting(true);
      toast.error("Failed to apply Franchise");
    }
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(false);
    mutate(values);
  };

  return (
    <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto">
      {isSubmitted ? (
        <WaitingScreen />
      ) : (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl font-medium mb-4">Personal Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your firstname"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your lastname"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number*</FormLabel>
                    <FormControl>
                      <PhoneInput
                        placeholder="Enter your mobile number"
                        {...field}
                        defaultCountry="IN"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl font-medium mb-4">Company Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Name
                      <span className="text-muted-foreground ml-2">
                        (Optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your company name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gstNum"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      GST Number
                      <span className="text-muted-foreground ml-2">
                        (Optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your gst number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex items-center flex-col md:flex-row gap-8">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Address
                      <span className="text-muted-foreground ml-2">
                        (address of the place where you want to setup your hub)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[120px] resize-none"
                        placeholder="Enter your Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="landmark"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Nearby Landmark
                      <span className="text-muted-foreground ml-2">
                        (Optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[120px] resize-none"
                        placeholder="Enter your landmark"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country*</FormLabel>
                    <Select
                      disabled={isSubmitting}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select Your Country"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem
                            key={country.isoCode}
                            value={country.isoCode}
                          >
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State*</FormLabel>
                    <Select
                      disabled={isSubmitting || states.length < 1}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select Your State"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City*</FormLabel>
                    <Select
                      disabled={isSubmitting || cities.length < 1}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-10 bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select Your City"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.name} value={city.name}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>District*</FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your district"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode*</FormLabel>
                    <FormControl>
                      <Input
                        className="h-10"
                        placeholder="Enter your pincode"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="flex gap-2 items-center"
              disabled={isSubmitting || isPending}
            >
              {isPending ? "Applying..." : "Apply"}
              {isPending ? <Loader className="w-5 h-5 animate-spin"/> 
              : <ChevronRight className="w-5 h-5" />}
            </Button>
          </div>
        </form>
      </Form>
      )}
    </div>
  );
};

export default ApplyForm;