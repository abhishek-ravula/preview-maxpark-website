import { Radio, Monitor, AlertTriangle, Settings } from "lucide-react";

export function BoomBarrierFeatures() {
  const features = [
    {
      icon: Radio,
      title: "Automatic Gate Control",
      description:
        "RFID and FASTag integration for seamless vehicle identification and automated barrier operation.",
    },
    {
      icon: Monitor,
      title: "Remote Digital Approvals",
      description:
        "Real-time monitoring dashboard with digital approval workflows and access management.",
    },
    {
      icon: AlertTriangle,
      title: "Safety Integrations",
      description:
        "Advanced sensors and obstruction detection systems ensure safe operation and prevent accidents.",
    },
    {
      icon: Settings,
      title: "Smart Configuration",
      description:
        "Customizable settings for different access levels, time-based controls, and automated scheduling.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Boom Barriers Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology meets practical functionality for comprehensive
            access control solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-3xl"></div>
              <img
                src="/images/how_boom_barrier_works.webp"
                alt="Boom Barrier Control System Diagram"
                className="relative w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
