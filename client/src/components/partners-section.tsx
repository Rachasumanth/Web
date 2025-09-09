import React from 'react';
import { SiGithub, SiJetbrains, SiNotion, SiEducative, SiTermius, SiZyte, SiNamecheap } from 'react-icons/si';

export function PartnersSection() {
  const partners = [
    {
      name: 'GitHub',
      icon: SiGithub,
      description: 'Code hosting and collaboration'
    },
    {
      name: 'Name.com',
      icon: SiNamecheap,
      description: 'Domain registration and DNS'
    },
    {
      name: 'Educative',
      icon: SiEducative,
      description: 'Interactive learning platform'
    },
    {
      name: 'JetBrains',
      icon: SiJetbrains,
      description: 'Development tools and IDEs'
    },
    {
      name: 'Notion',
      icon: SiNotion,
      description: 'Productivity and collaboration'
    },
    {
      name: 'Termius',
      icon: SiTermius,
      description: 'SSH client and terminal'
    },
    {
      name: 'IconScout',
      icon: null,
      description: 'Design assets and icons'
    },
    {
      name: 'Zyte',
      icon: SiZyte,
      description: 'Web scraping platform'
    }
  ];

  return (
    <section id="partners" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted Partners</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We collaborate with industry-leading platforms and tools to deliver exceptional AI education solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              data-testid={`partner-${partner.name.toLowerCase().replace('.', '-')}`}
            >
              {partner.icon ? (
                <partner.icon className="w-12 h-12 text-slate-700 mb-3 hover:text-red-600 transition-colors" />
              ) : (
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-sm">
                    IS
                  </span>
                </div>
              )}
              <h3 className="text-sm font-semibold text-slate-900 text-center mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 text-center leading-tight">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500">
            Partnering with the best to build the future of AI education
          </p>
        </div>
      </div>
    </section>
  );
}