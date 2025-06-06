import React from 'react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your vision, requirements, and technical constraints. Our team conducts thorough research to create a comprehensive project roadmap.',
    timeline: '1-2 weeks'
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create wireframes, mockups, and interactive prototypes. We focus on user experience while ensuring technical feasibility.',
    timeline: '2-3 weeks'
  },
  {
    icon: Code,
    step: '03',
    title: 'Development & Testing',
    description: 'Our developers bring the designs to life using cutting-edge technologies. We conduct rigorous testing to ensure optimal performance and quality.',
    timeline: '4-8 weeks'
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy your application and provide comprehensive support. Our team monitors performance and provides ongoing maintenance and updates.',
    timeline: 'Client Decision'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            A streamlined, collaborative approach that ensures your project is delivered 
            on time, within budget, and exceeds your expectations.
          </p>
        </div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-24 bg-gradient-to-b from-cyan-400 to-blue-600 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                {/* Step icon and number */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-3">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-slate-800 border-2 border-cyan-400 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-cyan-400 text-xs font-bold">{step.step}</span>
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 mb-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white mb-2 lg:mb-0">
                      {step.title}
                    </h3>
                    <div className="bg-gradient-to-r w-fit from-blue-600/20 to-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1">
                      <span className="text-cyan-400 text-sm font-medium">
                        {step.timeline}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom development plan 
            that brings your vision to life.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;