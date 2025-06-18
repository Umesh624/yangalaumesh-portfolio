
import { Briefcase, Calendar, MapPin, Code, Zap, Globe } from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      icon: <Code className="w-5 h-5" />,
      text: "Built responsive web interfaces using HTML, CSS, and JavaScript"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Implemented interactive features and modern UI components"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Collaborated on real-world projects with industry standards"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-portfolio-dark/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold theme-text mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl theme-text-muted max-w-3xl mx-auto">
            Hands-on experience building real-world applications and learning industry best practices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-accent to-portfolio-secondary"></div>
            
            {/* Experience card */}
            <div className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-portfolio-secondary rounded-full border-4 border-background shadow-lg animate-pulse"></div>
              
              {/* Card */}
              <div className="glass-effect hover:glass-effect-strong rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-portfolio-secondary/20 hover:border-portfolio-secondary/40">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company logo and basic info */}
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-portfolio-secondary to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold theme-text mb-1">
                        Web Development Intern
                      </h3>
                      <p className="text-lg font-semibold text-portfolio-secondary mb-2">
                        EliteTechIntern
                      </p>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 theme-text-muted">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">3 Months</span>
                        </div>
                        <div className="flex items-center gap-2 theme-text-muted">
                          <MapPin className="w-4 h-4" />
                          <span>Remote (Online)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="lg:ml-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-portfolio-success/30">
                      <div className="w-2 h-2 bg-portfolio-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-portfolio-success">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <p className="theme-text-muted leading-relaxed mb-6">
                    Gained hands-on experience in HTML, CSS, and JavaScript while building interactive 
                    frontend interfaces. Worked on real-world projects that enhanced my understanding 
                    of modern web development practices and user experience design.
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold theme-text mb-4">Key Achievements</h4>
                    <div className="grid gap-3">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 glass-effect rounded-xl hover:glass-effect-strong transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-portfolio-secondary/20 rounded-lg flex items-center justify-center text-portfolio-secondary">
                            {achievement.icon}
                          </div>
                          <span className="theme-text-muted">{achievement.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills gained */}
                  <div className="mt-6 pt-6 border-t border-portfolio-secondary/20">
                    <h4 className="font-semibold theme-text mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git', 'GitHub'].map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 glass-effect rounded-full text-sm theme-text border border-portfolio-secondary/30 hover:border-portfolio-secondary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
