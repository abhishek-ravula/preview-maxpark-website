"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Send, PlayCircle } from "lucide-react";

export function ValetHeroButtons() {
  const router = useRouter();

  const scrollToVideo = () => {
    const videoSection = document.getElementById("how-valet-works");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    router.push("/#contact-form");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        onClick={scrollToVideo}
        className="gradient-primary text-white hover:opacity-90 transition-opacity"
      >
        <PlayCircle className="w-5 h-5 mr-2" />
        See how it works
      </Button>
      <Button
        onClick={scrollToContact}
        variant="outline"
        className="glass text-white border-white/30 hover:bg-white/10 bg-transparent"
      >
        <Send className="w-5 h-5 mr-2" />
        Talk to Our Team
      </Button>
    </div>
  );
}
