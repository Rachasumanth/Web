import React from 'react';
import { Server, Shield, Globe, Lock, Gauge, Maximize } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powered by Advanced Technology</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our cloud-native AI pipelines leverage Google Cloud infrastructure to deliver scalable, 
            reliable, and intelligent educational experiences worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Cloud-Native AI Architecture</h3>
            <p className="text-lg text-slate-600 mb-6">
              Built from the ground up on Google Cloud Platform, our infrastructure ensures 
              99.9% uptime, global scalability, and enterprise-grade security for educational institutions worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                <SiGoogle className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">Google Cloud Platform</h4>
                  <p className="text-sm text-slate-600">Enterprise-grade infrastructure and AI services</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                <Server className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">Kubernetes Orchestration</h4>
                  <p className="text-sm text-slate-600">Auto-scaling containerized microservices</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                <Shield className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">Enterprise Security</h4>
                  <p className="text-sm text-slate-600">End-to-end encryption and compliance standards</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cloud computing infrastructure and data centers" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Technology Benefits */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-secondary rounded-xl">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">99.9% Uptime</h4>
            <p className="text-slate-600">Reliable infrastructure ensures learning never stops</p>
          </div>
          <div className="text-center p-6 bg-gradient-secondary rounded-xl">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Maximize className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">Auto-Scaling</h4>
            <p className="text-slate-600">Seamlessly handles millions of concurrent users</p>
          </div>
          <div className="text-center p-6 bg-gradient-secondary rounded-xl">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">Global CDN</h4>
            <p className="text-slate-600">Low-latency access from anywhere in the world</p>
          </div>
          <div className="text-center p-6 bg-gradient-secondary rounded-xl">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">GDPR Compliant</h4>
            <p className="text-slate-600">Privacy-first approach with data protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
