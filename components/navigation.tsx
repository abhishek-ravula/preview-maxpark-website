"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Car,
  Building2,
  Home,
  Smartphone,
  Users,
} from "lucide-react";

const solutions = [
  {
    name: "Commercial",
    href: "/solutions/commercial",
    icon: Building2,
    description: "Enterprise parking management solutions",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Residential",
    href: "/solutions/residential",
    icon: Home,
    description: "Smart parking for communities & apartments",
    color: "from-teal-500 to-green-600",
  },
  {
    name: "Mobile App",
    href: "/solutions/mobile-app",
    icon: Smartphone,
    description: "Find, reserve & pay for parking instantly",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Valet",
    href: "/solutions/valet",
    icon: Users,
    description: "Premium valet parking services",
    color: "from-orange-500 to-red-600",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToContact = () => {
    if (pathname !== "/" && pathname !== "/parking-solutions") {
      // If not on the home page, navigate to home with the hash
      router.push("/#contact-form");
    } else {
      // If already on the home page, just scroll
      const contactSection = document.getElementById("contact-form");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideFooterPaths = ["/booking-payment"];

  if (hideFooterPaths.includes(pathname)) {
    return null;
  }

  // Determine if we should use light text (for transparent nav) or dark text (for solid nav)
  const useLightText =
    (pathname === "/" || pathname === "/parking-solutions") && !isScrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 ">
              <div className="w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/maxpark_logo.webp"
                  alt="MaxPark Logo"
                  className="object-contain w-full h-full"
                  style={{ display: "block" }}
                />
              </div>
              <span>
                <span
                  className={`text-2xl font-bold transition-colors duration-300 text-[#2A6EE5]`}
                >
                  Max
                </span>
                <span
                  // className={`text-2xl font-bold transition-colors duration-300 text-[#FF6B00]`}
                  className={`text-2xl font-bold transition-colors duration-300 text-[#2A6EE5]`}
                >
                  Park
                </span>
              </span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center space-x-8 h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === "/"
                  ? useLightText
                    ? "text-orange-300"
                    : "text-orange-600"
                  : useLightText
                  ? "text-white/90 hover:text-white"
                  : "text-[#2a150c] hover:text-orange-600"
              }`}
            >
              Home
            </Link>
            {/* Solutions Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
              onMouseLeave={() => setShowSolutionsDropdown(false)}
            >
              <div>
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                    pathname.startsWith("/solutions")
                      ? useLightText
                        ? "text-orange-300"
                        : "text-orange-600"
                      : useLightText
                      ? "text-white/90 hover:text-white"
                      : "text-[#2a150c] hover:text-orange-600"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showSolutionsDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-80 transition-all duration-300 ${
                  showSolutionsDropdown
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-2 ring-1 ring-black/5">
                  {solutions.map((solution, index) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/60 hover:scale-[1.02] hover:shadow-lg"
                      onClick={() => setShowSolutionsDropdown(false)}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                      >
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-sm font-semibold text-gray-900 transition-colors duration-200`}
                        >
                          {solution.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === "/about"
                  ? useLightText
                    ? "text-orange-300"
                    : "text-orange-600"
                  : useLightText
                  ? "text-white/90 hover:text-white"
                  : "text-[#2a150c] hover:text-orange-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === "/contact"
                  ? useLightText
                    ? "text-orange-300"
                    : "text-orange-600"
                  : useLightText
                  ? "text-white/90 hover:text-white"
                  : "text-[#2a150c] hover:text-orange-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side (empty for now, for symmetry) */}
          {/* <div className="w-11 h-11 md:flex hidden"></div> */}

          {/* CTA Button */}
          {/* <div className="hidden md:flex">
            <Button
              className="gradient-primary text-white hover:opacity-90 transition-opacity"
              onClick={scrollToContact}
            >
              Book a Demo
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                useLightText
                  ? "text-white hover:bg-white/10"
                  : "text-[#2a150c] hover:bg-orange-50"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 transition-colors duration-300 ${
                useLightText
                  ? "bg-black/90 backdrop-blur-md border border-orange-300/20"
                  : "bg-white/95 backdrop-blur-md border border-orange-200 shadow-lg"
              }`}
            >
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                  useLightText
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-[#2a150c] hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="px-3 py-2">
                <div
                  className={`text-sm font-medium mb-2 ${
                    useLightText ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    href={solution.href}
                    className={`flex items-center space-x-3 px-3 py-3 text-sm rounded-lg transition-colors duration-300 ${
                      useLightText
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-[#2a150c] hover:text-orange-600 hover:bg-orange-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{solution.name}</div>
                      <div
                        className={`text-xs ${
                          useLightText ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {solution.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                  useLightText
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-[#2a150c] hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                  useLightText
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-[#2a150c] hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-2">
                <Button
                  className="w-full gradient-primary text-white"
                  onClick={scrollToContact}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
