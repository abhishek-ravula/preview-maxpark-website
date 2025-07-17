import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Bell, Home, LayoutDashboard } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Wrench,
      title: "Dedicated On-Ground Support & Maintenance",
      description:
        "24/7 professional support with on-site maintenance teams ready to address any issues. Our dedicated technicians ensure your systems run smoothly with proactive maintenance and rapid response times.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Bell,
      title: "Real-Time Alerts & Reporting",
      description:
        "Instant notifications and comprehensive reporting system that keeps you informed about every aspect of your community. Advanced analytics and customizable alerts ensure you never miss critical information.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Home,
      title: "Tailored for Residential Communities",
      description:
        "Purpose-built solutions designed specifically for residential complexes. Our system understands the unique needs of community living and adapts to your specific requirements seamlessly.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: LayoutDashboard,
      title: "All-in-One Integrated Dashboard",
      description:
        "Unified platform serving Admin, Resident, and Security needs. One comprehensive dashboard that provides role-based access and streamlines communication across all community stakeholders.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Key Features of Our Parking Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
