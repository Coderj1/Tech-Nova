import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Happy Clients'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Secure & Reliable'
  }
];

const About = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose   
              <span className="bg-gradient-to-r ml-1 from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                 Twilight?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're not just another web service company. We're specialists in 
              advanced web rendering technologies, pushing the limits of what's possible 
              in modern technology and innovation.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Expert Team</h3>
                  <p className="text-slate-400">
                    Our developers are certified experts in Web and Graphics build up and modern rendering pipelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Enterprise Ready</h3>
                  <p className="text-slate-400">
                    Scalable solutions that handle millions of users with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg inline-block mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
