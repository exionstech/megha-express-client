"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Handle your form submission here
  };

  return (
    <section className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex flex-col gap-8 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-semibold text-customBlack">
          Get in touch with us.
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-customBlack">
          We're here to assist you.
        </h2>
      </div>

      <div className="w-full py-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className="h-12"
                />
                {errors.name && (
                  <span className="text-red text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  className="h-12"
                />
                {errors.email && (
                  <span className="text-red text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  {...register("phone")}
                  className="h-12"
                />
                {errors.phone && (
                  <span className="text-red text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Message"
                {...register("message")}
                className="min-h-[120px] resize-none"
              />
              {errors.message && (
                <span className="text-red text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <Button 
              type="submit"
              className="text-lg py-6 flex items-center justify-center"
            >
              Leave us a Message
              <ArrowRight className="size-10"/>
            </Button>
          </form>
      </div>
    </section>
  );
};

export default ContactUs;