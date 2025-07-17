import { useEffect } from "react";

interface RenderRazorpayProps {
  orderId: string;
  keyId: string;
  amount: number;
  customerName: string;
  customerNumber: string;
  onPaymentFail: () => void;
  onPaymentSuccess: (response: any) => void;
  onCheckoutClose: (reason: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Function to load script and append in DOM tree.
const loadScript = (src: string): Promise<boolean> =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      console.error("error in loading razorpay");
      resolve(false);
    };
    document.body.appendChild(script);
  });

const RenderRazorpay: React.FC<RenderRazorpayProps> = ({
  orderId,
  keyId,
  amount,
  customerName,
  customerNumber,
  onPaymentFail,
  onPaymentSuccess,
  onCheckoutClose,
}) => {
  const displayRazorpay = async (options: any) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return;
    }

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", (response: any) => {
      console.error("payment failed response", response);
      onPaymentFail();
    });

    rzp1.open();
  };

  const options = {
    key: keyId,
    amount: amount * 100, // Razorpay accepts amount in paise (INR subunit)
    currency: "INR",
    name: "MaxPark Pvt Ltd",
    description: "Vehicle Parking Payment",
    order_id: orderId,
    handler: onPaymentSuccess,
    prefill: {
      name: customerName,
      email: "",
      contact: customerNumber,
    },
    modal: {
      ondismiss: onCheckoutClose,
    },
    retry: {
      enabled: false,
    },
    theme: {
      color: "#EF6D20",
    },
    method: {
      upi: true,
      card: true,
      netbanking: true,
      emi: true,
      wallet: false,
      paylater: false,
    },
  };

  useEffect(() => {
    displayRazorpay(options);
  }, []);

  return null;
};

export default RenderRazorpay;
