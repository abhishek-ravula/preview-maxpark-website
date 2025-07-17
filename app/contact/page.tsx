"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import apiService from "@/lib/api";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  function handleGetDirections() {
    window.open("https://maps.app.goo.gl/CQNXfcuD2Mp1WpwB7", "_blank");
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your parking operations? Our team is here to help
            you find the perfect solution for your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels. We're here to
                  help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@maxpark.ai</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 (784) 256-2469</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      NSL Centrum, Kukatpally, Hyderabad,
                      <br />
                      Telangana 500072, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Support</h3>
                    <p className="text-gray-600">24/7 Technical Support</p>
                    <p className="text-sm text-gray-500">
                      For existing customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {/* <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Send us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Company
                            </label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full"
                              placeholder="Your Company"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full"
                            placeholder="How can we help you?"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full"
                            placeholder="Tell us about your parking needs and how we can help..."
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full gradient-primary text-white hover:opacity-90 transition-opacity"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. Our team will get back to
                        you within 24 hours.
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
              </Card> */}

              <Card className="border-0 shadow-xl bg-white rounded-3xl">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Send us a Message
                      </h2>
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
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. Our team will get back to
                        you soon.
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

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              {/* Located in the heart of San Francisco's tech district  */}
              We’re here in Kukatpally, ready to help you reimagine your parking
              experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 h-96 flex items-center justify-center">
            {/* <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                MaxPark Headquarters
              </h3>
              <p className="text-gray-600 mb-4">
                123 Innovation Drive
                <br />
                San Francisco, CA 94105
              </p>
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Get Directions
              </Button>
            </div> */}
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                MaxPark Kukatpally Office
              </h3>
              <p className="text-gray-600 mb-4">
                1st Floor, S1 NSL Centrum,
                <br />
                1043 & 1048, 1st & 2nd Phase, Kukatpally,
                <br />
                Tirumalagiri, Hyderabad, Telangana, India – 500072
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Solving real parking problems — right here from our Kukatpally
                office.
              </p>
              <Button
                className="gradient-primary text-white hover:opacity-90 transition-opacity"
                onClick={handleGetDirections}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can MaxPark be implemented?",
                answer:
                  "Implementation typically takes 2-4 weeks depending on the size and complexity of your parking facility. Our team handles everything from installation to training.",
              },
              {
                question: "Do you offer 24/7 support?",
                answer:
                  "Yes, we provide 24/7 technical support for all our customers. Our support team is available via phone, email, and live chat.",
              },
              {
                question: "Can MaxPark integrate with existing systems?",
                answer:
                  "MaxPark is designed to integrate seamlessly with most existing parking infrastructure, security systems, and property management platforms.",
              },
              {
                question: "What's included in the pricing?",
                answer:
                  "Our pricing includes the software platform, hardware installation, training, ongoing support, and regular updates. We offer flexible pricing models to fit your budget.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
