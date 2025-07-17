"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  BarChart3,
  DollarSign,
  Users,
  Shield,
  Zap,
  Clock,
  Send,
  Car,
  TrendingUp,
  IndianRupee,
  Package,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CommercialHeroButtons } from "@/components/commercial/hero-buttons"; // Import the new component
import { useRouter } from "next/navigation";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive reporting and insights to optimize parking operations and maximize revenue.",
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description:
      "Dynamic pricing algorithms and demand forecasting to increase parking revenue by up to 40%.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Management",
    description:
      "Manage multiple tenants, reserved spaces, and visitor parking with automated enforcement.",
  },
  {
    icon: Shield,
    title: "Security Integration",
    description:
      "Seamless integration with existing security systems and access control infrastructure.",
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description:
      "Live occupancy tracking with instant notifications and automated space management.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description:
      "Round-the-clock monitoring and support with automated customer service capabilities.",
  },
];

const useCases = [
  {
    title: "Shopping Centers",
    description:
      "Optimize customer flow and increase dwell time with intelligent parking guidance.",
    benefits: [
      "Improved customer experience",
      "Increased retail revenue",
      "Reduced congestion",
    ],
  },
  {
    title: "Office Buildings",
    description:
      "Streamline employee parking with reserved spaces and visitor management.",
    benefits: [
      "Employee satisfaction",
      "Visitor convenience",
      "Space optimization",
    ],
  },
  {
    title: "Hospitals & Healthcare",
    description:
      "Ensure critical parking availability for patients, staff, and emergency services.",
    benefits: [
      "Priority access control",
      "Emergency space management",
      "Patient convenience",
    ],
  },
  {
    title: "Universities",
    description:
      "Manage complex parking needs for students, faculty, staff, and visitors.",
    benefits: [
      "Permit management",
      "Event parking",
      "Campus security integration",
    ],
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
    image: "/images/anpr_cameras.webp",
    title: "ANPR Cameras",
  },
  {
    image: "/images/vehicle_access_controller.webp",
    title: "Vehicle Access Controller",
  },
  {
    image: "/images/control_swicthes.webp",
    title: "Control Switches",
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
    image: "/images/led_lights.webp",
    title: "Parking LED Lights",
  },
];

const moreHarewareItems = [
  "Parking LED Displays",
  "Sensors",
  "Ticket Vending Machine",
  "POS Devices",
  "QR Code Scanners",
];

export default function CommercialPage() {
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8">
                <Building2 className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial Parking Solutions
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Transform your commercial parking operations with
                enterprise-grade technology that maximizes revenue, improves
                customer experience, and streamlines management.
              </p>

              {/* Use the new CommercialHeroButtons component */}
              <CommercialHeroButtons />
            </div>
            <div className="relative space-y-6">
              {/* Main Dashboard Card */}
              <div className="glass rounded-3xl p-8 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      Occupancy Rate
                    </span>
                    <span className="text-teal-400 font-bold">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-400 to-blue-400 h-2 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">₹24L</div>
                      <div className="text-gray-300 text-sm">
                        Annual Revenue
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">98.5%</div>
                      <div className="text-gray-300 text-sm">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Turnover Card */}
              <div
                className="glass rounded-2xl p-6 animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Cars Per Day</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-teal-400 font-bold">620</span>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Avg. Daily Turnover
                  </div>
                </div>
              </div>

              {/* Revenue Per Bay Card */}
              <div
                className="glass rounded-2xl p-6 animate-float"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      Monthly Revenue per Bay
                    </span>
                    <span className="text-teal-400 font-bold">₹5,600</span>
                  </div>
                  <div className="text-sm text-gray-300 mb-3">
                    Across 400+ Bays
                  </div>
                  {/* Mini progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-400 to-blue-400 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
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
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive parking management tools designed for large-scale
              commercial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse commercial environments and
              specific industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">
                      Key Benefits:
                    </h4>
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Solutions Video Section */}
      <section
        id="commercial-video"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Our Solution in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch a quick overview of how MaxPark transforms commercial
              parking.
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {/* <iframe
              // src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Replace with actual video URL
              title="MaxPark Commercial Solutions Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe> */}
            <video
              src="/videos/maxparkVideo.mp4"
              controls
              className="absolute top-0 left-0 w-full h-full object-cover"
              // poster="/images/loading.webp" // Optional: shows a poster image before play
              preload="auto"
              autoPlay={true}
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Management Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor, analyze, and optimize your parking operations from a
              single, intuitive interface.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 max-w-5xl mx-auto">
            <div className="relative w-full">
              <img
                src="/images/commercial_dashboard_preview.webp"
                alt="MaxPark Commercial Dashboard"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
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
            <div className="flex gap-6 mt-10 flex-wrap">
              {moreHarewareItems.map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <span className="w-1 h-1 bg-black rounded-lg"></span>
                  <span
                    className="text-[#222222] font-semibold text-md"
                    key={item}
                  >
                    {item}
                  </span>
                </div>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Commercial Parking?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading commercial properties that have increased revenue by
              40% with MaxPark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-opacity"
                onClick={scrollToContact}
              >
                {/* Schedule a Demo */}
                <Send className="w-5 h-5 mr-2" />
                Talk to Our Team
              </Button>
              {/* <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Get Pricing
              </Button> */}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Speak with our experts • Free consultation • No commitment
              required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
