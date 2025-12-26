import HeroParticles from "./HeroParticles";
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Gradient Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient Floating Particles */}
     <HeroParticles />
  

      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/30 mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Saket Abhishek
          </h1>

          {/* Headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-2">
            <span className="text-gradient font-semibold">Software Development Engineer</span>
            <span className="mx-3 text-border">|</span>
            Full-Stack Developer
            <span className="mx-3 text-border">|</span>
            Building Scalable Products
          </p>

          {/* Summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
            Final-year engineering student who builds, breaks, fixes, and rebuilds—learning through iteration and debugging a little better with every sip of cold coffee ☕
</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
            Driven by curiosity, shaped by discipline , and excited to see where building takes me next 🚀
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a 
              href="/SaketAbhishekResume.pdf" 
              download 
              className="btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0 stagger-5">
            <a
              href="https://github.com/saket11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/30 text-muted-foreground 
                       hover:text-foreground hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/saketabhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/30 text-muted-foreground 
                       hover:text-foreground hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:saketabhishek11@gmail.com"
              className="p-3 rounded-lg border border-border bg-secondary/30 text-muted-foreground 
                       hover:text-foreground hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
