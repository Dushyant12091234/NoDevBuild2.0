import { Twitter, Instagram, Linkedin } from 'lucide-react';
import type { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="bg-background/50 border-t border-border mt-auto">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-text-muted">
                <div>
                    <h3 className="text-xl font-serif font-bold mb-4 text-text-main">
                        Stellar<span className="text-primary">Courses</span>
                    </h3>
                    <p className="text-sm">Empowering the next generation of creators and innovators.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-text-main">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="/courses" className="hover:text-primary transition-colors">All Courses</a></li>
                        <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                        <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-4 text-text-main">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-text-main">Connect With Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-border py-6 text-center text-sm text-text-muted">
                <p>&copy; {new Date().getFullYear()} StellarCourses. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
