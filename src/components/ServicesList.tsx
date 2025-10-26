import React from 'react';
import { Cuboid as Cube, Zap, Layers, Gauge, Palette, Database, Shield, Smartphone, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cube,
    title: '3D Web Rendering',
    description: 'Create stunning 3D experiences that run smoothly in any browser. From product visualizations to interactive environments, we deliver photorealistic rendering with optimal performance.',
    features: [
      'Real-time 3D graphics',
      'WebGL & Three.js expertise',
      'Cross-platform compatibility',
      'Advanced lighting & shadows',
      'Texture optimization',
      'Physics simulation'
    ],
    price: 'From 300,000XAF'
  },
  {
    icon: Zap,
    title: 'Interactive Experiences',
    description: 'Engage your users with smooth, responsive interactions that feel native across all devices. We create memorable experiences that drive engagement and conversions.',
    features: [
      'Smooth animations',
      'Touch & gesture support',
      'Responsive interactions',
      'Custom UI components',
      'Progressive enhancement',
      'Accessibility compliance'
    ],
    price: 'From 120,000 XAF'
  },
  {
    icon: Layers,
    title: 'WebGL Development',
    description: 'Custom WebGL solutions for complex visualizations, games, and data-driven applications. We push the boundaries of what\'s possible in web browsers.',
    features: [
      'Custom shader development',
      'GPU-accelerated computing',
      'Complex data visualization',
      'Game development',
      'Particle systems',
      'Post-processing effects'
    ],
    price: 'From 310,000 XAF'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Maximize your application\'s performance with our optimization expertise. We ensure lightning-fast loading times and smooth frame rates.',
    features: [
      'Code splitting & bundling',
      'Asset optimization',
      'CDN integration',
      'Caching strategies',
      'Memory management',
      'Performance monitoring'
    ],
    price: 'From 170,000 XAF'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that complement your technical implementation. Our designers work closely with developers for seamless integration.',
    features: [
      'User experience design',
      'Interface prototyping',
      'Design systems',
      'Brand integration',
      'User testing',
      'Responsive design'
    ],
    price: 'From 85,000 XAF'
  },
  {
    icon: Database,
    title: 'Backend Integration',
    description: 'Seamless integration with your existing systems and databases. We handle the complex backend work so your frontend can shine.',
    features: [
      'API development',
      'Database optimization',
      'Real-time data sync',
      'Cloud deployment',
      'Scalability planning',
      'Security implementation'
    ],
    price: 'From 200,000 XAF'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security for your web applications. We ensure your data and users are protected with industry best practices.',
    features: [
      'Security audits',
      'GDPR compliance',
      'Data encryption',
      'Authentication systems',
      'Vulnerability testing',
      'Security monitoring'
    ],
    price: 'From 170,000 XAF'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure your web applications perform flawlessly on mobile devices. We optimize for touch interfaces and mobile performance.',
    features: [
      'Mobile-first design',
      'Touch optimization',
      'Performance tuning',
      'PWA development',
      'App store deployment',
      'Cross-device testing'
    ],
    price: 'From 310,000 XAF'
  }
];

const ServicesList = () => {
  return (
    <section className="py-4 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            From concept to deployment, we provide end-to-end web rendering solutions 
            tailored to your specific needs and objectives.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              {/* Service header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="text-cyan-400 font-medium text-sm mt-1">
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
