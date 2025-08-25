import Link from 'next/link';
import type { FC } from 'react';

const Hero: FC = () => {
  return (
   <section className="container mx-auto px-6 pt-48 pb-32 text-center relative z-10">
     
      <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight gradient-text">
        Unlock Your Creative Potential
      </h1>
      <p className="text-lg text-text-muted max-w-3xl mx-auto mb-10 font-sans">
        Explore a universe of knowledge with our expert-led courses. From design to development, we provide the tools to launch your career into the stratosphere.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/courses">
          <button className="px-8 py-3 bg-primary rounded-full text-background font-bold hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-105">
            Explore Courses
          </button>
        </Link>
      </div>
    </section>
  

  );
};
export default Hero;