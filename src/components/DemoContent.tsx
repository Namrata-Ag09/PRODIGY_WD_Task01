import React from 'react';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Globe, Mail } from 'lucide-react';

const DemoContent: React.FC = () => {
  const sections = [
    {
      id: 'home',
      title: 'Innovative Tech Solutions',
      subtitle: 'Empowering businesses with cutting-edge technology',
      content: 'We deliver scalable software solutions, cloud infrastructure, and digital transformation services that drive growth and efficiency.',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800',
      textColor: 'text-white',
      features: [
        'Cloud-Native Architecture',
        'AI-Powered Analytics',
        'Enterprise Security',
        '24/7 Support'
      ]
    },
    {
      id: 'about',
      title: 'About TechFlow',
      subtitle: 'Leading the digital transformation revolution',
      content: 'With over a decade of experience, we specialize in creating robust, scalable solutions for enterprises worldwide. Our team of expert developers, architects, and consultants work together to deliver exceptional results.',
      bgColor: 'bg-gradient-to-br from-slate-50 to-blue-50',
      textColor: 'text-slate-800',
      stats: [
        { number: '500+', label: 'Projects Delivered' },
        { number: '50+', label: 'Enterprise Clients' },
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '24/7', label: 'Support Available' }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      subtitle: 'Comprehensive technology solutions',
      content: 'From custom software development to cloud migration, we offer end-to-end services tailored to your business needs.',
      bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      textColor: 'text-white',
      services: [
        { icon: Zap, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services' },
        { icon: Shield, title: 'Cybersecurity', desc: 'Advanced security solutions and compliance' },
        { icon: Globe, title: 'Web Development', desc: 'Modern web applications and platforms' },
        { icon: Users, title: 'Consulting', desc: 'Strategic technology consulting and planning' }
      ]
    },
    {
      id: 'projects',
      title: 'Featured Projects',
      subtitle: 'Showcasing our technical expertise',
      content: 'Explore our portfolio of successful implementations across various industries, from fintech to healthcare.',
      bgColor: 'bg-gradient-to-br from-slate-100 to-slate-200',
      textColor: 'text-slate-800',
      projects: [
        { title: 'FinTech Platform', tech: 'React, Node.js, AWS', desc: 'Real-time trading platform serving 100K+ users' },
        { title: 'Healthcare System', tech: 'Vue.js, Python, Docker', desc: 'HIPAA-compliant patient management system' },
        { title: 'E-commerce Solution', tech: 'Next.js, GraphQL, MongoDB', desc: 'Scalable marketplace with AI recommendations' }
      ]
    },
    {
      id: 'solutions',
      title: 'Enterprise Solutions',
      subtitle: 'Tailored for your industry',
      content: 'We understand that every business is unique. Our solutions are designed to address specific industry challenges and requirements.',
      bgColor: 'bg-gradient-to-br from-indigo-600 to-purple-700',
      textColor: 'text-white',
      solutions: [
        'Digital Transformation',
        'Legacy System Modernization',
        'API Development & Integration',
        'DevOps & Automation',
        'Data Analytics & BI',
        'Mobile App Development'
      ]
    },
    {
      id: 'contact',
      title: 'Let\'s Build Something Amazing',
      subtitle: 'Ready to transform your business?',
      content: 'Get in touch with our team to discuss your project requirements and discover how we can help you achieve your technology goals.',
      bgColor: 'bg-gradient-to-br from-slate-800 to-slate-900',
      textColor: 'text-white',
      contact: {
        email: 'hello@techflow.com',
        phone: '+91-8393652341',
        address: 'Greater Noida, India'
      }
    }
  ];

  return (
    <div className="pt-16">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center ${section.bgColor}`}
        >
          <div className="text-center px-4 max-w-6xl mx-auto py-20">
            <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${section.textColor} animate-fadeIn`}>
              {section.title}
            </h2>
            {section.subtitle && (
              <p className={`text-xl md:text-2xl ${section.textColor} opacity-80 mb-6 animate-slideUp`}>
                {section.subtitle}
              </p>
            )}
            <p className={`text-lg md:text-xl ${section.textColor} opacity-90 mb-8 max-w-3xl mx-auto animate-slideUp`}>
              {section.content}
            </p>
            
            {/* Home section features */}
            {section.features && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {section.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* About section stats */}
            {section.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {section.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Services section */}
            {section.services && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {section.services.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-80">{service.desc}</p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Projects section */}
            {section.projects && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {section.projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-3">{project.tech}</p>
                    <p className="text-slate-600 text-sm">{project.desc}</p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Solutions section */}
            {section.solutions && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {section.solutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <span className="text-sm font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Contact section */}
            {section.contact && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                  <p className="font-medium">{section.contact.email}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Users className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                  <p className="font-medium">{section.contact.phone}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Globe className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                  <p className="font-medium">{section.contact.address}</p>
                </div>
              </div>
            )}
            
            <div className="mt-8">
              <button className={`group inline-flex items-center px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 ${
                section.id === 'about' || section.id === 'projects' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
              }`}>
                {section.id === 'contact' ? 'Start Your Project' : 'Learn More'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DemoContent;