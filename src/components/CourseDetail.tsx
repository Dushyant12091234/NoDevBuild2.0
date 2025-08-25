'use client';
import { CheckCircle, Lock } from 'lucide-react';
import type { FC } from 'react';

// Define types for course data
type CourseFeature = string;
type CourseData = {
  category: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: CourseFeature[];
};

const allCoursesData: Record<string, CourseData> = {
  'mastering-ui-ux-design': { category: 'Design', title: 'Mastering UI/UX Design', description: 'A deep dive into user-centric design principles, wireframing, and prototyping with Figma. This course covers everything from user research to creating high-fidelity, interactive prototypes.', price: '$99', image: 'https://placehold.co/600x400/00A9FF/0B0713?text=UI/UX', features: ['20+ hours of on-demand video', 'Downloadable resources & templates', 'Real-world portfolio projects', 'Certificate of completion'] },
  'web-developer-bootcamp': { category: 'Development', title: 'The Complete Web Developer Bootcamp', description: 'From HTML to React, learn everything you need to become a full-stack developer.', price: '$149', image: 'https://placehold.co/600x400/8E2DE2/0B0713?text=Web+Dev', features: ['50+ hours of video', 'Full lifetime access', 'Assignments', 'Certificate of completion'] },
  'digital-marketing-masterclass': { category: 'Marketing', title: 'Digital Marketing Masterclass', description: 'Master SEO, content strategy, and social media to grow any business online.', price: '$79', image: 'https://placehold.co/600x400/F7B733/0B0713?text=Marketing', features: ['30+ hours of video', 'Real-world case studies', 'Marketing plan templates', 'Certificate of completion'] },
  // Add other courses here...
};

interface CourseDetailProps {
  courseId: string;
}

const CourseDetail: FC<CourseDetailProps> = ({ courseId }) => {
  const course = allCoursesData[courseId] || allCoursesData['mastering-ui-ux-design']; // Fallback

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side: Course Info */}
        <div className="lg:col-span-2">
          <span className="text-sm font-semibold text-primary">{course.category}</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold my-4 text-text-main">{course.title}</h1>
          <p className="text-lg text-text-muted mb-8">{course.description}</p>
          
          <h2 className="text-2xl font-bold mb-4 text-text-main">What you'll learn</h2>
          <ul className="space-y-3">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Purchase Form */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl p-6 sticky top-32 border border-border">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-6" />
            <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{course.price}</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1">Email Address</label>
                <input type="email" id="email" className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-muted mb-1">Password</label>
                <input type="password" id="password" className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" />
              </div>
               <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-glow-primary">
                <Lock className="w-4 h-4" />
                <span>Sign In & Buy Now</span>
              </button>
              <p className="text-xs text-text-muted text-center">30-Day Money-Back Guarantee</p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
export default CourseDetail;
