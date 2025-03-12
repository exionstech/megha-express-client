import { MaxWrapper } from "@/components/shared/max-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WaitingScreen = () => {
  return (
    <MaxWrapper className="min-h-[90vh] py-6 w-full max-w-screen-2xl px-5 md:px-14">
      <div className="flex flex-col items-center mt-10 justify-center">
        <Image
          src="/kyc/kyc-succes.png"
          width={400}
          height={400}
          alt="Verify Success"
        />
        <h1 className="text-2xl font-bold mt-4">
          Hang Tight! We&apos;re Reviewing Your Application
        </h1>
        <p className="text-center mt-4 md:w-[70%]">
          We&apos;re on it! 🔍 Your Application is currently under review, and we&apos;ll update
          you as soon as it&apos;s done. This usually takes 2-3 business days, so sit
          back and relax—we&apos;ve got you covered!
        </p>
        <Link
          href="/contact-us">
          <Button className="mt-4">
            Contact For Query
          </Button>
        </Link>
      </div>
    </MaxWrapper>
  );
};

export default WaitingScreen;
