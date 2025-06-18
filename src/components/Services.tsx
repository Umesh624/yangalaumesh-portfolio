
import { Palette, Smartphone, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive and modern websites using latest technologies',
      features: ['React & JavaScript', 'Responsive Design', 'Modern Frameworks'],
      color: 'from-portfolio-accent to-blue-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
      features: ['User-Centered Design', 'Wireframing', 'Prototyping'],
      color: 'from-portfolio-secondary to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Ensuring perfect experience across all devices',
      features: ['Mobile-First Approach', 'Cross-Platform', 'Touch Optimized'],
      color: 'from-portfolio-success to-green-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white/[0.01] to-transparent">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Services
            </h2>
            <p className="text-xl text-portfolio-text/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive frontend development services to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="glass-effect p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 group hover:scale-105">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-portfolio-text/70 leading-relaxed mb-6">{service.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-portfolio-accent to-purple-500"></div>
                          <span className="text-sm text-portfolio-text/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="glass-effect-strong p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-portfolio-text/70 mb-6 text-lg">
                Let's work together to create something amazing that will make your business stand out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Now
                </button>
                <button className="px-8 py-4 border-2 border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-white rounded-2xl transition-all duration-300 hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
