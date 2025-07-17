"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Phone } from "lucide-react";

export function BoomBarrierHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-10 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-300 to-orange-500 rounded-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-blue-300 to-blue-500 rounded-2xl opacity-10 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Boom Barrier Solutions for{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Urban Security
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Seamless access control with high reliability and intelligent
              automation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => scrollToSection("benefits")}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <Play className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </div>

            {/* Phone Number Display */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <a
                href="tel:+917842562469"
                className="flex items-center text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-orange-500" />
                Call Us: +91 78425 62469
              </a>
              <p className="text-sm text-gray-500">
                For inquiries, demos, or pricing
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-20 blur-3xl"></div>
              <img
                // src="/placeholder.svg?height=500&width=600"
                src="/images/boom_barrier.webp"
                alt="Smart Boom Barrier System"
                className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
