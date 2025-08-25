"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // just frontend demo
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold text-center mt-4 animate-fade-in">
          ✅ Thank you! Your form was submitted.
        </p>
      )}
    </div>
  );
}
