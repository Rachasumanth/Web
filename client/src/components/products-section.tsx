import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Play, Brain, HelpCircle, Users, Smartphone, TrendingUp } from 'lucide-react';

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Flagship Product</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            CocoMam.app represents the future of interactive AI education, 
            combining advanced reasoning with engaging, personalized learning experiences.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">CocoMam.app</h3>
              </div>
              
              <p className="text-lg text-slate-600 mb-8">
                An interactive 2D AI teacher that adapts to every learner's pace and style. 
                With live animations, intelligent quizzes, and advanced AI reasoning, 
                CocoMam makes learning engaging for children and adults alike.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                    <Play className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Live Animations</h4>
                    <p className="text-slate-600">Dynamic visual storytelling that brings concepts to life</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                    <Brain className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">AI Reasoning</h4>
                    <p className="text-slate-600">Advanced logic that adapts explanations to individual understanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                    <HelpCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Interactive Quizzes</h4>
                    <p className="text-slate-600">Personalized assessments that reinforce learning objectives</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                  data-testid="try-cocomam-button"
                >
                  <a href="https://cocomam.app" target="_blank" rel="noopener noreferrer">
                    Try CocoMam.app
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-all"
                  data-testid="learn-more-button"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-gradient-primary p-12 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Children learning with educational technology" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Product Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">For All Ages</h4>
            <p className="text-slate-600">Designed to engage learners from children to adults with age-appropriate content and interactions.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Smartphone className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Multi-Platform</h4>
            <p className="text-slate-600">Available across devices with seamless synchronization and offline capabilities.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Progress Tracking</h4>
            <p className="text-slate-600">Comprehensive analytics and insights to monitor learning progress and achievements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
