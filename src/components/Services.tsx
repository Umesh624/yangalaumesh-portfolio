
const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Services
          </h2>
          
          <div className="glass-effect p-8 rounded-xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-portfolio-accent to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💻</span>
              </div>
              
              <h3 className="text-3xl font-bold text-portfolio-accent mb-4">
                Frontend Development
              </h3>
              
              <p className="text-lg text-portfolio-text leading-relaxed max-w-2xl mx-auto">
                I build responsive, modern user interfaces that look great on all devices and 
                provide seamless user experiences. From concept to deployment, I ensure your 
                website stands out with clean code, fast loading times, and intuitive navigation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['Responsive Design', 'Modern UI/UX', 'Cross-browser Compatibility', 'Performance Optimization'].map((feature, index) => (
                  <span key={index} className="px-4 py-2 bg-portfolio-accent/20 text-portfolio-accent rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
