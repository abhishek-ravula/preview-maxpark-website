"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense, useCallback, useEffect, useState } from "react";
import RenderRazorpay from "@/components/booking-payment/RenderRazorPay";
import PaymentSuccessModal from "@/components/booking-payment/PaymentSuccessModal";
import PaymentFailedModal from "@/components/booking-payment/PaymentFailedModal";
import PaymentTimer from "@/components/booking-payment/PaymentTimer";
import PaymentTimedOutModal from "@/components/booking-payment/PaymentTimedOutModal";
import PaymentPendingModal from "@/components/booking-payment/PaymentPendingModal";
import { useSearchParams } from "next/navigation";
import PaymentUnauthenticModal from "@/components/booking-payment/PaymentUnauthenticModal";
import { jsPDF } from "jspdf";
import apiService from "@/lib/api";
// import autoTable from "jspdf-autotable";

interface Bookingetails {
  LotNo: any;
  FloorNo: any;
  ZoneNo: any;
  orderId: string | null;
  amount: number | null;
  customerName: string | null;
  customerNumber: string | null;
  parkingDuration: string | null;
  parkingId: string | null;
  isAdditionalParking?: boolean;
  billing?: Array<any>;
}

export default function BookingPaymentPage() {
  return (
    <Suspense>
      <BookingPayment />
    </Suspense>
  );
}

