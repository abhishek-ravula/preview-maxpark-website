"use client";

import Link from "next/link";
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const hideFooterPaths = ["/solutions/boom-barriers", "/parking-solutions"];

  if (hideFooterPaths.includes(pathname)) {
    return null;
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="">
            <div className="flex items-center space-x-2 mb-1">
              {/* <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MaxPark</span> */}
              <div className="w-9 h-9 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/maxpark_logo.webp"
                  alt="MaxPark Logo"
                  className="object-contain w-full h-full"
                  style={{ display: "block" }}
                />
              </div>
              {/* <span
              className={`text-xl font-bold transition-colors duration-300 ${
                useLightText ? "text-white" : "text-gradient"
              }`}
            >
              MaxPark
            </span> */}
              {/* <span
                className={`text-xl font-bold transition-colors duration-300 ${"bg-gradient-to-r from-[#2A6EE5] to-[#FF6B00] text-transparent bg-clip-text"}`}
              >
                MaxPark
              </span> */}
              <span>
                <span
                  className={`text-xl font-bold transition-colors duration-300 text-[#2A6EE5]`}
                >
                  Max
                </span>
                <span
                  // className={`text-xl font-bold transition-colors duration-300 text-[#FF6B00]`}
                  className={`text-xl font-bold transition-colors duration-300 text-[#2A6EE5]`}
                >
                  Park
                </span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing parking and urban mobility with AI-powered smart
              technology solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <a
                href="https://www.linkedin.com/company/maxparkai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MaxPark LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/commercial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/residential"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/mobile-app"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile App
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/valet"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Valet
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@maxpark.ai"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@maxpark.ai</span>
              </a>
              <a
                href="tel:+917842562469"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 78425 62469</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hyderabad, IN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MaxPark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
