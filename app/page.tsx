import Hero from "../src/components/Hero";
import TestimonialsSection from "../src/components/TestimonialsSection";
import FeaturedCourses from "../src/components/FeaturedCourses";
import AnimatedBackground from "../src/components/AnimatedBackground"; // Import the new component

export default function HomePage() {
  return (
    <>
      <AnimatedBackground /> {/* Add it here, outside the other components */}
      <Hero />
      <FeaturedCourses />
      <TestimonialsSection />
    </>
  );
}