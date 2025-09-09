import React from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProductsSection } from '@/components/products-section';
import { TechnologySection } from '@/components/technology-section';
import { TeamSection } from '@/components/team-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TechnologySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
