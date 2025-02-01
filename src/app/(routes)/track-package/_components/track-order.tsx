"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  awbNumber: z.string().min(1, "Airway Bill Number is required"),
});

type FormValues = z.infer<typeof formSchema>;

const TrackOrder = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      awbNumber: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Handle your form submission here
  };

  return (
    <section className="w-full bg-customBlue">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 py-24 flex md:flex-row flex-col items-center justify-center gap-10">
        <div className="w-full md:w-[50%] flex flex-col gap-5">
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl text-darkBlue font-semibold text-center md:text-start">
            Track your <br />
            <span className="bg-gradient-to-l from-[#FF0000] to-[#0F3F8C] text-transparent bg-clip-text">
              orders easily
            </span>
          </h1>
          <p className="text-darkBlue lg:w-[70%] text-center md:text-start md:text-lg">
            Just enter your Mobile Number, AWB tracking number or Order ID & it's
            done.
          </p>
        </div>

        <div className="w-full md:w-[50%] flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Track Order</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Enter your Airway Bill Number(AWB)"
                    {...register("awbNumber")}
                    className="w-full"
                  />
                  {errors.awbNumber && (
                    <span className="text-red text-sm">
                        {errors.awbNumber.message}
                    </span>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full text-white"
                >
                  Track Now
                </Button>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg">
                    Can't Find Your Order Details?
                  </h3>
                  <p className="text-sm text-gray-600">
                    We sent your AWB tracking number to you via Email & SMS upon
                    order confirmation.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;