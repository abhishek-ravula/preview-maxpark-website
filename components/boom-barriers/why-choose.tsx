"use client";

import { Button } from "@/components/ui/button";

import { MapPin, BarChart3, Leaf, TrendingUp } from "lucide-react";

export function BoomBarrierWhyChoose() {
  const reasons = [
    {
      icon: MapPin,
      title: "Local Support in Hyderabad",
      description:
        "Dedicated local team providing installation, maintenance, and 24/7 technical support.",
    },
    {
      icon: BarChart3,
      title: "Integrated Analytics",
      description:
        "Comprehensive reporting and analytics dashboard for traffic patterns and usage insights.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Systems",
      description:
        "Energy-efficient designs with solar power options and sustainable materials.",
    },
    {
      icon: TrendingUp,
      title: "Easy Scalability",
      description:
        "Modular systems that grow with your needs, from single barriers to complex networks.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MaxPark Boom Barriers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the MaxPark difference with our commitment to quality,
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group text-center bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Premises?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust MaxPark for their
              boom barrier solutions. Get started with a free consultation
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Get Free Consultation
              </Button>
              {/* <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors bg-transparent"
              >
                Download Brochure
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
