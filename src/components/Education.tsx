import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
const Education = () => {
  return <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold theme-text mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl theme-text-muted max-w-3xl mx-auto">
            Academic foundation that shapes my approach to technology and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-accent via-portfolio-secondary to-portfolio-success"></div>
            
            {/* Education card */}
            <div className="relative pl-24 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-background shadow-lg"></div>
              
              {/* Card */}
              <div className="glass-effect hover:glass-effect-strong rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-portfolio-accent/20 hover:border-portfolio-accent/40">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon and basic info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-portfolio-accent to-portfolio-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold theme-text mb-1">
                        B.Tech in Computer Science & Engineering
                      </h3>
                      <p className="text-lg font-semibold text-portfolio-accent">
                        Sri Venkateshwara College of Engineering
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 lg:text-right">
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 theme-text-muted">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">2022 - 2025</span>
                      </div>
                      <div className="flex items-center gap-2 theme-text-muted">
                        <MapPin className="w-4 h-4" />
                        <span>Tirupati, Andhra Pradesh</span>
                      </div>
                      <div className="flex items-center gap-2 text-portfolio-success">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">2025 passed out</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional details */}
                <div className="mt-6 pt-6 border-t border-portfolio-accent/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold theme-text mb-3">Key Subjects</h4>
                      <ul className="space-y-2 theme-text-muted">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full"></div>
                          Data Structures & Algorithms
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-secondary rounded-full"></div>
                          Web Development
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-success rounded-full"></div>
                          Database Management
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          Software Engineering
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold theme-text mb-3">Focus Areas</h4>
                      <ul className="space-y-2 theme-text-muted">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full"></div>
                          Frontend Development
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-secondary rounded-full"></div>
                          UI/UX Design
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-success rounded-full"></div>
                          Machine Learning
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          Problem Solving
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future education placeholder */}
            <div className="relative pl-24 opacity-60">
              <div className="absolute left-6 top-8 w-4 h-4 bg-portfolio-text/30 rounded-full border-4 border-background"></div>
              
              <div className="glass-effect rounded-3xl p-8 border border-dashed border-portfolio-accent/30">
                <div className="text-center theme-text-muted">
                  <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Future Learning</h3>
                  <p>Space reserved for additional certifications and advanced studies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;