'use client';

import { useState, useMemo, FC, ReactElement } from 'react';
import { LayoutGrid, PenTool, Code, Megaphone, Search } from 'lucide-react';
import CourseCard, { Course } from './CourseCard'; // Import the new component

// --- DATA ---
const allCourses: Course[] = [
  { 
    id: 'mastering-ui-ux-design', 
    category: 'Design', 
    title: 'Mastering UI/UX Design', 
    description: 'A deep dive into user-centric design principles, wireframing, and prototyping with Figma.', 
    price: '$99', 
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60', 
    color: 'secondary',
    level: 'Intermediate'
  },
  { 
    id: 'web-developer-bootcamp', 
    category: 'Development', 
    title: 'The Complete Web Developer Bootcamp', 
    description: 'From HTML to React, learn everything you need to become a full-stack developer.', 
    price: '$149', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60', 
    color: 'primary',
    level: 'Beginner'
  },
  { 
    id: 'digital-marketing-masterclass', 
    category: 'Marketing', 
    title: 'Digital Marketing Masterclass', 
    description: 'Master SEO, content strategy, and social media to grow any business online.', 
    price: '$79', 
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=60', 
    color: 'accent',
    level: 'All Levels'
  },
];

const categories: { name: string; icon: ReactElement }[] = [
    { name: 'All', icon: <LayoutGrid className="w-4 h-4" /> },
    { name: 'Design', icon: <PenTool className="w-4 h-4" /> },
    { name: 'Development', icon: <Code className="w-4 h-4" /> },
    { name: 'Marketing', icon: <Megaphone className="w-4 h-4" /> }
];

// --- COMPONENT ---
const AllCourses: FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All') return allCourses;
    return allCourses.filter(course => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center pt-8 pb-12 mb-12 border-b border-border">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 gradient-text">
          Explore Our Universe of Courses
        </h1>
        <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
          Dive into expert-led courses in design, development, and marketing. Your path to mastery begins with a single click.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeCategory === category.name 
                    ? 'bg-primary text-background shadow-glow-primary' 
                    : 'bg-card text-text-muted hover:bg-border hover:text-text-main'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full md:w-64 bg-card border border-border rounded-full pl-12 pr-4 py-2.5 text-text-main focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
        ) : (
          <p className="text-center text-text-muted py-10">No courses found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllCourses;