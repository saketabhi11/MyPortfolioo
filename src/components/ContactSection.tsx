import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    toast({
      title: "Message sent successfully 🚀",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Failed to send message",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saketabhishek11@gmail.com",
      href: "mailto:saketabhishek11@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9507944041",
      href: "tel:+919507944041",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/saket11",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/saketabhishek",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            06. CONTACT
          </span>
          <h2 className="section-title mb-4">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 rounded-xl card-gradient border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 
                           transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 
                           transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 
                           transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-xl card-gradient border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl card-gradient border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect with Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-lg border border-border bg-secondary/30 
                             hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 
                             flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground"
                  >
                    <link.icon size={20} />
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-center text-muted-foreground">
                Prefer a quick chat? Schedule a call or drop me a message on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
