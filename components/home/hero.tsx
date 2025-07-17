"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Home,
  Smartphone,
  Send,
  Phone,
} from "lucide-react"; // Import Send icon
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isParkingSolutionsPage = pathname === "/parking-solutions";

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    if (isParkingSolutionsPage) {
      window.location.href = "tel:+917842562469";
    } else {
      const contactSection = document.getElementById("contact-form");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("solutions-section");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionizing Parking &{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Urban Mobility
            </span>
            <br />
            with Smart Technology
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered, data-driven parking solutions that transform how cities,
            businesses, and residents manage parking infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 group"
              onClick={scrollToSolutions}
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass text-white border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group bg-transparent"
              onClick={scrollToContact}
            >
              {isParkingSolutionsPage ? (
                <>
                  <Phone className="mr-2 w-5 h-5" />
                  +91 78425 62469
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Talk to Our Team
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements with Square Icons */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center relative">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div
        className="absolute top-1/3 right-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-12 h-12 glass rounded-xl flex items-center justify-center relative">
          <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-1/4 left-1/4 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center relative">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
