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
                A revolutionary 24/7 interactive 2D teacher that brings education to life through Live2D animations, 
                real-time responses, and personalized learning experiences. CocoMam uses advanced AI to create 
                dynamic teaching sessions that adapt to each student's learning style and pace.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                    <Play className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Live2D Character Animations</h4>
                    <p className="text-slate-600">Interactive teacher with expressions, gestures, and real-time lip sync</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                    <Brain className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Dynamic Teaching & Reasoning</h4>
                    <p className="text-slate-600">Responds to questions in real-time with animated explanations and step-by-step breakdowns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                    <HelpCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Multi-Modal Learning</h4>
                    <p className="text-slate-600">Voice interaction, homework scanning, and document analysis for personalized teaching</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary/10 border border-red-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">In Development</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  CocoMam.app is currently being developed with cutting-edge Live2D technology and AI capabilities. 
                  Our team is working to create the most advanced interactive 2D teacher that will revolutionize 
                  personalized education for students of all ages.
                </p>
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
            <h4 className="text-xl font-semibold text-slate-900 mb-3">24/7 Availability</h4>
            <p className="text-slate-600">Always available interactive teacher that provides real-time explanations and responds to questions instantly.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Smartphone className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Voice & Visual Input</h4>
            <p className="text-slate-600">Voice interactions, homework scanning, and document analysis for comprehensive learning support.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Adaptive Learning</h4>
            <p className="text-slate-600">Studies student psychology and personalizes teaching styles for optimal learning outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
