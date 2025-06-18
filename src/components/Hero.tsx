
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

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
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-portfolio-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-portfolio-success/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-portfolio-accent rounded-full animate-bounce-gentle opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-portfolio-secondary rounded-full animate-bounce-gentle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-portfolio-success rounded-full animate-bounce-gentle opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Theme Toggle - Fixed Position */}
      <div className="absolute top-8 right-8 z-20">
        <ThemeToggle />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Enhanced Text content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              {/* Enhanced status badge */}
              <div className="inline-flex items-center gap-3 glass-effect-strong px-6 py-3 rounded-full border border-portfolio-accent/30 hover:border-portfolio-accent/50 transition-all duration-300">
                <div className="relative">
                  <div className="w-3 h-3 bg-portfolio-success rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-portfolio-success rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm theme-text font-medium">Available for hire</span>
                <Sparkles className="w-4 h-4 text-portfolio-accent animate-pulse" />
              </div>
              
              {/* Enhanced heading with better typography */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight theme-text">
                  Hi, I'm{' '}
                  <span className="gradient-text block mt-2 bg-gradient-to-r from-portfolio-accent via-purple-500 to-portfolio-secondary bg-clip-text text-transparent animate-gradient">
                    Yangala Umesh
                  </span>
                </h1>
                
                {/* Animated subtitle */}
                <div className="text-2xl lg:text-3xl font-semibold theme-text-muted">
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>Frontend</span>
                  <span className="inline-block animate-fade-in mx-2 text-portfolio-accent" style={{ animationDelay: '0.4s' }}>Developer</span>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>& UI Designer</span>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl theme-text-muted leading-relaxed max-w-2xl">
                A passionate frontend developer dedicated to crafting responsive, 
                modern websites with clean design and interactive features that bring ideas to life.
              </p>
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="btn-primary group">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Hire Me
              </Button>
              <Button onClick={scrollToProjects} variant="outline" className="border-2 border-portfolio-accent/30 theme-text hover:bg-portfolio-accent hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View My Work
              </Button>
            </div>
            
            {/* Enhanced social links with better hover effects */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Umesh624" target="_blank" rel="noopener noreferrer" 
                 className="group p-4 glass-effect hover:glass-effect-strong rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Github className="w-6 h-6 theme-text group-hover:text-portfolio-accent transition-colors" />
              </a>
              <a href="https://linkedin.com/in/yangala-umesh-146aa1264" target="_blank" rel="noopener noreferrer"
                 className="group p-4 glass-effect hover:glass-effect-strong rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Linkedin className="w-6 h-6 theme-text group-hover:text-portfolio-accent transition-colors" />
              </a>
              <a href="mailto:yangalaumesh@gmail.com"
                 className="group p-4 glass-effect hover:glass-effect-strong rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Mail className="w-6 h-6 theme-text group-hover:text-portfolio-accent transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Right column - Profile image with modern square styling */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Enhanced decorative background with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent via-purple-500 to-portfolio-secondary rounded-3xl animate-glow"></div>
                <div className="absolute inset-1 bg-gradient-to-tr from-portfolio-secondary via-pink-500 to-portfolio-success rounded-3xl opacity-50 animate-pulse"></div>
                <div className="absolute inset-3 bg-background rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/fTQjcgnq/1741712003140.jpg" 
                    alt="Yangala Umesh" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 glass-effect-strong rounded-2xl flex items-center justify-center animate-bounce-gentle hover:animate-pulse cursor-pointer">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 glass-effect-strong rounded-2xl flex items-center justify-center animate-bounce-gentle hover:animate-pulse cursor-pointer" style={{ animationDelay: '1s' }}>
                  <span className="text-3xl">💻</span>
                </div>
                <div className="absolute top-4 -left-8 w-12 h-12 glass-effect rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute bottom-4 -right-8 w-12 h-12 glass-effect rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-portfolio-accent cursor-pointer group hover:scale-110 transition-transform duration-300">
          <span className="text-sm font-medium theme-text-muted group-hover:text-portfolio-accent transition-colors">Scroll to explore</span>
          <div className="p-2 glass-effect rounded-full">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
