import { useEffect, useState } from "react";

export default function PaymentTimer({
  initialMinutes = 5,
  onTimeout,
}: {
  initialMinutes: number;
  onTimeout: VoidFunction;
}) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // seconds

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s} min`;
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <div className="bg-white text-[#f26522] font-medium rounded-md text-xs px-2 py-2 mt-6">
        <span>⏳ Pay within {formatTime(timeLeft)}</span>
      </div>
    </>
  );
}
