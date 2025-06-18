
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Experience
          </h2>
          
          <div className="glass-effect p-8 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-portfolio-accent mb-2">
                  Web Development Intern
                </h3>
                <p className="text-lg text-white mb-2">EliteTechIntern</p>
                <p className="text-portfolio-text mb-4">3 months (Online)</p>
                <p className="text-portfolio-text leading-relaxed">
                  Gained hands-on experience in HTML, CSS, and JavaScript while building 
                  interactive frontend interfaces. Worked on multiple projects that enhanced 
                  my understanding of modern web development practices and user experience design.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-portfolio-accent to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">ET</span>
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
