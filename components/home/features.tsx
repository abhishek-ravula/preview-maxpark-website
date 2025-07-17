"use client";

import {
  Building2,
  Home,
  Smartphone,
  Users,
  Brain,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Enterprise-grade parking management for shopping centers, offices, and business districts.",
    features: [
      "Real-time occupancy",
      "Revenue optimization",
      "Analytics dashboard",
    ],
    // color: "from-orange-500 to-red-600",
    color: "from-blue-500 to-indigo-600",
    route: "/solutions/commercial",
  },
  {
    icon: Home,
    title: "Residential",
    description:
      "Smart parking solutions for apartment complexes, condos, and residential communities.",
    features: ["Resident management", "Guest parking", "Security integration"],
    color: "from-teal-500 to-green-600",
    route: "/solutions/residential",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "User-friendly mobile application for seamless parking experience and management.",
    features: [
      "Find & reserve spots",
      "Digital payments",
      "Navigation assistance",
    ],
    // color: "from-orange-600 to-red-500",
    color: "from-purple-500 to-pink-600",
    route: "/solutions/mobile-app",
  },
  {
    icon: Users,
    title: "Valet",
    description:
      "Digital valet services with smart tracking and automated customer communication.",
    features: [
      "Digital ticketing",
      "Vehicle tracking",
      "Customer notifications",
    ],
    // color: "from-red-500 to-orange-600",
    color: "from-orange-500 to-red-600",
    route: "/solutions/valet",
  },
];

const coreFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced machine learning algorithms optimize parking allocation and predict demand patterns.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Comprehensive analytics and reporting to maximize efficiency and revenue generation.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with encrypted data transmission and secure payment processing.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Instant updates and notifications with millisecond response times for optimal user experience.",
  },
];

export function Features() {
  return (
    <section
      id="solutions-section"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solutions Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Parking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From commercial enterprises to residential communities, our
            AI-powered platform adapts to every parking challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-500 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link href={solution.route}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MaxPark?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge technology with a focus on scalability,
            security, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
