import {
  Smartphone,
  Search,
  CreditCard,
  Navigation,
  Bell,
  Shield,
  Users,
  Star,
  Home,
  Building2,
  Car,
  Lock,
  History,
  QrCode,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HowAppWorks } from "@/components/solutions/mobile-app/how-app-works";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Smart Parking Discovery",
    description:
      "Find available parking spots in real-time with AI-powered availability prediction and filtering options.",
  },
  {
    icon: Navigation,
    title: "Turn-by-Turn Navigation",
    description:
      "Get precise directions to your reserved parking spot with integrated GPS navigation and traffic updates.",
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description:
      "Secure, contactless payments with multiple payment methods, automatic billing, and digital receipts.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive timely alerts for parking expiration, spot availability, and important updates.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Bank-level security with encrypted data transmission and privacy-first design principles.",
  },
  {
    icon: Users,
    title: "Social Features",
    description:
      "Share parking spots with friends, family, or colleagues and coordinate group parking needs.",
  },
];

const appFeatures = [
  {
    title: "Real-Time Availability",
    description:
      "See live parking availability with 99.5% accuracy powered by IoT sensors and AI algorithms.",
    benefits: [
      "Live occupancy data",
      "Predictive availability",
      "Historical patterns",
    ],
  },
  {
    title: "Instant Reservations",
    description:
      "Reserve parking spots up to 24 hours in advance with flexible cancellation policies.",
    benefits: ["Advance booking", "Flexible cancellation", "Guaranteed spots"],
  },
  {
    title: "Digital Wallet Integration",
    description:
      "Seamless payment experience with support for all major payment methods and digital wallets.",
    benefits: [
      "Multiple payment options",
      "Auto-pay features",
      "Expense tracking",
    ],
  },
  {
    title: "Parking History & Analytics",
    description:
      "Track your parking patterns, expenses, and favorite locations with detailed analytics.",
    benefits: ["Usage analytics", "Expense reports", "Favorite locations"],
  },
];

const userTypes = [
  {
    title: "Daily Commuters",
    description:
      "Perfect for professionals who need reliable parking for work every day.",
    features: [
      "Monthly parking passes",
      "Reserved spot guarantees",
      "Commuter discounts",
    ],
    icon: "🚗",
  },
  {
    title: "Occasional Parkers",
    description:
      "Ideal for shoppers, visitors, and event attendees who need flexible parking.",
    features: [
      "Pay-per-use pricing",
      "Event parking",
      "Tourist-friendly interface",
    ],
    icon: "🛍️",
  },
  {
    title: "Business Travelers",
    description:
      "Designed for travelers who need parking near airports, hotels, and business centers.",
    features: [
      "Airport parking",
      "Hotel partnerships",
      "Business expense integration",
    ],
    icon: "✈️",
  },
];

const residentialFeatures = [
  {
    icon: Search,
    text: "Search and register your residential society by name",
  },
  {
    icon: Building2,
    text: "Add block and flat number, and link your vehicle(s) with RFID tags",
  },
  {
    icon: Home,
    text: "View and manage all registered apartments in one place",
  },
  {
    icon: Lock,
    text: "Remotely Lock/Unlock your vehicle for exit within the society",
  },
  {
    icon: History,
    text: "Monitor parking activity and history in real-time",
  },
];

const residentialPerfectFor = [
  { icon: Building2, text: "Gated Communities" },
  { icon: Home, text: "Apartment Residents" },
  { icon: Users, text: "Senior Living Homes" },
  { icon: Shield, text: "Property Managers" },
];

const valetFeatures = [
  {
    icon: Car,
    text: "Request vehicle retrieval from any location",
  },
  {
    icon: History,
    text: "View valet check-in/out history in real-time",
  },
  {
    icon: Bell,
    text: "Get notifications when valet accepts or delivers your car",
  },
  {
    icon: QrCode,
    text: "Secure vehicle handovers with QR code or OTP",
  },
  {
    icon: MessageSquare,
    text: "Report issues or provide feedback instantly",
  },
];

