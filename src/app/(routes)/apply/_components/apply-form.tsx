"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronRight } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "Name must be at least 1 characters"),
  lastName: z.string().min(1, "Name must be at least 1 characters"),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(10, "Phone number must be at least 10 characters"),
  companyName: z.string().optional(),
  gstNum: z.string().optional(),
  address: z.string().min(1, "Address must be at least 1 characters"),
  landmark: z.string().optional(),
  country: z.string().min(1, "Country must be at least 1 characters"),
  state: z.string().min(1, "State must be at least 1 characters"),
  city: z.string().min(1, "City must be at least 1 characters"),
  district: z.string().min(1, "District must be at least 1 characters"),
  pincode: z.string().min(1, "Pincode must be at least 1 characters"),
});

type FormValues = z.infer<typeof schema>;

const ApplyForm = () => {
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

  const onSubmit = (values: FormValues) => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-3 gap-8">
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
                    <FormControl>
                      <Input className="h-10" placeholder="Enter your country" {...field} />
                    </FormControl>
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
                    <FormControl>
                      <Input className="h-10" placeholder="Enter your state" {...field} />
                    </FormControl>
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
                    <FormControl>
                      <Input className="h-10" placeholder="Enter your city" {...field} />
                    </FormControl>
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
            <Button type="submit" className="flex gap-2 items-center">
              Apply
              <ChevronRight className="w-7 h-7"/>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplyForm;
