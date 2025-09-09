import React from 'react';
import { User, GraduationCap, Code, Lightbulb, Users, Rocket, Heart } from 'lucide-react';
import { SiLinkedin, SiX } from 'react-icons/si';

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Led by visionary entrepreneurs and AI experts passionate about transforming education through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration in modern office" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Founder & CEO</h3>
                  <p className="text-slate-600">
                    <a 
                      href="mailto:founder@strawberrystudios.tech" 
                      className="hover:text-red-600 transition-colors"
                      data-testid="founder-email"
                    >
                      founder@strawberrystudios.tech
                    </a>
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 mb-6">
                Visionary leader with deep expertise in AI, education technology, and scalable software architecture. 
                Passionate about creating human-centric AI solutions that make a meaningful impact on global education.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-red-600" />
                  <span className="text-slate-700">AI & Machine Learning Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-red-600" />
                  <span className="text-slate-700">Full-Stack Technology Leader</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-5 h-5 text-red-600" />
                  <span className="text-slate-700">Education Innovation Advocate</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-red-600 transition-colors"
                  data-testid="founder-linkedin"
                >
                  <SiLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-red-600 transition-colors"
                  data-testid="founder-twitter"
                >
                  <SiX className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Collaborative</h4>
            <p className="text-slate-600">We believe the best solutions come from diverse perspectives working together.</p>
          </div>
          <div className="text-center p-6">
            <Rocket className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Innovation-Driven</h4>
            <p className="text-slate-600">Constantly pushing boundaries to create breakthrough educational experiences.</p>
          </div>
          <div className="text-center p-6">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Impact-Focused</h4>
            <p className="text-slate-600">Every decision is guided by our mission to improve educational outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
