import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
// import { Testimonials } from "@/components/home/testimonials"
import { AppSection } from "@/components/home/app-section";
import { ContactUs } from "@/components/home/contact-us"; // Updated import

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <AppSection />
      <ContactUs
        title={"Looking for Parking Solution?"}
        description={
          "Let us know your parking requirements. We'll get back to you shortly."
        }
      />
    </div>
  );
}
