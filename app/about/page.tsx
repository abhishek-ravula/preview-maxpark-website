import { Target, Eye, Users, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We continuously push the boundaries of parking technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Our customers' success is our success. We're committed to delivering exceptional value and support.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in honest communication, clear pricing, and transparent business practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from product development to customer service.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "MaxPark was founded with a vision to revolutionize urban parking through smart technology.",
  },
  {
    year: "2020",
    title: "First Commercial Deployment",
    description:
      "Successfully deployed our first commercial parking solution at a major shopping center.",
  },
  {
    year: "2021",
    title: "Series A Funding",
    description:
      "Raised $15M in Series A funding to accelerate product development and market expansion.",
  },
  {
    year: "2022",
    title: "Mobile App Launch",
    description:
      "Launched our consumer mobile app, reaching 100K+ downloads in the first year.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description:
      "Integrated advanced AI algorithms for predictive analytics and demand forecasting.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expanded operations to 50+ cities worldwide, managing 500K+ parking spaces.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About MaxPark
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to transform urban mobility through intelligent
            parking solutions that make cities smarter, more efficient, and more
            livable.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize parking and urban mobility through AI-powered
                  technology that creates seamless, efficient, and sustainable
                  parking experiences for everyone. We believe that smart
                  parking is the foundation of smart cities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To create a world where finding and managing parking is
                  effortless, where cities are more livable, and where
                  technology serves humanity's need for efficient urban
                  mobility. We envision smart parking as a cornerstone of
                  sustainable urban development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company
              culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader - the milestones that shaped
              MaxPark.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <span className="text-lg font-bold text-blue-600">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats */}
      {/* <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              MaxPark by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact on parking and urban mobility worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "500K+",
                label: "Parking Spaces Managed",
                icon: MapPin,
              },
              { number: "50+", label: "Cities Worldwide", icon: MapPin },
              { number: "2M+", label: "Transactions Processed", icon: Award },
              { number: "99.9%", label: "System Uptime", icon: Target },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Us in Shaping the Future of Parking
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're looking for a parking solution or want to be part
              of our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/maxparkai/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 gradient-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity inline-block"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/company/maxparkai/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-block"
              >
                View Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
