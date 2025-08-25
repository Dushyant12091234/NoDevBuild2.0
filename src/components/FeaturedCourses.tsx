import type { FC } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Course } from './CourseCard'; // Assuming CourseCard.tsx exists and exports this type

// Data for the featured courses
const featuredCourses: Course[] = [
  { 
    id: 'mastering-ui-ux-design', 
    category: 'Design', 
    title: 'Mastering UI/UX Design', 
    description: '',
    price: '$99', 
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60', 
    color: 'secondary',
    level: 'Intermediate'
  },
  { 
    id: 'web-developer-bootcamp', 
    category: 'Development', 
    title: 'Web Developer Bootcamp', 
    description: '',
    price: '$149', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60', 
    color: 'primary',
    level: 'Beginner'
  },
  { 
    id: 'digital-marketing-masterclass', 
    category: 'Marketing', 
    title: 'Digital Marketing Masterclass', 
    description: '',
    price: '$79', 
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=60', 
    color: 'accent',
    level: 'All Levels'
  },
];

const FeaturedCourses: FC = () => {
    return (
        <section className="pt-0 pb-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col text-center md:flex-row md:text-left justify-between items-center mb-12">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-text-main">Featured Courses</h2>
                        <p className="text-text-muted mt-2">Start your learning journey with our most popular courses.</p>
                    </div>
                    <Link href="/courses" className="hidden md:flex items-center gap-2 mt-4 md:mt-0 text-sm font-semibold text-text-muted hover:text-primary transition-colors group">
                        View All Courses <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                
                {/* --- NEW Simplified Card Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course) => (
                        <Link href={`/courses/${course.id}`} key={course.id} className="block group">
                            <div className="relative rounded-2xl overflow-hidden h-96 border border-border transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
                                {/* Background Image */}
                                <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                
                                {/* Text Content positioned at the bottom */}
                                <div className="relative h-full flex flex-col justify-end p-6 text-left">
                                    <span className={`text-sm font-semibold text-${course.color}`}>{course.category}</span>
                                    <h3 className="text-2xl font-bold mt-1 text-primary">{course.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                 <div className="text-center mt-12 md:hidden">
                    <Link href="/courses">
                        <button className="px-8 py-3 bg-primary/10 border border-primary/20 text-primary font-bold rounded-full hover:bg-primary hover:text-background transition-all duration-300">
                            View All Courses
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;