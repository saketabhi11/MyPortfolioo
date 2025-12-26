import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
  {
    title: " AI Cab Price Comparison",
    problem: "Users struggle to find the best cab fares across multiple providers, often overpaying during surge pricing periods.",
    description: "Built an AI-powered application that compares cab fares across providers in real-time using dynamic pricing APIs. Implemented ML models to predict surge pricing and recommend the cheapest rides.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Machine Learning", "REST APIs"],
    features: [
      "Real-time fare comparison across multiple cab providers",
      "ML-based surge pricing prediction",
      "Intuitive dashboard for fare comparisons and savings estimates",
      "Time-optimized route recommendations",
    ],
    github: "https://github.com/saket11/ai-cab-comparison",
    live: null,
  },
  {
    title: "Gamified Employee Engagement Platform",
    problem: "Traditional workplace tools lack engagement, leading to reduced productivity and poor task completion rates.",
    description: "Designed and developed a gamified platform that transforms workplace productivity through leaderboards, performance tracking, and seamless Trello integration for task management.",
    techStack: ["React.js", "Node.js", "MongoDB", "Trello API", "WebSockets", "OAuth"],
    features: [
      "Interactive leaderboards with real-time updates",
      "Performance tracking and analytics dashboard",
      "Trello integration for seamless task management",
      "Increased employee participation by 35%",
    ],
    github: "https://github.com/saket11/employee-engagement",
    live: null,
  },
  {
    title: "Lost & Found Management System",
    problem: "Lost items in campuses and public spaces often go untracked, making recovery inefficient and time-consuming.",
    description: "Built a centralized Lost & Found platform that allows users to report, search, and claim lost items efficiently. The system improves traceability and simplifies item recovery through structured listings and verification workflows.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Post and browse lost & found item listings",
      "Category-based and keyword search for quick discovery",
      "Secure claim request and verification workflow",
      "Admin moderation for authenticity and misuse prevention",
    ],
    github: "https://github.com/saket11/lost-and-found",
    live: null,
  },

  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            04. PROJECTS
          </span>
          <h2 className="section-title mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world applications built to solve meaningful problems with modern technologies.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary/80 font-medium mb-3">
                        Problem Statement
                      </p>
                      <p className="text-muted-foreground italic mb-4">
                        "{project.problem}"
                      </p>
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border bg-secondary/30 text-muted-foreground 
                                   hover:text-foreground hover:border-primary/50 transition-all duration-300"
                          aria-label="View GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border bg-secondary/30 text-muted-foreground 
                                   hover:text-foreground hover:border-primary/50 transition-all duration-300"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Key Features:</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="lg:border-l lg:border-border lg:pl-8">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
                    <Layers size={16} className="text-primary" />
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