const BookingPayment = () => {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  const [displayRazorpay, setDisplayRazorpay] = useState(false);
  const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);
  const [showPaymentFailModal, setShowPaymentFailModal] = useState(false);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [showPaymentPendingModal, setShowPaymentPendingModal] = useState(false);
  const [showPaymentUnauthenticModal, setShowPaymentUnauthenticModal] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<Bookingetails>({
    orderId: null,
    amount: null,
    parkingDuration: null,
    customerName: null,
    customerNumber: null,
    parkingId: null,
    FloorNo: null,
    ZoneNo: null,
    LotNo: null,
  });
  const [isBookingTransactionAlreadyDone, setIsBookingTransactionAlreadyDone] =
    useState(false);

  useEffect(() => {
    if (bookingId) {
      fetchBookingDetails(bookingId);
    }
  }, []);

  const getReadableDuration = useCallback((duration: number) => {
    if (duration) {
      const hours = Math.floor(duration);
      const decimalValueForMin = duration - hours;
      const mins = Math.round(decimalValueForMin * 60);
      return `${Math.floor(hours)}h ${mins}m`;
    } else {
      return "0h 0m";
    }
  }, []);

  const fetchBookingDetails = async (bookingId: string) => {
    try {
      const res = await apiService.get(
        `/parking/getParkingDetailByBookingId?bookingId=${bookingId}`
      );
      const details = res.data;
      if (
        !!details &&
        !details.additionalBillingDetails &&
        Array.isArray(details?.billing) &&
        details.billing.length > 0
      ) {
        setIsBookingTransactionAlreadyDone(true);
        if (
          details.billing[0].transactionDetails?.status === "completed" ||
          details.billing[0]?.paymentStatus === "Paid"
        ) {
          setShowPaymentSuccessModal(true);
        } else if (details.billing[0].transactionDetails?.status === "failed") {
          setShowPaymentFailModal(true);
        } else if (
          details.billing[0].transactionDetails?.status === "pending"
        ) {
          setShowPaymentPendingModal(true);
        }
      }

      setBookingDetails((prev) => ({
        ...prev,
        amount:
          details.billingDetails?.amount ??
          details.additionalBillingDetails?.amount ??
          0,
        parkingDuration: details.billingDetails?.totalHours
          ? getReadableDuration(details.billingDetails?.totalHours)
          : details.additionalBillingDetails?.totalHours
          ? getReadableDuration(details.additionalBillingDetails?.totalHours)
          : "0h 0m",
        customerName: details.customerInfo?.[0]?.fullName,
        customerNumber: details.customerInfo?.[0]?.phoneNumber,
        parkingId: details._id,
        LotNo: details?.slot?.slotNumber,
        FloorNo: details?.floorInfo?.slotLevelName,
        ZoneNo: details?.zoneInfo?.zoneName,
        bookingId: details?.bookingId,
        isAdditionalParking: !!details?.additionalBillingDetails,
        billing: details?.billing,
      }));
    } catch (error) {
      console.error("booking details error", error);
    }
  };

  const generatePDF = async () => {
    try {
      const res = await apiService.get(
        `/parking/getParkingDetailByBookingId?bookingId=${bookingId}`
      );
      const details = res.data;

      const amount = details.billingDetails?.amount || "0";
      const totalHours = details.billingDetails?.totalHours || 0;
      const customerName = details.customerInfo?.[0]?.fullName || "N/A";
      const customerNumber = details.customerInfo?.[0]?.phoneNumber || "N/A";
      const date = new Date().toLocaleDateString();
      const PaymentType =
        details?.billing?.paymentMethod?.typeOfPaymentMethod || "";
      const LotNo =
        details?.slot?.slotNumber ??
        details?.floorInfo?.slotLevelName ??
        details?.zoneInfo?.zoneName ??
        "";
      const doc = new jsPDF();

      // --- Header bar with orange background ---
      doc.setFillColor("#EE7F30");
      doc.rect(0, 0, 210, 30, "F"); // A4 width = 210mm

      // --- Title ---
      doc.setTextColor(255, 255, 255); // White text
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("MaxPark Receipt", 105, 20, { align: "center" });

      // Starting positions for labels and values
      const labelX = 20;
      const valueX = 100;
      const yStart = 40;
      const lineGap = 10;
      let y = yStart;

      const dataRows = [
        { label: "Booking ID", value: bookingId },
        { label: "Lot Number", value: LotNo },
        { label: "Customer Name", value: customerName },
        { label: "Phone Number", value: customerNumber },
      ];

      doc.setTextColor(0, 0, 0); // Reset text color to black

      // Draw data rows with aligned labels and values
      dataRows.forEach(({ label, value }) => {
        doc.setFontSize(12);
        doc.text(label + ":", labelX, y);
        doc.text(String(value), valueX, y);
        y += lineGap;
      });

      // --- Payment Details Section ---
      y += 6; // bigger gap before "Payment Details"

      doc.setFontSize(14);
      doc.setTextColor("#003366");
      doc.text("Payment Details", labelX, y);
      y += 8;

      doc.setFontSize(14);
      doc.setTextColor("#EE7F30");
      doc.text("Amount Paid:", labelX, y);
      doc.text(` ${amount}`, valueX, y);
      y += 8;

      doc.setTextColor(60, 60, 60);
      doc.text("Payment Type:", labelX, y);
      doc.text(`${PaymentType}`, valueX, y);
      y += 8;

      doc.setTextColor(60, 60, 60);
      doc.text("Date:", labelX, y);
      doc.text(date, valueX, y);
      y += 15;

      // --- Footer Note ---
      doc.setTextColor("#003366");
      doc.setFont("helvetica", "italic");
      doc.text("Thank you for using MaxPark!", 105, y + 10, {
        align: "center",
      });

      doc.save(`receipt-${bookingId}.pdf`);
    } catch (error) {
      console.error("booking details error", error);
    }
  };

  const getOrderIdByBookingId = async (bookingId: string) => {
    try {
      // Send already existing not paid order id
      if (
        bookingDetails.billing &&
        bookingDetails.billing.length > 0 &&
        bookingDetails.billing[0].paymentStatus === "NotPaid" &&
        bookingDetails.billing[0].amount?.metadata?.orderId
      ) {
        return bookingDetails.billing[0].amount.metadata.orderId;
      }

      const res = await apiService.get(
        `/billing/generateBill?bookingId=${bookingId}`
      );
      const details = res.data;
      return details?.amount?.metadata?.orderId;
    } catch (error) {
      console.error("orderId error", error);
      throw error;
    }
  };

  const verifyPayment = async (paymentDetails: any) => {
    try {
      const res = await apiService.post(
        "/billing/paymentVerification",
        paymentDetails
      );
      return res.status === 200;
    } catch (error) {
      console.error("payment verification error", error);
    }
  };

  const handlePaymentFail = () => {
    setShowPaymentFailModal(true);
  };

  const handlePaymentSuccess = async (paymentDetails: any) => {
    setIsLoading(true);
    const isAuthenticPayment = await verifyPayment(paymentDetails);
    if (isAuthenticPayment) {
      setShowPaymentSuccessModal(true);
    } else {
      setShowPaymentUnauthenticModal(true);
    }
    setIsLoading(false);
  };

  const handlePaymentFailModalClose = () => {
    setShowPaymentFailModal(false);
    if (!isBookingTransactionAlreadyDone) {
      window.location.reload();
    }
  };

  const handleOnTimeout = () => {
    setShowTimeoutModal(true);
  };

  const handleOnPaymentTimeoutTryAgain = () => {
    window.location.reload();
  };

  const handleOnPayNow = async () => {
    setIsLoading(true);
    if (bookingId) {
      try {
        const orderId = await getOrderIdByBookingId(bookingId);
        setBookingDetails((prev) => ({
          ...prev,
          orderId,
        }));
        setDisplayRazorpay(true);
      } catch (error) {
        setShowPaymentFailModal(true);
      }
    }
    setIsLoading(false);
  };

  const handlePaymentUnauthenticModalClose = () => {
    setShowPaymentUnauthenticModal(false);
    window.location.reload();
  };

  const handleOnCheckoutClose = (reason: any) => {
    setDisplayRazorpay(false);
  };

  const handleOnBackToApp = () => {
    window.location.href = `https://maxpark.ai/app/booking-details/${bookingDetails.parkingId}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-[95vw] h-[95vh] bg-[#EF6D20] rounded-xl flex flex-col items-center justify-between p-6 relative overflow-hidden">
        {/* Logo and header */}
        <div className="w-full flex flex-col items-center mt-8">
          <Image
            src={"/images/maxpark_white_logo.webp"}
            alt="MaxPark Logo"
            width={185}
            height={105}
          />
        </div>

        {/* Amount and time info */}
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <span className="text-white text-3xl">₹</span>
            <span className="text-white text-6xl font-semibold ml-2">
              {bookingDetails.amount}
            </span>
          </div>
          <div className="text-white text-xs font-medium mt-4">
            {bookingDetails.isAdditionalParking ? "Additional" : ""} Time
            Parked:{" "}
            <span className="text-base">{bookingDetails.parkingDuration}</span>
          </div>
          <div className="text-white text-xs font-medium mt-4">
            Booking ID: <span className="text-base">{bookingId}</span>
          </div>

          {bookingDetails?.LotNo ? (
            <div className="text-white text-xs font-medium mt-4">
              Lot-No: <span className="text-base">{bookingDetails?.LotNo}</span>
            </div>
          ) : bookingDetails?.FloorNo ? (
            <div className="text-white text-xs font-medium mt-4">
              Floor-No :
              <span className="text-base">{bookingDetails?.FloorNo}</span>
            </div>
          ) : bookingDetails?.ZoneNo ? (
            <div className="text-white text-xs font-medium mt-4">
              Zone-No:
              <span className="text-base">{bookingDetails?.ZoneNo}</span>
            </div>
          ) : null}
          <PaymentTimer onTimeout={handleOnTimeout} initialMinutes={5} />
        </div>

        {/* Payment section */}
        <div className="w-full flex flex-col items-center mb-8">
          <p className="text-[#E6E6E6] text-xs font-medium mb-6">
            Complete payment to exit smoothly
          </p>
          <Button
            className="w-full bg-white text-sm font-semibold rounded-lg py-5 hover:bg-white/90"
            onClick={handleOnPayNow}
            isLoading={isLoading}
            disabled={isLoading}
            loaderClassName="text-orange-500"
          >
            <span className="bg-gradient-to-r from-[#EE7F30] to-[#EE3030] bg-clip-text text-transparent">
              Pay now
            </span>
          </Button>
          <p className="text-[#E6E6E6] text-xs font-medium mt-6">
            (UPI, Card, Wallet)
          </p>
        </div>
        <div className="flex gap-2">
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
        {/* Background design element */}
        {/* <div className="absolute bottom-20 right-0 w-full px-4">
          <img
            src="/payment_bg.webp"
            alt="payment backgound"
            className="w-full h-full object-cover object-bottom"
            aria-hidden="true"
          />
        </div> */}
        {displayRazorpay && (
          <RenderRazorpay
            amount={bookingDetails.amount || 0}
            orderId={bookingDetails.orderId || ""}
            keyId="rzp_test_9lSXNDD7lyiJOj"
            customerName={bookingDetails.customerName || ""}
            customerNumber={bookingDetails.customerNumber || ""}
            onPaymentFail={handlePaymentFail}
            onPaymentSuccess={handlePaymentSuccess}
            onCheckoutClose={handleOnCheckoutClose}
          />
        )}
      </div>

      {showPaymentSuccessModal && (
        <PaymentSuccessModal
          onBackToApp={handleOnBackToApp}
          showBackToApp={
            !!bookingDetails.customerName || !!bookingDetails.customerNumber
          }
          // generatePDF={(bookingId9: string) => generatePDF(bookingId)}
          onGeneratePDF={() => generatePDF()}
        />
      )}
      {showPaymentFailModal && (
        <PaymentFailedModal onClose={handlePaymentFailModalClose} />
      )}
      {showTimeoutModal && (
        <PaymentTimedOutModal onTryAgain={handleOnPaymentTimeoutTryAgain} />
      )}
      {showPaymentPendingModal && (
        <PaymentPendingModal amount={bookingDetails.amount || 0} />
      )}
      {showPaymentUnauthenticModal && (
        <PaymentUnauthenticModal onClose={handlePaymentUnauthenticModalClose} />
      )}
    </div>
  );
};
