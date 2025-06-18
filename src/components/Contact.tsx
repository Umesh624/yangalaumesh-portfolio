
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { label: 'Email', value: 'yangalaumesh@gmail.com', href: 'mailto:yangalaumesh@gmail.com' },
    {  label: 'Phone', value: '9573797948', href: 'tel:9573797948' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yangala-umesh-146aa1264', href: 'https://linkedin.com/in/yangala-umesh-146aa1264' },
    { label: 'GitHub', value: 'github.com/Umesh624', href: 'https://github.com/Umesh624' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
                <p className="text-portfolio-text leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're looking for a frontend developer or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-portfolio-accent font-semibold min-w-[80px]">
                      {info.label}:
                    </span>
                    <a 
                      href={info.href}
                      className="text-portfolio-text hover:text-portfolio-accent transition-colors"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-portfolio-text"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-portfolio-text"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-portfolio-text"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-portfolio-accent to-blue-500 hover:from-portfolio-accent/80 hover:to-blue-500/80 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-white/10">
        <p className="text-portfolio-text">
          © 2024 Yangala Umesh. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
