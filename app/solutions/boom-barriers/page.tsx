import { BoomBarrierHero } from "@/components/boom-barriers/hero";
import { BoomBarrierBenefits } from "@/components/boom-barriers/benefits";
import { BoomBarrierFeatures } from "@/components/boom-barriers/features";
import { BoomBarrierIndustries } from "@/components/boom-barriers/industries";
// import { BoomBarrierContact } from "@/components/boom-barriers/contact";
import { ContactUs } from "@/components/home/contact-us";
import { BoomBarrierWhyChoose } from "@/components/boom-barriers/why-choose";
import { BoomBarrierTestimonials } from "@/components/boom-barriers/testimonials";

export default function BoomBarriersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BoomBarrierHero />
      <BoomBarrierBenefits />
      <BoomBarrierFeatures />
      <BoomBarrierIndustries />
      <BoomBarrierTestimonials />
      {/* <BoomBarrierContact /> */}
      <ContactUs
        title={"Get Your Boom Barrier Quote Today"}
        description={
          "Ready to enhance your security? Contact our experts for a customized boom barrier solution."
        }
      />
      <BoomBarrierWhyChoose />
    </div>
  );
}
