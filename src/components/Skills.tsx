
import { useState, useEffect } from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="w-6 h-6" />,
      color: "from-portfolio-accent to-blue-500",
      skills: [
        { name: "HTML5", level: 90, color: "bg-orange-500" },
        { name: "CSS3", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "React", level: 75, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Globe className="w-6 h-6" />,
      color: "from-portfolio-secondary to-pink-500",
      skills: [
        { name: "Responsive Design", level: 88, color: "bg-green-500" },
        { name: "Tailwind CSS", level: 82, color: "bg-teal-500" },
        { name: "UI/UX Principles", level: 78, color: "bg-purple-500" },
        { name: "Figma", level: 70, color: "bg-pink-500" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-portfolio-success to-emerald-500",
      skills: [
        { name: "Git & GitHub", level: 85, color: "bg-gray-700" },
        { name: "VS Code", level: 90, color: "bg-blue-600" },
        { name: "Chrome DevTools", level: 80, color: "bg-red-500" },
        { name: "NPM/Yarn", level: 75, color: "bg-red-600" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Node.js", level: 65, color: "bg-green-600" },
        { name: "Express.js", level: 60, color: "bg-gray-600" },
        { name: "MongoDB", level: 70, color: "bg-green-500" },
        { name: "MySQL", level: 75, color: "bg-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold theme-text mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl theme-text-muted max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills that I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-effect hover:glass-effect-strong rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-portfolio-accent/10 hover:border-portfolio-accent/30"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold theme-text">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium theme-text group-hover:text-portfolio-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm theme-text-muted font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative h-3 glass-effect rounded-full overflow-hidden border border-portfolio-accent/20">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold theme-text mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git', 'GitHub', 
              'Tailwind CSS', 'Bootstrap', 'MongoDB', 'MySQL', 'VS Code', 'Figma'
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-3 glass-effect hover:glass-effect-strong rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-portfolio-accent/20 hover:border-portfolio-accent/50 group cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="theme-text group-hover:text-portfolio-accent transition-colors font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
