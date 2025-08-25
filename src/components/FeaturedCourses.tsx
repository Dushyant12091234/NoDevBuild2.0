'use client';

import { useState, useEffect, useRef, FC } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Course } from './CourseCard';

// A simple hook to detect when an element is visible
const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

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
    const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.1 });
    const [cardsRef, areCardsVisible] = useOnScreen({ threshold: 0.1 });
    
    return (
        <section className="pt-20 pb-20">
            <div className="container mx-auto px-6">
                <div 
                    ref={titleRef}
                    className={`transition-all duration-700 ease-out py-16 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="flex flex-col text-center md:flex-row md:text-left justify-between items-center mb-12">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-text-main">Featured Courses</h2>
                            <p className="text-text-muted mt-2">Start your learning journey with our most popular courses.</p>
                        </div>
                        <Link href="/courses" className="hidden md:flex items-center gap-2 mt-4 md:mt-0 text-sm font-semibold text-text-muted hover:text-primary transition-colors group">
                            View All Courses <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
                
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course, index) => (
                        <div 
                            key={course.id}
                            className={`transition-all duration-700 ease-out ${areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <Link href={`/courses/${course.id}`} className="block group h-full">
                                <div className="relative rounded-2xl overflow-hidden h-96 border border-border transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
                                    <img 
                                        src={course.image} 
                                        alt={course.title} 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm">
                                        <span className="text-sm font-semibold text-gray-300">{course.category}</span>
                                        <h3 className="text-2xl font-bold mt-1 text-white">{course.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;