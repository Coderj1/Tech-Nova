import React from 'react';

const technologies = [
  {
    category: 'Frontend Frameworks',
    items: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js']
  },
  {
    category: '3D & Graphics',
    items: ['Three.js', 'WebGL', 'Babylon.js', 'A-Frame', 'Blender', 'Maya']
  },
  {
    category: 'Performance',
    items: ['Webpack', 'Vite', 'Rollup', 'Web Workers', 'Service Workers', 'PWA']
  },
  {
    category: 'Backend & Cloud',
    items: ['Node.js', 'Express', 'GraphQL', 'AWS', 'Azure', 'Google Cloud']
  },
  {
    category: 'Mobile & Cross-Platform',
    items: ['React Native', 'Flutter', 'Cordova', 'Capacitor', 'Electron', 'Tauri']
  },
  {
    category: 'DevOps & Testing',
    items: ['Docker', 'Kubernetes', 'Jest', 'Cypress', 'Playwright', 'GitHub Actions']
  }
];

const TechnologyStack = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            We leverage the latest and most powerful technologies to deliver 
            cutting-edge web rendering solutions that perform at scale.
          </p>
        </div>

        {/* Technology categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-3">
                {tech.category}
              </h3>
              <div className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">
            Need a technology that's not listed? We're always exploring new tools and frameworks.
          </p>
          <a href="https://wa.me/237695760989" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105">
              Discuss Your Requirements
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
