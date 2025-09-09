import React from 'react';
import { Button } from '@/components/ui/button';
import { StrawberryLogo } from './strawberry-logo';
import bannerImage from '../assets/banner.jpg';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-secondary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <StrawberryLogo size="lg" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Strawberry Studios</h1>
                <p className="text-slate-500">strawberrystudios.tech</p>
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Scalable <span className="text-gradient">Human-Centric AI</span> for Education & Beyond
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We create intelligent, interactive AI experiences that revolutionize learning and engagement. 
              Our cloud-native solutions scale seamlessly while maintaining the personal touch that makes education effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('products')}
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                data-testid="hero-explore-cocomam"
              >
                Explore CocoMam.app
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-all"
                data-testid="hero-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={bannerImage}
              alt="Strawberry Studios - Building Human-Centric AI" 
              className="rounded-2xl shadow-2xl animate-float w-full max-w-lg mx-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Learning Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
