import AllCourses from '../../src/components/AllCourses';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Courses - StellarCourses',
  description: 'Browse all our expert-led courses.',
};

export default function CoursesPage() {
  return (
    <div className="pt-24">
      <AllCourses />
    </div>
  );
}