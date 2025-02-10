"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  shipFrom: z.string().min(1, "Ship from address is required"),
  shipTo: z.string().min(1, "Ship to address is required"),
});

type FormValues = z.infer<typeof formSchema>;

const ShipWithUsHero = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      shipFrom: "",
      shipTo: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="w-full shipwith-bg">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 flex md:flex-row flex-col items-center gap-10 py-10 mt-10 md:mt-2">
        <div className="w-full md:w-[50%] flex flex-col gap-5">
          <h1 className="text-5xl 2xl:text-6xl text-white font-semibold text-center md:text-start select-none pointer-events-none">
            Ship with Megha<br />
            Express
          </h1>
          <p className="text-white lg:w-[70%] text-center md:text-start select-none pointer-events-none">
            Ship your packages quickly and reliably with Megha Express. Fast, secure, and hassle-free delivery at your doorstep!
          </p>
        </div>

        <div className="w-full md:w-[50%] flex items-center justify-end pt-8">
          <Card className="w-full max-w-sm 2xl:max-w-md">
            <CardHeader className="pb-4">
              <h2 className="text-xl font-semibold">Request Shipping</h2>
            </CardHeader>
            <CardContent className="px-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name*</FormLabel>
                        <FormControl>
                          <Input
                            className="py-5 md:py-4"
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number*</FormLabel>
                        <FormControl>
                          <Input
                          className="py-5 md:py-4"
                            placeholder="Enter phone number"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="shipFrom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ship From*</FormLabel>
                        <FormControl>
                          <Input
                          className="py-5 md:py-4"
                            placeholder="Enter pickup address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="shipTo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ship To*</FormLabel>
                        <FormControl>
                          <Input
                          className="py-5 md:py-4"
                            placeholder="Enter delivery address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    className="w-full py-5"
                  >
                    Submit Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShipWithUsHero;