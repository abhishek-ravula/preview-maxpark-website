import { Hero } from "@/components/home/hero";
import { Features as ParkingSolutionsFeatures } from "@/components/parking-solutions/features";
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
      {/* <AppSection /> */}
      <ParkingSolutionsFeatures />
      <ContactUs /> {/* Replaced Newsletter with ContactUs */}
    </div>
  );
}
