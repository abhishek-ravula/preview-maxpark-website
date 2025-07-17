"use client";

import { Search, MapPin, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Parking",
    description:
      "Use our app to locate available parking spots in real-time near your destination.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: MapPin,
    title: "Reserve & Navigate",
    description:
      "Reserve your spot instantly and get turn-by-turn navigation to your parking location.",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: CreditCard,
    title: "Pay Seamlessly",
    description:
      "Complete secure digital payments through the app with automatic billing and receipts.",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: CheckCircle,
    title: "Park & Go",
    description:
      "Arrive at your reserved spot, park with confidence, and enjoy your destination.",
    color: "from-red-600 to-orange-500",
  },
];

export function HowAppWorks() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How the MaxPark App Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of parking with our simple, intelligent, and
            seamless process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col h-full">
              {/* Connection Line */}
              {/* {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0"></div>
              )} */}

              <div className="relative z-10 text-center group flex flex-col h-full">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <div className="glass rounded-2xl p-6 flex flex-col flex-1 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-sm font-bold text-teal-400 mb-2">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Parking Experience?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied customers who have revolutionized their parking with MaxPark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 gradient-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Get Started Today
              </button>
              <button className="px-8 py-3 glass text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
