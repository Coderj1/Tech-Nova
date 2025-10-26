import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950/30 to-cyan-950/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Experience?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Let's discuss your project and explore how Twilight can bring your vision to life 
            with cutting-edge web rendering technology.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300">
              View Portfolio
            </button>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors duration-300">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span className="text-slate-300">twilightinnovativedev@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors duration-300">
              <Phone className="h-5 w-5 text-cyan-400" />
              <span className="text-slate-300">+237 679 74 44 29</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
