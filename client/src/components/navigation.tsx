import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { StrawberryLogo } from './strawberry-logo';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-nav border-b border-slate-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <StrawberryLogo size="md" />
            <span className="text-xl font-bold text-slate-900">Strawberry Studios</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-red-600 transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-slate-600 hover:text-red-600 transition-colors"
              data-testid="nav-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-slate-600 hover:text-red-600 transition-colors"
              data-testid="nav-technology"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-slate-600 hover:text-red-600 transition-colors"
              data-testid="nav-partners"
            >
              Partners
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-slate-600 hover:text-red-600 transition-colors"
              data-testid="nav-team"
            >
              Team
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              data-testid="nav-contact"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-red-600 transition-colors text-left px-4 py-2"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-slate-600 hover:text-red-600 transition-colors text-left px-4 py-2"
                data-testid="mobile-nav-products"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-slate-600 hover:text-red-600 transition-colors text-left px-4 py-2"
                data-testid="mobile-nav-technology"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="text-slate-600 hover:text-red-600 transition-colors text-left px-4 py-2"
                data-testid="mobile-nav-partners"
              >
                Partners
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-slate-600 hover:text-red-600 transition-colors text-left px-4 py-2"
                data-testid="mobile-nav-team"
              >
                Team
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary text-white mx-4 rounded-full"
                data-testid="mobile-nav-contact"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
