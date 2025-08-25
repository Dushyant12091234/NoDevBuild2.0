/*import Link from 'next/link';
import type { FC } from 'react';
import { MoveRight } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section className="container mx-auto px-6 pt-48 pb-16 text-center relative z-10">
      <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight gradient-text">
        Unlock Your Creative Potential
      </h1>
      <p className="text-lg text-text-muted max-w-3xl mx-auto mb-10 font-sans">
        Explore a universe of knowledge with our expert-led courses. From design to development, we provide the tools to launch your career into the stratosphere.
      </p>
      <div className="flex justify-center items-center gap-4 mt-16">
        <Link href="/courses">
          <button className="px-8 py-3 bg-black rounded-full text-white font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            Explore Courses <MoveRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero; */

import Link from 'next/link';
import type { FC } from 'react';
import { MoveRight } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section className="container mx-auto px-6 pt-48 pb-16 text-center relative z-10 overflow-hidden">
      {/* Added animation classes and delays */}
      <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight gradient-text animate-hero-visual" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        Unlock Your Creative Potential
      </h1>
      <p className="text-lg text-text-muted max-w-3xl mx-auto mb-10 font-sans animate-hero-visual" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
        Explore a universe of knowledge with our expert-led courses. From design to development, we provide the tools to launch your career into the stratosphere.
      </p>
      <div className="flex justify-center items-center gap-4 mt-16 animate-hero-visual" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
        <Link href="/courses">
          <button className="px-8 py-3 bg-black rounded-full text-white font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            Explore Courses <MoveRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;