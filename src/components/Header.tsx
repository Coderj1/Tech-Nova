import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import logo from '../img/twilight logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-slate-850/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logo} className='w-24 h-20' />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isActive('/services') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Services
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/services') 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 text-left">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
