import type { FC } from 'react';

const testimonials = [
    { quote: "The UI/UX course was a game-changer for my career. The instructors were incredibly knowledgeable and supportive.", name: "Sarah Johnson", title: "Product Designer", avatar: "https://i.pravatar.cc/40?img=1" },
    { quote: "I went from knowing nothing about code to building my own web applications. Highly recommended!", name: "Michael Chen", title: "Full-Stack Developer", avatar: "https://i.pravatar.cc/40?img=2" },
    { quote: "The marketing masterclass gave me the confidence and skills to launch my own successful online business.", name: "Jessica Rodriguez", title: "Entrepreneur", avatar: "https://i.pravatar.cc/40?img=3" }
];

const TestimonialsSection: FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-text-main">What Our Students Say</h2>
                    <p className="text-text-muted mt-2">Real stories from our amazing community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-card p-6 rounded-xl border border-border">
                            <p className="text-text-muted italic">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-4">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                                <div className="ml-4">
                                    <p className="font-bold text-text-main">{testimonial.name}</p>
                                    <p className="text-sm text-text-muted">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TestimonialsSection;
