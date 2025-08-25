'use client';

import { useState, useEffect, FC, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Corrected useOnScreen hook
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

const testimonials = [
    { quote: "The UI/UX course was a game-changer for my career. The instructors were incredibly knowledgeable and supportive.", name: "Sarah Johnson", title: "Product Designer", avatar: "https://i.pravatar.cc/80?img=1" },
    { quote: "I went from knowing nothing about code to building my own web applications. Highly recommended!", name: "Michael Chen", title: "Full-Stack Developer", avatar: "https://i.pravatar.cc/80?img=2" },
    { quote: "The marketing masterclass gave me the confidence and skills to launch my own successful online business.", name: "Jessica Rodriguez", title: "Entrepreneur", avatar: "https://i.pravatar.cc/80?img=3" }
];

const TestimonialsSection: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    // Removed the incorrect `triggerOnce` property
    const [sectionRef, isSectionVisible] = useOnScreen({ threshold: 0.1 });

    useEffect(() => {
        if (!isPaused) {
            const slideInterval = setInterval(() => {
                goToNext();
            }, 5000); 

            return () => clearInterval(slideInterval);
        }
    }, [currentIndex, isPaused]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <section 
            id="testimonials" 
            ref={sectionRef}
            className={`py-20 overflow-x-hidden transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-text-main">Loved by Learners Worldwide</h2>
                    <p className="text-text-muted mt-2">Real stories from our amazing community.</p>
                </div>
                
                <div 
                    className="relative max-w-3xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative min-h-[26rem] w-full">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                {index === currentIndex && (
                                    <div className="bg-card/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-border h-full flex flex-col justify-center items-center text-center shadow-2xl shadow-secondary/10">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full border-4 border-secondary object-cover mb-6"/>
                                        <p className="text-xl md:text-2xl text-text-main mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                                        <div>
                                            <p className="font-bold text-lg text-primary">{testimonial.name}</p>
                                            <p className="text-md text-text-muted">{testimonial.title}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20 p-3 bg-card rounded-full border border-border hover:bg-secondary transition-colors duration-300 z-10">
                        <ChevronLeft className="w-6 h-6 text-primary" />
                    </button>
                    <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-20 p-3 bg-card rounded-full border border-border hover:bg-secondary transition-colors duration-300 z-10">
                        <ChevronRight className="w-6 h-6 text-primary" />
                    </button>

                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, slideIndex) => (
                            <button 
                                key={slideIndex} 
                                onClick={() => goToSlide(slideIndex)}
                                aria-label={`Go to slide ${slideIndex + 1}`}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentIndex === slideIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-border/70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;