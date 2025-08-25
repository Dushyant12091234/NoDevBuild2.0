import type { FC, ReactElement } from 'react';
import { Target, Code, Users } from 'lucide-react';

// Data for the feature sections to keep the code clean
const features: { icon: ReactElement; title: string; description: string; imageUrl: string }[] = [
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: 'Expert Instructors',
        description: 'Learn from industry professionals who are not only masters of their craft but are also passionate about teaching and sharing their real-world experience to help you succeed.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80'
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: 'Hands-On Learning',
        description: 'We believe in learning by doing. Our courses are packed with practical projects, real-world examples, and interactive exercises to solidify your understanding and build a strong portfolio.',
        // --- FIXED IMAGE URL ---
        imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1470&q=80'
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: 'Community Support',
        description: 'Join a thriving community of learners, mentors, and alumni. Collaborate on projects, get help when you\'re stuck, and build connections that will last throughout your career.',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1470&q=80'
    }
];

const AboutSection: FC = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            {/* --- Main Mission Section --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 md:mb-32">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 gradient-text">
                        Our Mission
                    </h1>
                    <p className="text-lg text-text-muted max-w-xl mx-auto lg:mx-0">
                        StellarCourses was founded on a simple mission: to make high-quality tech education accessible to everyone, everywhere. We believe that learning should be an inspiring and empowering journey. Our expert-led courses are designed not just to teach you skills, but to help you build a career you love.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
                        alt="Collaborative learning environment"
                        className="rounded-2xl shadow-2xl object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* --- Features Section --- */}
            <div className="space-y-24">
                {features.map((feature, index) => (
                    <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Column - Order alternates based on index */}
                        <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                            <img
                                src={feature.imageUrl}
                                alt={feature.title}
                                className="rounded-2xl shadow-2xl object-cover w-full h-full"
                            />
                        </div>

                        {/* Text Content Column */}
                        <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-secondary/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-4xl font-serif font-bold mb-4 text-primary">{feature.title}</h3>
                            <p className="text-text-muted text-lg">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;