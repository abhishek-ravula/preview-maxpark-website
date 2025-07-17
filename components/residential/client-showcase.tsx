"use client";

import { MapPin, Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const clients = [
  {
    id: 1,
    name: "Hema Durga Gated Community",
    location: "Miyapur, Hyderabad",
    units: 450,
    residents: 730,
    image: "/images/residential-client-1.webp",
  },
  {
    id: 2,
    name: "Vidyut Arcade Gated Community",
    location: "Bachupally, Hyderabad",
    units: 120,
    residents: 100,
    image: "/images/residential-client-2.webp",
  },
  {
    id: 3,
    name: "Infocity Vijayalakshmi Enduri",
    location: "Uppal, Hyderabad",
    units: 140,
    residents: 230,
    image: "/images/residential-client-3.webp",
  },
];

export function ClientShowcase() {
  const router = useRouter();

  const totalUnits = clients.reduce((sum, client) => sum + client.units, 0);
  const totalResidents = clients.reduce(
    (sum, client) => sum + client.residents,
    0
  );

  return (
    <div className="w-full bg-gradient-to-b from-white to-orange-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Trusted Communities
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Residential Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join {clients.length} residential communities managing {totalUnits}+
            units and {totalResidents}+ residents with MaxPark's intelligent
            parking solutions.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">
                {clients.length}
              </div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">
                {totalUnits}+
              </div>
              <div className="text-gray-600">Units Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">
                {totalResidents}+
              </div>
              <div className="text-gray-600">Residents Served</div>
            </div>
          </div>
        </div>

        {/* Client Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clients.map((client) => (
            <Card
              key={client.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md pt-0 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {client.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{client.name}</h3>
                </div>
              </div>
              <CardContent className="pb-0 py-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Building className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {client.units}
                      </div>
                      <div className="text-sm text-gray-600">Units</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {client.residents}
                      </div>
                      <div className="text-sm text-gray-600">Residents</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            // className="px-8 py-3 text-lg bg-gradient-to-r from-teal-500 to-green-600 hover:bg-white/10 bg-transparent"
            className="px-8 py-3 text-lg bg-gradient-to-r from-teal-500 to-green-600 text-white hover:opacity-90 transition-opacity"
            onClick={() => {
              router.push("/#contact-form");
            }}
          >
            Join These Leading Communities
          </Button>
          <p className="text-[#22222299] mt-4">
            Ready to transform your residential parking management?
          </p>
        </div>
      </div>
    </div>
  );
}
