
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Yangala Umesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-text mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate frontend developer dedicated to crafting responsive, modern websites with clean design and interactive features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-portfolio-accent to-blue-500 hover:from-portfolio-accent/80 hover:to-blue-500/80 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 glow-effect"
            >
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-portfolio-accent" />
      </div>
    </section>
  );
};

export default Hero;
