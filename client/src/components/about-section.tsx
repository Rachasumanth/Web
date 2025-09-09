import React from 'react';
import { Heart, Rocket, Lightbulb, CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Strawberry Studios</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're passionate about creating AI that truly understands and adapts to human needs, 
            especially in educational contexts where personalization makes all the difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AI technology and machine learning visualization" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 mb-6">
              To democratize access to personalized, intelligent education through scalable AI solutions 
              that adapt to individual learning styles and needs. We believe technology should enhance 
              human potential, not replace human connection.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                <span className="text-slate-700">Human-centric AI design principles</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                <span className="text-slate-700">Scalable cloud-native infrastructure</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                <span className="text-slate-700">Educational impact through innovation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-secondary">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Human-Centric</h4>
            <p className="text-slate-600">Every AI interaction is designed with empathy and understanding at its core.</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-secondary">
            <Rocket className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Scalable</h4>
            <p className="text-slate-600">Built on Google Cloud infrastructure to grow with global educational needs.</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-secondary">
            <Lightbulb className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Innovative</h4>
            <p className="text-slate-600">Pushing boundaries in AI reasoning and interactive learning experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
