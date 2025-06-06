import React from 'react';
import { Cuboid as Cube, Zap, Layers, Gauge } from 'lucide-react';

const services = [
  {
    icon: Cube,
    title: '3D Web Rendering',
    description: 'Immersive 3D experiences with WebGL and Three.js that perform flawlessly across all devices and browsers.',
    features: ['Real-time rendering', 'Cross-platform compatibility', 'Advanced lighting']
  },
  {
    icon: Zap,
    title: 'Interactive Experiences',
    description: 'Engaging user interfaces with smooth animations and responsive interactions that captivate your audience.',
    features: ['Smooth animations', 'Touch interactions', 'Responsive design']
  },
  {
    icon: Layers,
    title: 'WebGL Development',
    description: 'Custom WebGL solutions for complex visualizations, games, and data-driven graphics applications.',
    features: ['Custom shaders', 'Performance optimization', 'Complex visualizations']
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and silky smooth performance through advanced optimization techniques.',
    features: ['Code splitting', 'Asset optimization', 'CDN integration']
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            We specialize in cutting-edge web rendering technologies that push the 
            boundaries of what's possible in the browser.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;