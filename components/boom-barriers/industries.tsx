import { Building2, Home, Truck, GraduationCap } from "lucide-react";

export function BoomBarrierIndustries() {
  const industries = [
    {
      icon: Home,
      title: "Residential",
      description:
        "Secure gated communities and apartment complexes with automated access control.",
    },
    {
      icon: Building2,
      title: "Commercial",
      description:
        "Office buildings, shopping centers, and business parks with professional security solutions.",
    },
    {
      icon: Truck,
      title: "Toll & Highways",
      description:
        "High-speed toll collection and highway access management systems.",
    },
    {
      icon: GraduationCap,
      title: "Campus & Institutions",
      description:
        "Educational institutions, hospitals, and government facilities with controlled access.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types Of Properties We Manage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored boom barrier solutions for diverse sectors and
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="group text-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
