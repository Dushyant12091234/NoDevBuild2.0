"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 via-pink-50 to-blue-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch ✨
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-green-600">
              🎉 Message Sent!
            </h3>
            <p className="text-gray-600">
              Thanks for reaching out. We’ll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-purple-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Send Another
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
