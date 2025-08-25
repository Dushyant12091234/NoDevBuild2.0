"use client";

import { useState } from "react";
import AuthModal from "../src/components/AuthModal";
import Hero from "../src/components/Hero";
import TestimonialsSection from "../src/components/TestimonialsSection";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 bg-gray-100 shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold">NoDevBuild 🚀</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </header>

      <main className="flex-1 p-6">
        <Hero />
        <TestimonialsSection />
        <button
          onClick={() => setOpen(true)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-lg"
        >
          Get Started
        </button>
      </main>

      <AuthModal open={open} setOpen={setOpen} />
    </div>
  );
}
