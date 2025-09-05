import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../img/twilight logo.png'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} className='w-24 h-20' />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering cutting-edge web rendering services and interactive experiences 
              that transform digital visions into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">3D Web Rendering</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Interactive Experiences</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Mobile Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Performance Optimization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400 text-sm">twilightinnovativedev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400 text-sm">+237 679 74 44 29</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400 text-sm">Douala - Bonapriso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Twilight. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;