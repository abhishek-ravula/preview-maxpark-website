"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PaymentTimedOutModal({
  onTryAgain,
}: {
  onTryAgain: VoidFunction;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-md flex flex-col items-center">
        <div className="mb-4 flex items-center justify-center">
          <Image
            src={"/images/failure.webp"}
            width={100}
            height={100}
            alt="payment failure"
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">Payment Timed Out!</h2>
        <p className="text-[#1C1B1F80] text-center text-sm font-medium mb-8">
          Your session expired. Please refresh to make the payment.
        </p>

        <Button
          className="w-full h-12 bg-gradient-to-r from-[#EE7F30] to-[#EE3030] hover:opacity-90 text-white font-semibold rounded-lg"
          onClick={onTryAgain}
        >
          Try Again
        </Button>

        <div className="flex gap-2 items-center justify-center mt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.maxparkai.customer"
            target="_blank"
          >
            <img
              src="/images/get_it_on_google_play.webp"
              alt="Download on the play Store"
              width={90}
              height={50}
            />
          </a>
          <a href="https://apps.apple.com/app/id6740797639" target="_blank">
            <img
              src="/images/download_on_the_app_Store.webp"
              alt="Download on the App Store"
              width={90}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
