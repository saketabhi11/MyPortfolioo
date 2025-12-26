import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight mb-1">
              <span className="text-gradient">Saket Abhishek</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Software Development Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/saket11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/saketabhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:saketabhishek11@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
