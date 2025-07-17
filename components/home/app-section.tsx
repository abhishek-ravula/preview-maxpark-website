"use client";
import Link from "next/link";

export function AppSection() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Control with the{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                MaxPark App
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Experience seamless parking management right from your smartphone.
              Find, reserve, and pay for parking spots with just a few taps.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Real-time parking availability",
                "Instant spot reservation",
                "Contactless payments",
                "Navigation to your spot",
                "Digital receipts & history",
                "Customer support chat",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md animate-float">
              <img
                src="/images/mobile_app_preview.webp"
                alt="MaxPark Mobile App Preview"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
