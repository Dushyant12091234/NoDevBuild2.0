import type { Metadata } from 'next';
import './globals.css';
// --- CORRECTED RELATIVE PATHS ---
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
// --------------------------------
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Stellar Courses - Unlock Your Potential',
  description: 'Expert-led courses in design, development, and more.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-full bg-background text-text-main font-sans antialiased animate-aurora aurora-background">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
