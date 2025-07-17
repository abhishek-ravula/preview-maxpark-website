"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Send, PlayCircle } from "lucide-react";

export function ResidentialHeroButtons() {
  const router = useRouter();

  const scrollToVideo = () => {
    const videoSection = document.getElementById("residential-video");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    router.push("/#contact-form");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* <Button
        onClick={scrollToVideo}
        className="bg-gradient-to-r from-teal-500 to-green-600 text-white hover:opacity-90 transition-opacity"
      >
        <PlayCircle className="w-5 h-5 mr-2" />
        See It in Action
      </Button> */}
      <Button
        onClick={scrollToContact}
        // variant="outline"
        // className="glass text-white border-white/30 hover:bg-white/10 bg-transparent"
        className="bg-gradient-to-r from-teal-500 to-green-600 text-white hover:opacity-90 transition-opacity"
      >
        <Send className="w-5 h-5 mr-2" />
        Talk to Our Team
      </Button>
    </div>
  );
}
