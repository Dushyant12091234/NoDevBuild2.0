import type { FC } from 'react';

const AboutSection: FC = () => {
    return (
        <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl font-serif font-bold mb-6 gradient-text">
                About StellarCourses
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                StellarCourses was founded on a simple mission: to make high-quality tech education accessible to everyone, everywhere. We believe that learning should be an inspiring and empowering journey. Our expert-led courses are designed not just to teach you skills, but to help you build a career you love.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-card p-6 rounded-xl border border-border transform transition-all duration-300 hover:border-accent hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-2 text-primary">Expert Instructors</h3>
                    <p className="text-text-muted">Learn from industry professionals who are passionate about teaching and have real-world experience.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border transform transition-all duration-300 hover:border-accent hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-2 text-primary">Hands-On Learning</h3>
                    <p className="text-text-muted">Engage with practical projects and real-world examples to solidify your understanding.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border transform transition-all duration-300 hover:border-accent hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-2 text-primary">Community Support</h3>
                    <p className="text-text-muted">Join a thriving community of learners, mentors, and alumni to support your growth.</p>
                </div>
            </div>
        </div>
    );
};
export default AboutSection;
