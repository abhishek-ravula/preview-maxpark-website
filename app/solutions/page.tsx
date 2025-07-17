import { Building2, Home, Smartphone, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Enterprise-grade parking management for shopping centers, offices, and business districts with advanced analytics and revenue optimization.",
    href: "/solutions/commercial",
    features: [
      "Real-time occupancy tracking",
      "Revenue optimization",
      "Analytics dashboard",
      "Multi-location management",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Home,
    title: "Residential",
    description:
      "Smart parking solutions for apartment complexes, condos, and residential communities with resident management and security integration.",
    href: "/solutions/residential",
    features: ["Resident management", "Guest parking system", "Security integration", "Automated enforcement"],
    color: "from-teal-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "User-friendly mobile application providing seamless parking experience with real-time availability and digital payments.",
    href: "/solutions/mobile-app",
    features: ["Find & reserve spots", "Digital payments", "Navigation assistance", "Parking history"],
    color: "from-orange-600 to-red-500",
  },
  {
    icon: Users,
    title: "Valet",
    description:
      "Digital valet services with smart tracking, automated customer communication, and streamlined operations management.",
    href: "/solutions/valet",
    features: ["Digital ticketing", "Vehicle tracking", "Customer notifications", "Staff management"],
    color: "from-red-500 to-orange-600",
  },
]

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Parking Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From commercial enterprises to residential communities, our AI-powered platform adapts to every parking
            challenge with intelligent, scalable solutions.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={solution.href}>
                    <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Parking Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you choose the perfect solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="glass text-white border-white/30 hover:bg-white/10 bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
