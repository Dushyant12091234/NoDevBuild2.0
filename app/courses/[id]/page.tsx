import CourseDetail from '../../../src/components/CourseDetail';
import type { Metadata } from 'next';

interface CourseDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const title = params.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Course: ${title} - StellarCourses`,
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return (
    <div className="pt-24">
      <CourseDetail courseId={params.id} />
    </div>
  );
}