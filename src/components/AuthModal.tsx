"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface AuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AuthModal({ open, setOpen }: AuthModalProps) {
  const [mounted, setMounted] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">{authMode === 'login' ? 'Login' : 'Register'}</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border rounded-lg px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border rounded-lg px-3 py-2"
              placeholder="Enter your password"
            />
          </div>
          {authMode === 'register' && (
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                className="mt-1 block w-full border rounded-lg px-3 py-2"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {authMode === 'login' ? 'Login' : 'Create Account'}
          </button>
          <p className="text-sm text-center">
            {authMode === 'login' ? "Don’t have an account? " : "Already have an account? "}
            <button 
              type="button" 
              onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} 
              className="text-blue-600 hover:underline"
            >
              {authMode === 'login' ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </div>,
    document.body
  );
}