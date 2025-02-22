"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Handle your form submission here
  };

  return (
    <section className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex gap-6 my-10">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-customBlack">
          Get in touch with us. We're here to assist you.
        </h1>
        <div className="felx flex-col w-full mt-4">
          <h1 className="text-xl font-medium text-muted-foreground mb-2">
            Address
          </h1>
          <p className="text-md w-72 flex items-start">
            <MapPin className="size-4 shrink-0 mr-1.5 mt-1" />
            Uttar Ramchandrapur Vivekananda Marg Kolkata, West Bengal, 700103
            India
          </p>
        </div>
        <div className="felx flex-col w-full mt-2">
          <h1 className="text-xl font-medium text-muted-foreground mb-2">
            Contact
          </h1>
          <p className="text-md  flex items-center mb-1">
            <Phone className="size-4 shrink-0 mr-1" />+91 92300 66584
          </p>
          <a
            href="mailto:meghaexpress18@gmail.com"
            className="text-md  mt-2 flex items-center"
          >
            <Mail className="size-4 shrink-0 mr-1.5" />
            meghaexpress18@gmail.com
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6 h-full">
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Your Name"
              {...register("name")}
              className="h-12"
            />
            {errors.name && (
              <span className="text-red text-sm">{errors.name.message}</span>
            )}

            <Input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="h-12"
            />
            {errors.email && (
              <span className="text-red text-sm">{errors.email.message}</span>
            )}

            <Input
              type="tel"
              placeholder="Phone Number (optional)"
              {...register("phone")}
              className="h-12"
            />
            {errors.phone && (
              <span className="text-red text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div className="mt-4">
            <Textarea
              placeholder="Message"
              {...register("message")}
              className="min-h-[120px] resize-none"
            />
            {errors.message && (
              <span className="text-red text-sm">{errors.message.message}</span>
            )}
          </div>

          <Button
            type="submit"
            className="text-lg !h-12 mt-4 flex items-center justify-center"
          >
            Leave us a Message
            <ArrowRight className="size-10" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
