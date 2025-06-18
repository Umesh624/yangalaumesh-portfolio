
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_jbl5b0p', // Service ID
        'template_pptgame', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Yangala Umesh',
        },
        'TFhjwezK8RTsn0IjN' // Public Key
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        description: 'Thank you for reaching out!',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.', {
        description: 'There was an error sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'yangalaumesh@gmail.com', 
      href: 'mailto:yangalaumesh@gmail.com',
      color: 'text-portfolio-accent'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 9573797948', 
      href: 'tel:+919573797948',
      color: 'text-portfolio-success'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'India', 
      href: '#',
      color: 'text-portfolio-secondary'
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Umesh624',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yangala-umesh-146aa1264',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:yangalaumesh@gmail.com',
      color: 'hover:text-portfolio-accent'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white/[0.01] to-transparent">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Let's Work Together
            </h2>
            <p className="text-xl text-portfolio-text/70 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Contact info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
                <p className="text-portfolio-text/70 text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're looking for a frontend developer or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>
              
              {/* Contact information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                        <IconComponent className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-portfolio-text/60 font-medium">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-white hover:text-portfolio-accent transition-colors font-medium"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110 group ${social.color}`}
                      >
                        <IconComponent className="w-6 h-6 text-portfolio-text group-hover:text-current transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Right column - Contact form */}
            <div className="glass-effect-strong p-8 lg:p-10 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-portfolio-text/80">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/5 border-white/10 text-white placeholder:text-portfolio-text/50 focus:border-portfolio-accent h-12 rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-portfolio-text/80">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/5 border-white/10 text-white placeholder:text-portfolio-text/50 focus:border-portfolio-accent h-12 rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-portfolio-text/80">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-portfolio-text/50 focus:border-portfolio-accent rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary h-12 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-24 pt-8 border-t border-white/10">
        <p className="text-portfolio-text/60">
          © 2024 Yangala Umesh. Crafted with ❤️ and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;
