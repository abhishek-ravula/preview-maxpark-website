"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import apiService from "@/lib/api";

export function ContactUs({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setIsSubmitted(false);

      const res = await apiService.post("/helpSupport/create", formData);
      if (res.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          description: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: 3D Illustration Image */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-lg animate-float">
              <img
                src="/images/new_contact_us.webp"
                alt="EasyParkAI Dashboard Interface"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="order-1 lg:order-2">
            <Card className="border-0 shadow-xl bg-white rounded-3xl">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Enter your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 shadow-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Provide your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 shadow-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Enter your Phone Number *
                      </label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 shadow-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full rounded-xl border-gray-300 focus:border-orange-500 focus:ring-orange-500 shadow-sm"
                        placeholder="Tell us about your parking needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
                      isLoading={isLoading}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. Our team will get back to you
                      soon.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
