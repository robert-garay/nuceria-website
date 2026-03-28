"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - in production, this would POST to your Laravel endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-indigo-light uppercase tracking-widest text-sm mb-4 font-body">
              Contact Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="font-body text-xl text-white/80 leading-relaxed">
              Have questions? We&apos;re here to help. Reach out by phone, email, 
              or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="tel:+13053984370"
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:border-indigo-light hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-indigo-pale rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-charcoal mb-1">Phone</h3>
              <p className="font-body text-indigo">(305) 398-4370</p>
            </a>

            <a 
              href="mailto:info@mynuceria.com"
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:border-indigo-light hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-indigo-pale rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-charcoal mb-1">Email</h3>
              <p className="font-body text-indigo">info@mynuceria.com</p>
            </a>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-indigo-pale rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-charcoal mb-1">Location</h3>
              <p className="font-body text-foreground-secondary">
                8500 SW 8th St, Suite 105<br />
                Miami, FL 33144
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-medium text-charcoal mb-4">
                Send Us a Message
              </h2>
              <p className="font-body text-foreground-secondary">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-surface rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-charcoal mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-foreground-secondary mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
                  }}
                  className="font-body text-indigo hover:text-indigo-dark"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                      placeholder="(305) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-body text-sm font-medium text-charcoal mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="services">Service Information</option>
                      <option value="membership">Membership</option>
                      <option value="franchise">Franchise Opportunities</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block font-body text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-charcoal focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all resize-y"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark disabled:bg-indigo/50 text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map & Hours Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate rounded-2xl aspect-video lg:aspect-auto" />
            <div>
              <h2 className="font-display text-3xl font-medium text-charcoal mb-6">
                Hours of Operation
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-body text-charcoal">Monday – Friday</span>
                  <span className="font-body text-foreground-secondary">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-body text-charcoal">Saturday</span>
                  <span className="font-body text-foreground-secondary">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-body text-charcoal">Sunday</span>
                  <span className="font-body text-foreground-secondary">Closed</span>
                </div>
              </div>
              
              <h3 className="font-display text-xl font-medium text-charcoal mb-4">
                Ready to Book?
              </h3>
              <p className="font-body text-foreground-secondary mb-6">
                Schedule your free consultation today and take the first step toward feeling like yourself again.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150 shadow-indigo hover:shadow-lg"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
