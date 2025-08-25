'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AuthModal from '../components/AuthModal'; // adjust path if needed

const Header: FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-border">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
          Stellar<span className="text-primary">Courses</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${
                pathname === link.href ? 'text-primary' : 'hover:text-text-main'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ✅ Get Started Button → opens AuthModal */}
        <button
          onClick={() => setOpen(true)}
          className="hidden md:block px-6 py-2 bg-primary rounded-lg text-black font-semibold hover:opacity-90 transition-all duration-300 shadow-glow-primary"
        >
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </nav>

      {/* ✅ Auth Modal Component */}
      <AuthModal open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
