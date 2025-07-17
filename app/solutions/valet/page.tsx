import {
  Users,
  Clock,
  Car,
  Bell,
  Shield,
  BarChart3,
  Smartphone,
  Key,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ValetHeroButtons } from "@/components/valet/hero-buttons";

const features = [
  {
    icon: Smartphone,
    title: "Digital Ticketing System",
    description:
      "Paperless valet operations with QR code tickets, digital receipts, and automated check-in/out process.",
  },
  {
    icon: Car,
    title: "Vehicle Tracking",
    description:
      "Real-time vehicle location tracking with photo documentation and secure key management.",
  },
  {
    icon: Bell,
    title: "Customer Notifications",
    description:
      "Automated SMS and push notifications for vehicle status updates and retrieval notifications.",
  },
  {
    icon: Clock,
    title: "Queue Management",
    description:
      "Intelligent queue optimization to minimize wait times and improve customer satisfaction.",
  },
  {
    icon: Shield,
    title: "Insurance & Security",
    description:
      "Comprehensive insurance coverage with vehicle condition documentation and secure storage.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Detailed reporting on operations, revenue, customer satisfaction, and staff performance.",
  },
];

const benefits = [
  {
    title: "Streamlined Operations",
    description:
      "Reduce operational complexity and improve efficiency with automated workflows and digital processes.",
    icon: Clock,
    stats: "50% faster service",
  },
  {
    title: "Enhanced Customer Experience",
    description:
      "Provide premium service with real-time updates, seamless payments, and professional management.",
    icon: Users,
    stats: "95% satisfaction rate",
  },
  {
    title: "Increased Revenue",
    description:
      "Optimize pricing, reduce no-shows, and increase throughput with intelligent demand management.",
    icon: BarChart3,
    stats: "30% revenue increase",
  },
  {
    title: "Complete Security",
    description:
      "Ensure vehicle safety with comprehensive tracking, documentation, and insurance coverage.",
    icon: Shield,
    stats: "Zero liability incidents",
  },
];

const useCases = [
  {
    title: "Hotels & Resorts",
    description:
      "Provide luxury valet services that enhance guest experience and hotel reputation.",
    features: [
      "Guest management integration",
      "Concierge coordination",
      "VIP service tiers",
    ],
    icon: "🏨",
  },
  {
    title: "Restaurants & Events",
    description:
      "Manage high-volume valet operations during peak dining hours and special events.",
    features: [
      "Event scheduling",
      "Peak hour optimization",
      "Customer wait time tracking",
    ],
    icon: "🍽️",
  },
  {
    title: "Corporate Buildings",
    description:
      "Offer premium valet services for executives, clients, and important business meetings.",
    features: [
      "Executive priority service",
      "Meeting coordination",
      "Visitor management",
    ],
    icon: "🏢",
  },
  {
    title: "Medical Centers",
    description:
      "Provide convenient valet parking for patients, visitors, and medical staff.",
    features: [
      "Patient priority handling",
      "Emergency vehicle access",
      "Accessibility compliance",
    ],
    icon: "🏥",
  },
];

const workflow = [
  {
    step: "1",
    title: "Digital Check-In",
    description:
      "Customer arrives and checks in via mobile app or kiosk with vehicle details and contact information.",
    icon: Smartphone,
  },
  {
    step: "2",
    title: "Vehicle Documentation",
    description:
      "Valet attendant documents vehicle condition with photos and securely stores keys with tracking.",
    icon: Car,
  },
  {
    step: "3",
    title: "Secure Parking",
    description:
      "Vehicle is parked in designated secure area with GPS tracking and insurance coverage active.",
    icon: Shield,
  },
  {
    step: "4",
    title: "Retrieval Request",
    description:
      "Customer requests vehicle via app with estimated retrieval time and real-time status updates.",
    icon: Bell,
  },
  {
    step: "5",
    title: "Quick Delivery",
    description:
      "Vehicle is retrieved and delivered to customer with digital payment processing and receipt.",
    icon: Key,
  },
];

export default function ValetPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Valet Solutions
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Transform traditional valet services with smart technology that
                enhances customer experience, improves operational efficiency,
                and maximizes revenue potential.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                  Schedule Demo
                </Button>
                <Button
                  variant="outline"
                  className="glass text-white border-white/30 hover:bg-white/10 bg-transparent"
                >
                  View Case Studies
                </Button>
              </div> */}
              <ValetHeroButtons />
            </div>

            <div className="relative">
              <div className="glass rounded-3xl p-8 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      Valet Operations
                    </span>
                    <span className="text-orange-400 font-bold">Live</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">24</div>
                      <div className="text-gray-300 text-sm">
                        Vehicles Parked
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        3.2min
                      </div>
                      <div className="text-gray-300 text-sm">Avg Wait Time</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-medium text-white">
                      Recent Activity
                    </div>
                    {[
                      {
                        action: "Vehicle Retrieved",
                        time: "2 min ago",
                        status: "completed",
                      },
                      {
                        action: "New Check-in",
                        time: "5 min ago",
                        status: "active",
                      },
                      {
                        action: "Vehicle Parked",
                        time: "8 min ago",
                        status: "completed",
                      },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              activity.status === "active"
                                ? "bg-orange-500"
                                : "bg-green-500"
                            }`}
                          ></div>
                          <span className="text-white text-sm">
                            {activity.action}
                          </span>
                        </div>
                        <span className="text-gray-300 text-xs">
                          {activity.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-600">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        ₹ 1,07,152
                      </div>
                      <div className="text-gray-300 text-sm">
                        Today's Revenue
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
              Complete Valet Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a professional, efficient, and
              profitable valet operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Proven Business Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See measurable improvements in efficiency, customer satisfaction,
              and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {benefit.description}
                      </p>
                      <div className="text-lg font-bold text-orange-600">
                        {benefit.stats}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-slate-900" id="how-valet-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Digital Valet Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless, technology-driven process that delights customers and
              optimizes operations.
            </p>
          </div>

          <div className="space-y-8">
            {workflow.map((step, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                <div className="flex-1 glass rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* {index < workflow.length - 1 && ( */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                {/* )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored valet solutions for different industries and business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>

                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 justify-center"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Valet Operations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading hospitality and service businesses that have
              revolutionized their valet services with MaxPark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                {/* Schedule a Demo */}
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
              Free consultation • Custom implementation • Staff training
              included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
