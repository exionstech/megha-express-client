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
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import useLocation from "@/hooks/useLocation";
import { ICity, IState } from "country-state-city";

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
  const [isLoading, setIsLoading] = useState(false);

  const {
    getAllCountries,
    getCountryByCode,
    getStateByCode,
    getCountryStates,
    getStateCities,
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
      country: "",
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

  const onSubmit = (values: FormValues) => {
    setIsLoading(true);
    console.log(values);
  };

  return (
    <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-medium mb-4">Personal Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input className="h-10" placeholder="Enter your firstname" {...field} />
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
                      <Input className="h-10" placeholder="Enter your lastname" {...field} />
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
                      <Input className="h-10" placeholder="Enter your email" {...field} />
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
                      <Input className="h-10"
                        placeholder="Enter your contact number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-medium mb-4">Company Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <Input className="h-10" placeholder="Enter your company name" {...field} />
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
                      <Input className="h-10" placeholder="Enter your gst number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Address
                    <span className="text-muted-foreground ml-2">
                      (address of the place where you want to setup your hub)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input className="h-10" placeholder="Enter your Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="landmark"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Landmark
                      <span className="text-muted-foreground ml-2">
                        (Optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input className="h-10" placeholder="Enter your landmark" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country*</FormLabel>
                    <FormDescription className="text-xs">
                      Select your country
                    </FormDescription>
                    <Select
                      disabled={isLoading}
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
                    <FormDescription className="text-xs">
                      Select your state
                    </FormDescription>
                    <Select
                      disabled={isLoading || states.length < 1}
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
                          <SelectItem
                            key={state.isoCode}
                            value={state.isoCode}
                          >
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
                    <FormDescription className="text-xs">
                      Select your city
                    </FormDescription>
                    <Select
                      disabled={isLoading || cities.length < 1}
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
                          <SelectItem
                            key={city.name}
                            value={city.name}
                          >
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
                      <Input className="h-10" placeholder="Enter your district" {...field} />
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
                      <Input className="h-10" placeholder="Enter your pincode" {...field} />
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
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Apply'}
              <ChevronRight className="w-7 h-7"/>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplyForm;