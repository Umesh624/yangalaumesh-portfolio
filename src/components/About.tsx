
import { Code, Lightbulb, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const strengths = [
    { 
      icon: Lightbulb, 
      title: 'Creative Solutions', 
      description: 'Innovative approaches to complex design challenges with unique visual solutions',
      color: 'text-portfolio-secondary'
    },
    { 
      icon: Target, 
      title: 'Attention to Detail', 
      description: 'Pixel-perfect implementations ensuring flawless user experiences',
      color: 'text-portfolio-accent'
    },
    { 
      icon: TrendingUp, 
      title: 'Continuous Learning', 
      description: 'Always staying updated with the latest technologies and industry trends',
      color: 'text-portfolio-success'
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-portfolio-text/70 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-portfolio-accent/10 px-4 py-2 rounded-full border border-portfolio-accent/20">
                  <Code className="w-4 h-4 text-portfolio-accent" />
                  <span className="text-sm text-portfolio-accent font-medium">Frontend Developer</span>
                </div>
                
                <div className="space-y-4 text-lg text-portfolio-text/80 leading-relaxed">
                  <p>
                    I'm a passionate frontend developer with a strong foundation in web technologies. 
                    My journey in web development began during my college years, and I've been dedicated 
                    to creating beautiful, functional, and user-friendly websites ever since.
                  </p>
                  <p>
                    I believe in the power of clean code, intuitive design, and continuous learning. 
                    Every project is an opportunity to push boundaries and create something meaningful 
                    that makes a difference in users' lives.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-portfolio-text/60">Months Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-portfolio-text/60">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">4</div>
                  <div className="text-sm text-portfolio-text/60">Technologies</div>
                </div>
              </div>
            </div>
            
            {/* Right column - Strengths */}
            <div className="space-y-6">
              {strengths.map((strength, index) => {
                const IconComponent = strength.icon;
                return (
                  <div key={index} className="glass-effect p-6 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-${strength.color.split('-')[1]}-500/20 to-${strength.color.split('-')[1]}-600/20 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${strength.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{strength.title}</h3>
                        <p className="text-portfolio-text/70 leading-relaxed">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
