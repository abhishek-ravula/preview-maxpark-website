import { Shield, Zap, Smartphone, Wrench } from "lucide-react";

export function BoomBarrierBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Improved Security",
      description:
        "Advanced access control with RFID authentication and real-time monitoring for enhanced security.",
    },
    {
      icon: Zap,
      title: "Smooth Traffic Flow",
      description:
        "Automated barrier operation ensures seamless vehicle movement without manual intervention.",
    },
    {
      icon: Smartphone,
      title: "Remote Access & Digital Approval",
      description:
        "Control and monitor barriers remotely with digital approval systems and mobile integration.",
    },
    {
      icon: Wrench,
      title: "Durability & Low Maintenance",
      description:
        "Built with high-quality materials for long-lasting performance and minimal maintenance requirements.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Boom Barrier Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of security, efficiency, and
            reliability with our smart boom barrier systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
