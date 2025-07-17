"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PaymentUnauthenticModal({
  onClose,
}: {
  onClose: VoidFunction;
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

        <h2 className="text-lg font-semibold mb-2">Payment Failed!</h2>
        <p className="text-[#1C1B1F80] text-center text-sm font-medium mb-8">
          We were unable to verify your payment. Any deducted amount will be
          refunded automatically.
        </p>

        <Button
          className="w-full h-12 bg-gradient-to-r from-[#EE7F30] to-[#EE3030] hover:opacity-90 text-white font-semibold rounded-lg"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