export default function MobileAppPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8">
                <Smartphone className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white bg-clip-text text-transparent">
                  MaxPark App
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Experience the future of parking with our intuitive mobile app.
                Find, reserve, and pay for parking spots with just a few taps,
                anywhere in the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://apps.apple.com/app/id6740797639"
                  className="hover:opacity-90 transition-opacity"
                  target="_blank"
                >
                  <img
                    src="/images/download_on_the_app_Store.webp"
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.maxparkai.customer"
                  className="hover:opacity-90 transition-opacity"
                  target="_blank"
                >
                  <img
                    src="/images/get_it_on_google_play.webp"
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                  />
                </Link>
              </div>

              {/* <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-gray-300">
                  <span className="font-bold">4.8/5</span> • 50K+ Reviews
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-xs">
                <img
                  src="/images/booking_screen.webp"
                  alt="MaxPark Mobile App Interface Screenshots"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-h-[500px]"
                  style={{
                    filter:
                      "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 30px rgba(238, 127, 48, 0.1))",
                  }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-pulse">
                  <Bell className="w-8 h-8 text-orange-400" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 glass rounded-xl flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <CreditCard className="w-6 h-6 text-red-400" />
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
              Powerful Mobile Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a seamless parking experience, right in
              your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* App Features Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              App Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features designed to make parking effortless and
              efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">
                      Key Benefits:
                    </h4>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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

      {/* User Types */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Parker
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a daily commuter or occasional visitor, MaxPark
              adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>

                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 justify-center"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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

      {/* Residential Integration Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div className="glass rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-orange-400">
                    EXCLUSIVE IN-APP TAB
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Connected with Your Community
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Manage your apartment parking like never before—right from the
                app.
              </p>

              <div className="space-y-4 mb-8">
                {residentialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Perfect For:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {residentialPerfectFor.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-xs">
                <img
                  src="/images/residential_screen.png"
                  alt="Residential Integration Mobile App Interface"
                  className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  style={{
                    height: 625,
                    width: 300,
                    filter:
                      "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 30px rgba(238, 127, 48, 0.2))",
                  }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-14 h-14 glass rounded-2xl flex items-center justify-center animate-bounce">
                  <Lock className="w-7 h-7 text-orange-400" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 glass rounded-xl flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <Building2 className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valet Integration Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-xs">
                <img
                  // src="/placeholder.svg?height=600&width=300"
                  src="/images/valet_screen.webp"
                  alt="Valet Integration Mobile App Interface"
                  className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  style={{
                    height: 600,
                    width: 300,
                    filter:
                      "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 30px rgba(147, 51, 234, 0.2))",
                  }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-14 h-14 glass rounded-2xl flex items-center justify-center animate-pulse">
                  <Car className="w-7 h-7 text-purple-500" />
                </div>
                <div
                  className="absolute -bottom-4 -right-0 w-12 h-12 glass rounded-xl flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                >
                  <QrCode className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div className="glass rounded-full px-4 py-2 bg-white/20">
                  <span className="text-sm font-semibold text-purple-600">
                    EXCLUSIVE IN-APP TAB
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Smart Valet Parking in Your Pocket
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Control, request, and monitor your valet parking—all from your
                phone.
              </p>

              <div className="space-y-4 mb-8">
                {valetFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-6 bg-white/30">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-gray-900">
                      24/7 Availability
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="font-semibold text-gray-900">
                      Real-time Tracking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowAppWorks />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Download MaxPark App Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join over 100,000 users who have transformed their parking
              experience with MaxPark.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="https://apps.apple.com/app/id6740797639"
                className="hover:opacity-90 transition-opacity"
                target="_blank"
              >
                <img
                  src="/images/download_on_the_app_Store.webp"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.maxparkai.customer"
                className="hover:opacity-90 transition-opacity"
                target="_blank"
              >
                <img
                  src="/images/get_it_on_google_play.webp"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Free to download • Available worldwide • Regular updates with new
              features
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
