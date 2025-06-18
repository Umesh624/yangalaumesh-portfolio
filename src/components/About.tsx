
const About = () => {
  const strengths = [
    { title: 'Creativity', description: 'Innovative solutions and unique design approaches' },
    { title: 'Attention to Detail', description: 'Pixel-perfect implementations and clean code' },
    { title: 'Continuous Learning', description: 'Always staying updated with latest technologies' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-portfolio-text leading-relaxed">
                I'm a passionate frontend developer with a strong foundation in web technologies. 
                My journey in web development began during my college years, and I've been dedicated 
                to creating beautiful, functional, and user-friendly websites ever since.
              </p>
              <p className="text-lg text-portfolio-text leading-relaxed">
                I believe in the power of clean code, intuitive design, and continuous learning. 
                Every project is an opportunity to push boundaries and create something meaningful 
                that makes a difference in users' lives.
              </p>
              
              <div className="grid gap-4 mt-8">
                {strengths.map((strength, index) => (
                  <div key={index} className="glass-effect p-4 rounded-lg">
                    <h3 className="text-portfolio-accent font-semibold mb-2">{strength.title}</h3>
                    <p className="text-sm text-portfolio-text">{strength.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-accent to-blue-500 p-1 animate-glow">
                  <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                      alt="Yangala Umesh" 
                      className="w-72 h-72 rounded-full object-cover"
                    />
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

export default About;
