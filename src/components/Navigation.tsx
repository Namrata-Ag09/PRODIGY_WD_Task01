import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Code, Briefcase, Mail, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: Users, href: '#about' },
    { name: 'Services', icon: Zap, href: '#services' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Solutions', icon: Briefcase, href: '#solutions' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'bg-blue-600' : 'bg-blue-500'
              }`}>
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled
                  ? 'text-slate-800'
                  : 'text-white'
              }`}
            >
              TechFlow
            </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    isScrolled
                      ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-white'
                    }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
          isScrolled ? 'bg-white/95' : 'bg-black/20'
        }`}>
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:scale-105 animate-slideIn ${
                isScrolled
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;