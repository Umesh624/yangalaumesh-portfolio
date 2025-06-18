
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Projects
          </h2>
          
          <div className="glass-effect p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-portfolio-accent mb-4">
                  Suspicious Human Activity Detection Using Deep Learning
                </h3>
                <p className="text-portfolio-text mb-6 leading-relaxed">
                  Built an advanced system capable of identifying abnormal activities through 
                  image and video analysis using cutting-edge deep learning techniques. This 
                  project demonstrates proficiency in machine learning algorithms and computer vision.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-portfolio-accent to-blue-500 hover:from-portfolio-accent/80 hover:to-blue-500/80">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white">
                    See Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-portfolio-accent/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" 
                    alt="Deep Learning Project" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
