"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Updated with MaxPark</h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest updates on smart parking technology, new features, and industry insights delivered to your
            inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-4 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button
                type="submit"
                className="gradient-primary text-white h-12 px-8 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. Read our{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Questions? Email us at{" "}
              <a href="mailto:hello@maxpark.com" className="text-blue-600 hover:underline">
                hello@maxpark.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
