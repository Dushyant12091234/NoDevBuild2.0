import { Twitter, Instagram, Linkedin, MoveUpRight } from 'lucide-react';
import type { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
    return (
        <footer className="bg-background/50 border-t border-border mt-auto">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Branding Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
                            Stellar<span className="text-primary">Courses</span>
                        </Link>
                        <p className="text-sm text-text-muted mt-4">
                            Empowering the next generation of creators and innovators.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold mb-4 text-text-main">Quick Links</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">Home <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/courses" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">All Courses <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/about" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">About <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/contact" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">Contact <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-text-main">Legal</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">Privacy Policy <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                                <li><a href="#" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">Terms of Service <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright and Socials */}
                <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} StellarCourses. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Twitter /></a>
                        <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Instagram /></a>
                        <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Linkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;