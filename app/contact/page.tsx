"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5F5DC] p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Form Section */}
          <div className="p-8 bg-[#F5F5DC]">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Get in Touch ✨
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D2B48C] focus:outline-none shadow-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D2B48C] focus:outline-none shadow-sm"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D2B48C] focus:outline-none shadow-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#D2B48C] text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 flex flex-col items-center justify-center h-full">
                <h3 className="text-2xl font-semibold text-[#8B4513]">
                  🎉 Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out. We’ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#D2B48C] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#A0522D] transition"
                >
                  Send Another
                </button>
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=60"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}