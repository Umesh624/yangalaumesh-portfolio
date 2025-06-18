import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const mainProject = {
    title: 'Suspicious Human Activity Detection Using Deep Learning',
    description: 'Built an advanced system capable of identifying abnormal activities through image and video analysis using cutting-edge deep learning techniques. This project demonstrates proficiency in machine learning algorithms and computer vision.',
    longDescription: 'This comprehensive project utilizes state-of-the-art deep learning models to analyze video feeds and images in real-time, detecting suspicious human activities with high accuracy. The system incorporates advanced neural network architectures and computer vision techniques.',
    technologies: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow', 'OpenCV', 'Neural Networks'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    demoUrl: '#',
    codeUrl: 'https://github.com/Umesh624',
    category: 'Machine Learning'
  };

  const otherProjects = [
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and modern design principles',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Interactive Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time updates',
      technologies: ['JavaScript', 'Chart.js', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'E-commerce Landing',
      description: 'Modern e-commerce landing page with smooth animations and responsive design',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-portfolio-text/70 max-w-3xl mx-auto leading-relaxed">
              A showcase of my technical skills and creative problem-solving abilities
            </p>
          </div>
          
          {/* Main Featured Project */}
          <div className="glass-effect-strong p-8 lg:p-12 rounded-3xl mb-16 hover:bg-white/[0.07] transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-portfolio-accent/10 px-3 py-1 rounded-full border border-portfolio-accent/20 mb-4">
                    <span className="text-sm text-portfolio-accent font-medium">{mainProject.category}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {mainProject.title}
                  </h3>
                  <p className="text-portfolio-text/70 text-lg leading-relaxed mb-6">
                    {mainProject.longDescription}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {mainProject.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-portfolio-accent/20 text-portfolio-accent rounded-xl text-sm font-medium border border-portfolio-accent/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button variant="outline" className="border-2 border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src={mainProject.image}
                    alt={mainProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-12">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="glass-effect p-6 rounded-2xl group hover:bg-white/[0.05] transition-all duration-500 hover:scale-105">
                  <div className="space-y-6">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                          <Github className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                      <p className="text-portfolio-text/70 text-sm leading-relaxed mb-4">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-lg text-xs font-medium border border-portfolio-accent/20">
                          {tech}
                        </span>
                      ))}
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

export default Projects;
