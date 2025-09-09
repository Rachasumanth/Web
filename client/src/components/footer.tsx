import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SiX, SiLinkedin, SiGithub, SiYoutube } from 'react-icons/si';
import { StrawberryLogo } from './strawberry-logo';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <StrawberryLogo size="md" />
                <div>
                  <h3 className="text-xl font-bold">Strawberry Studios</h3>
                  <p className="text-slate-400 text-sm">Building Human-Centric AI</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Creating scalable AI solutions for education and beyond. 
                Join us in revolutionizing how the world learns through intelligent, interactive experiences.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  data-testid="footer-twitter"
                >
                  <SiX className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  data-testid="footer-linkedin"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  data-testid="footer-github"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  data-testid="footer-youtube"
                >
                  <SiYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="https://cocomam.app" className="hover:text-white transition-colors">
                    CocoMam.app
                  </a>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">AI Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Developer API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('team')}
                    className="hover:text-white transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Strawberry Studios. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 z-50"
          size="icon"
          data-testid="scroll-to-top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
}
