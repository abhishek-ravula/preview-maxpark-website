"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Security Manager",
    company: "Hema Durga Gated Community",
    location: "Miyapur, Hyderabad",
    quote:
      "MaxPark's boom barriers have significantly improved our campus security. The RFID integration works flawlessly and our employees love the seamless access.",
    image: "/images/residential-client-1.webp",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Facility Head",
    company: "Vidyut Arcade Gated Community",
    location: "Bachupally, Hyderabad",
    quote:
      "Excellent reliability and smooth operation. Our residents love the convenience of automated access control. Installation was professional and quick.",
    image: "/images/residential-client-2.webp",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Operations Director",
    company: "Infocity Vijayalakshmi Enduri",
    location: "Uppal, Hyderabad",
    quote:
      "The remote monitoring feature has made our security management so much more efficient. Outstanding support team and robust technology.",
    image: "/images/residential-client-3.webp",
  },
  //   {
  //     id: 4,
  //     name: "Amit Patel",
  //     role: "Operations Director",
  //     company: "Commercial Plaza",
  //     location: "Hyderabad",
  //     quote:
  //       "The remote monitoring feature has made our security management so much more efficient. Outstanding support team and robust technology.",
  //     image: "/images/residential-client-3.webp",
  //   },
];

export function BoomBarrierTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses and communities across India for reliable boom
            barrier solutions
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-1/3 flex-shrink-0 px-4 py-4"
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                    {/* Full-width banner image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.company} installation`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <CardContent className="p-6">
                      {/* Star rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                        "{testimonial.quote}"
                      </p>

                      {/* Client info */}
                      <div className="border-t pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.company}
                        </p>
                        <p className="text-sm text-orange-500 font-medium">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg rounded-full z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg rounded-full z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div
              className="flex space-x-4 pb-4"
              style={{ width: `${testimonials.length * 300}px` }}
            >
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="w-80 flex-shrink-0 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden"
                >
                  {/* Full-width banner image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.company} installation`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <CardContent className="p-5">
                    {/* Star rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Client info */}
                    <div className="border-t pt-3">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-600 mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-600">
                        {testimonial.company}
                      </p>
                      <p className="text-xs text-orange-500 font-medium">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
