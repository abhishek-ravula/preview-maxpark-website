"use client";

import {
  Home,
  Users,
  Shield,
  Clock,
  Key,
  Bell,
  Car,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResidentialHeroButtons } from "@/components/residential/hero-buttons";
import { useRouter } from "next/navigation";
import { ClientShowcase } from "@/components/residential/client-showcase";

const features = [
  {
    icon: Users,
    title: "Resident Management",
    description:
      "Comprehensive resident database with parking assignments, vehicle registration, and access control.",
  },
  {
    icon: Car,
    title: "Guest Parking System",
    description:
      "Streamlined guest registration with temporary access codes and automated time limits.",
  },
  {
    icon: Shield,
    title: "Security Integration",
    description:
      "Seamless integration with gate systems, cameras, and security monitoring platforms.",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description:
      "Real-time alerts for violations, guest arrivals, and parking space availability.",
  },
  {
    icon: Key,
    title: "Access Control",
    description:
      "Digital key management with mobile app access and temporary guest permissions.",
  },
  {
    icon: Settings,
    title: "Property Management",
    description:
      "Integration with existing property management systems and HOA platforms.",
  },
];

const benefits = [
  {
    title: "Reduce Management Overhead",
    description:
      "Automate parking enforcement and reduce staff workload by up to 70%.",
    icon: Clock,
  },
  {
    title: "Improve Resident Satisfaction",
    description:
      "Ensure residents always have access to their designated parking spaces.",
    icon: Users,
  },
  {
    title: "Enhanced Security",
    description:
      "Monitor and control access with real-time alerts and comprehensive logging.",
    icon: Shield,
  },
  {
    title: "Streamlined Operations",
    description:
      "Centralized management dashboard for all parking-related activities.",
    icon: Settings,
  },
];

const hardwareItems = [
  {
    image: "/images/boom_barriers.webp",
    title: "Boom Barriers",
  },
  {
    image: "/images/fastag.webp",
    title: "RFID Tag/Exciting Fast tag",
  },
  {
    image: "/images/rfid_readers.webp",
    title: "RFID Reader",
  },
  {
    image: "/images/safety_sensors.webp",
    title: "Safety Sensors",
  },
  {
    image: "/images/vehicle_access_controller.webp",
    title: "Vehicle Access Controller",
  },
  {
    image: "/images/control_swicthes.webp",
    title: "Control Switches",
  },
];

export default function ResidentialPage() {
  const router = useRouter();

  const scrollToContact = () => {
    router.push("/#contact-form");
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-600 rounded-3xl flex items-center justify-center mb-8">
                <Home className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Residential Parking Solutions
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Transform residential parking management with smart technology
                that ensures resident satisfaction, improves security, and
                reduces administrative burden.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-accent text-white hover:opacity-90 transition-opacity">
                  Schedule Demo
                </Button>
                <Button variant="outline" className="glass text-white border-white/30 hover:bg-white/10 bg-transparent">
                  View Case Studies
                </Button>
              </div> */}
              <ResidentialHeroButtons />
            </div>

            <div className="relative">
              <div className="glass rounded-3xl p-8 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      Building A - Occupancy
                    </span>
                    <span className="text-teal-400 font-bold">94%</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        unit: "Unit 101",
                        status: "Occupied",
                        color: "bg-green-500",
                      },
                      {
                        unit: "Unit 102",
                        status: "Guest Parking",
                        color: "bg-blue-500",
                      },
                      {
                        unit: "Unit 103",
                        status: "Available",
                        color: "bg-gray-500",
                      },
                      {
                        unit: "Unit 104",
                        status: "Occupied",
                        color: "bg-green-500",
                      },
                    ].map((space, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 ${space.color} rounded-full`}
                          ></div>
                          <span className="text-white">{space.unit}</span>
                        </div>
                        <span className="text-gray-300 text-sm">
                          {space.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-600">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">247</div>
                      <div className="text-gray-300 text-sm">
                        Total Parking Spaces
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Residential Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage residential parking efficiently and
              keep residents happy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Residential Properties Choose MaxPark
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that improve operations and resident satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Solutions Video Section */}
      {/* <section
        id="residential-video"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Our Solution in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch a quick overview of how MaxPark transforms residential
              parking.
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              // src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Replace with actual video URL
              title="MaxPark Residential Solutions Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section> */}

      <ClientShowcase />

      {/* Smart Residential Dashboard Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Residential Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              MaxPark’s Residential Dashboard offers gated communities,
              apartments, and co-living spaces a secure and intuitive way to
              manage all parking and access activity. Track visitors, control
              resident access, and monitor all vehicle movements in real time.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 max-w-5xl mx-auto">
            <div className="relative w-full">
              <img
                src="/images/residential_dashboard_preview.webp"
                alt="MaxPark Residential Dashboard"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for All Residential Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Apartment Complexes",
                description:
                  "Multi-building complexes with hundreds of units and diverse parking needs.",
                features: [
                  "Multi-building management",
                  "Resident portals",
                  "Maintenance coordination",
                ],
              },
              {
                title: "Condominiums",
                description:
                  "Owner-occupied units with HOA management and guest parking requirements.",
                features: [
                  "HOA integration",
                  "Owner management",
                  "Guest registration",
                ],
              },
              {
                title: "Townhomes & Communities",
                description:
                  "Gated communities with security requirements and visitor management.",
                features: [
                  "Gate integration",
                  "Visitor tracking",
                  "Community events",
                ],
              },
            ].map((type, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Required Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hardware Required
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              MaxPark supports seamless integration with industry-standard
              parking hardware to ensure smooth, secure, and efficient
              operations at every commercial site.
            </p>
          </div>

          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="overflow-x-auto pb-4 md:overflow-visible">
            <div className="flex space-x-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-x-0">
              {hardwareItems.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 flex-shrink-0 w-64 md:w-auto"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hardware Integration CTA */}
          {/* <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-gray-600 mb-4">
              <Package className="w-5 h-5" />
              <span className="text-sm font-medium">
                Complete hardware integration support included
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Get Hardware Quote
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                View Specifications
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Your Residential Parking Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of residential properties that have improved
              operations and resident satisfaction with MaxPark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-teal-500 to-green-600 text-white hover:opacity-90 transition-opacity"
                onClick={scrollToContact}
              >
                {/* Schedule a Demo */}
                Talk to Our Team
              </Button>
              {/* <Button
                variant="outline"
                className="glass text-white border-white/30 hover:bg-white/10 bg-transparent"
              >
                Get Pricing
              </Button> */}
            </div>
            <p className="text-sm text-gray-300 mt-4">
              Free consultation • Custom implementation • Ongoing support
              included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
