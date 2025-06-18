
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-portfolio-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-portfolio-success/10 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-portfolio-accent/10 px-4 py-2 rounded-full border border-portfolio-accent/20">
                <div className="w-2 h-2 bg-portfolio-success rounded-full animate-pulse"></div>
                <span className="text-sm text-portfolio-accent font-medium">Available for hire</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text block">Yangala Umesh</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-portfolio-text/80 leading-relaxed max-w-2xl">
                A passionate frontend developer dedicated to crafting responsive, 
                modern websites with clean design and interactive features.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="btn-primary">
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
              <Button onClick={scrollToProjects} variant="outline" className="border-2 border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                View My Work
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Umesh624" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/5 hover:bg-portfolio-accent/20 rounded-xl transition-all duration-300 hover:scale-110 group">
                <Github className="w-6 h-6 text-portfolio-text group-hover:text-portfolio-accent transition-colors" />
              </a>
              <a href="https://linkedin.com/in/yangala-umesh-146aa1264" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white/5 hover:bg-portfolio-accent/20 rounded-xl transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-6 h-6 text-portfolio-text group-hover:text-portfolio-accent transition-colors" />
              </a>
              <a href="mailto:yangalaumesh@gmail.com"
                 className="p-3 bg-white/5 hover:bg-portfolio-accent/20 rounded-xl transition-all duration-300 hover:scale-110 group">
                <Mail className="w-6 h-6 text-portfolio-text group-hover:text-portfolio-accent transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Right column - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent via-purple-500 to-portfolio-secondary rounded-3xl animate-glow"></div>
                <div className="absolute inset-2 bg-portfolio-dark rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Yangala Umesh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-portfolio-secondary rounded-2xl flex items-center justify-center animate-bounce-gentle">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-portfolio-success rounded-2xl flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-portfolio-accent">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
