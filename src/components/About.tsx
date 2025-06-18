
import { Code, Palette, Lightbulb, Target, Heart, Coffee } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Crafting visually appealing interfaces with modern aesthetics"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable frontend solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding innovative solutions to complex challenges"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Attention to Detail",
      description: "Ensuring pixel-perfect implementations and user experiences"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learning",
      description: "Continuously exploring new technologies and best practices"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Dedicated Work",
      description: "Committed to delivering high-quality results on time"
    }
  ];

  return (
    <section id="about" className="section-padding bg-portfolio-dark/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold theme-text mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl theme-text-muted max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with a keen eye for design and a love for creating 
            seamless user experiences through modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Profile and bio */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-secondary/30 rounded-3xl blur-xl"></div>
                <div className="relative w-full h-full glass-effect rounded-3xl overflow-hidden border border-portfolio-accent/20">
                  <img 
                    src="https://i.postimg.cc/fTQjcgnq/1741712003140.jpg"
                    alt="Yangala Umesh - About"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-accent/10 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold theme-text">My Journey</h3>
              <div className="space-y-4 theme-text-muted leading-relaxed">
                <p>
                  I'm a Computer Science Engineering student with a deep passion for frontend development. 
                  My journey began with curiosity about how websites work, and it has evolved into a 
                  dedicated pursuit of creating beautiful, functional web experiences.
                </p>
                <p>
                  Through my studies and hands-on projects, I've developed expertise in HTML, CSS, 
                  JavaScript, and modern frameworks. I believe in the power of clean code, thoughtful 
                  design, and continuous learning to build applications that users love.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new design trends, contributing to open-source 
                  projects, and staying updated with the latest in web development technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Strengths grid */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold theme-text mb-8 text-center lg:text-left">My Strengths</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="group p-6 glass-effect hover:glass-effect-strong rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-portfolio-accent/10 hover:border-portfolio-accent/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-portfolio-accent group-hover:text-portfolio-secondary transition-colors">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold theme-text mb-2 group-hover:text-portfolio-accent transition-colors">
                        {strength.title}
                      </h4>
                      <p className="text-sm theme-text-muted leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
