
const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Education
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-portfolio-accent to-blue-500"></div>
            
            <div className="relative flex justify-center">
              <div className="glass-effect p-8 rounded-xl max-w-md w-full text-center">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-portfolio-accent rounded-full border-4 border-portfolio-dark"></div>
                
                <h3 className="text-2xl font-bold text-portfolio-accent mb-2">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-lg text-white mb-2">
                  Sri Venkateshwara College of Engineering
                </p>
                <p className="text-portfolio-text">
                  2022 - 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
