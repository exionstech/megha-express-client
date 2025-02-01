"use client"
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const formSchema = z.object({
  trackingType: z.enum(["awb", "reference"]),
  trackingNumber: z.string().min(1, "This field is required")
});

type FormValues = z.infer<typeof formSchema>;

const TrackOrder = () => {
  const [trackingType, setTrackingType] = useState<"awb" | "reference">("awb");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trackingType: "awb",
      trackingNumber: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  const handleTrackingTypeChange = (value: "awb" | "reference") => {
    setTrackingType(value);
    reset({ trackingType: value, trackingNumber: "" });
  };

  return (
    <section className="w-full bg-customBlue">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 py-24 flex md:flex-row flex-col items-center justify-center gap-10">
        <div className="w-full md:w-[50%] flex flex-col gap-5">
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl text-darkBlue font-semibold text-center md:text-start select-none pointer-events-none">
            Track your <br />
            <span className="bg-gradient-to-l from-[#FF0000] to-[#0F3F8C] text-transparent bg-clip-text">
              orders easily
            </span>
          </h1>
          <p className="text-darkBlue lg:w-[70%] text-center md:text-start md:text-lg select-none pointer-events-none">
            Just enter your Mobile Number, AWB tracking number or Order ID & it's
            done.
          </p>
        </div>

        <div className="w-full md:w-[50%] flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="pb-4">
              <h2 className="text-xl font-semibold">Track Order</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <Controller
                  name="trackingType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
                      className="flex flex-col md:flex-row gap-3 md:gap-5"
                      defaultValue="awb"
                      onValueChange={handleTrackingTypeChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="awb" id="awb" />
                        <Label htmlFor="awb" className="md:text-xs text-customBlack">
                          AWB/ CONSIGNMENT NUMBER
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reference" id="reference" />
                        <Label htmlFor="reference" className="md:text-xs text-customBlack">
                          REFERENCE NUMBER
                        </Label>
                      </div>
                    </RadioGroup>
                  )}
                />

                <div className="space-y-2">
                  <Input
                    {...register("trackingNumber")}
                    placeholder={
                      trackingType === "awb"
                        ? "Enter your Airway Bill Number(AWB)"
                        : "Enter your Reference Number"
                    }
                    className={`w-full ${errors.trackingNumber ? 'border-red' : ''}`}
                  />
                  {errors.trackingNumber && (
                    <span className="text-red text-sm">
                      {errors.trackingNumber.message}
                    </span>
                  )}
                </div>

                <Button 
                  type="submit"
                >
                  Track Now
                </Button>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg text-blue-900">
                    Can't Find Your Order Details?
                  </h3>
                  <p className="text-sm text-customBlack">
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