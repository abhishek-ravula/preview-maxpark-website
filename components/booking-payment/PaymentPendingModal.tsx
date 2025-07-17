"use client";

import Image from "next/image";

export default function PaymentPendingModal({ amount }: { amount: number }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-md flex flex-col items-center">
        <div className="mb-4 flex items-center justify-center">
          <Image
            src={"/images/loading.webp"}
            width={100}
            height={100}
            alt="payment failure"
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">Payment Pending!</h2>
        <p className="text-[#1C1B1F80] text-center text-sm font-medium">
          Your payment of ₹ {amount} is being processed. We’ll notify you once
          confirmed.
        </p>
      </div>
    </div>
  );
}
