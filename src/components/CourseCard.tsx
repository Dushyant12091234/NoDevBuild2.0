'use client';

import Link from 'next/link';
import type { FC, ReactElement } from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';

export type Course = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  image: string;
  color: string;
  level: string;
};

// Helper for dynamic category tag styling
const getCategoryStyles = (color: string) => {
  switch (color) {
    case 'primary':
      return 'bg-primary/10 text-primary border border-primary/20';
    case 'secondary':
      return 'bg-secondary/10 text-secondary border border-secondary/20';
    case 'accent':
      return 'bg-accent/10 text-accent border border-accent/20';
    default:
      return 'bg-card text-text-muted';
  }
};

const CourseCard: FC<{ course: Course }> = ({ course }) => (
  <Link href={`/courses/${course.id}`} className="block group">
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col md:flex-row border border-border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
      <div className="md:w-2/5 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/0B0713/FFF?text=Image+Not+Found`; }}
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col md:w-3/5">
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryStyles(course.color)}`}>
            {course.category}
          </span>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <BarChart3 className="w-4 h-4" /> 
            <span>{course.level}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-3 mb-4 text-text-main flex-grow">{course.title}</h3>
        <p className="text-text-muted mb-6 text-sm">{course.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto pt-4 border-t border-border/50">
          <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 sm:mb-0">{course.price}</p>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-lg font-semibold border border-primary/20 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
            View Course <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default CourseCard;