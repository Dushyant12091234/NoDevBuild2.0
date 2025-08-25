'use client'; // This directive marks the component as a Client Component

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

type Course = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  image: string;
  color: string;
};

const allCourses: Course[] = [
  { 
    id: 'mastering-ui-ux-design', 
    category: 'Design', 
    title: 'Mastering UI/UX Design', 
    description: 'A deep dive into user-centric design principles, wireframing, and prototyping with Figma.', 
    price: '$99', 
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60', 
    color: 'primary' 
  },
  { 
    id: 'web-developer-bootcamp', 
    category: 'Development', 
    title: 'The Complete Web Developer Bootcamp', 
    description: 'From HTML to React, learn everything you need to become a full-stack developer.', 
    price: '$149', 
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=60', 
    color: 'secondary' 
  },
  { 
    id: 'digital-marketing-masterclass', 
    category: 'Marketing', 
    title: 'Digital Marketing Masterclass', 
    description: 'Master SEO, content strategy, and social media to grow any business online.', 
    price: '$79', 
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=60', 
    color: 'accent' 
  },
];

const CourseCard: FC<{ course: Course }> = ({ course }) => (
  <div className="bg-card rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group h-full flex flex-col border border-border hover:border-primary">
    <div className="overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
          // Add a fallback placeholder image in case the Unsplash link fails
          onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/0B0713/FFF?text=Image+Not+Found`; }}
        />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <span className={`text-sm font-semibold text-${course.color}`}>{course.category}</span>
      <h3 className="text-xl font-bold mt-2 mb-3 text-text-main">{course.title}</h3>
      <p className="text-text-muted mb-4 text-sm flex-grow">{course.description}</p>
      <div className="flex justify-between items-center border-t border-border pt-4 mt-auto">
        <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{course.price}</p>
        <div className="flex items-center gap-2 text-sm font-semibold text-text-muted group-hover:text-primary transition-colors">View Course <ArrowRight className="w-4 h-4" /></div>
      </div>
    </div>
  </div>
);

const AllCourses: FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold">All Courses</h1>
        <p className="text-text-muted mt-2">Find the perfect course to expand your skills.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCourses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="block h-full">
              <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AllCourses;
