"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function PaymentSuccessModal({
  onBackToApp,
  showBackToApp = false,
  onGeneratePDF,
}: {
  showBackToApp: boolean;
  onBackToApp: VoidFunction;
  onGeneratePDF: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-md flex flex-col items-center">
        <div className="mb-4 flex items-center justify-center">
          <Image
            src={"/images/success.webp"}
            width={100}
            height={100}
            alt="payment success"
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">Payment Successful!</h2>
        <div className="text-[#1C1B1F80] text-center text-sm font-medium">
          Thank you! Your transaction is complete.
          <br />
          The exit barrier will open shortly.
          <br />
          <br />
          {showBackToApp ? (
            <div className="flex flex-col gap-4">
              <Button onClick={onBackToApp}>Back to App</Button>
            </div>
          ) : (
            <span className="text-xs">You can now safely close this page.</span>
          )}
          <Button
            variant={"ghost"}
            className="text-orange-500"
            onClick={() => {
              onGeneratePDF();
            }}
          >
            {" "}
            <Download />
            Download reciept.
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
    </div>
  );
}
