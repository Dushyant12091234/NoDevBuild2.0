import AboutSection from '../../src/components/AboutSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - StellarCourses',
  description: 'Learn about our mission and team.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutSection />
    </div>
  );
}
