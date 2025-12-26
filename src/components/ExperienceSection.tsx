import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Operations & Strategy Intern",
      company: "Hirers.co.in",
      type: "HR Tech Startup",
      period: "Feb 2025 – May 2025",
      location: "Hybrid",
      highlights: [
        "Collaborated with founding team on strategy, planning, and execution across business functions",
        "Streamlined daily operations across product, marketing, and HR teams",
        "Conducted market research and competitor analysis to guide growth initiatives",
        "Assisted in digital marketing campaigns and partnership outreach to boost user acquisition",
      ],
    },
    {
      title: "Founder's Office Intern",
      company: "Know Your Colleges",
      type: "EdTech Startup",
      period: "Jul 2024 – Jan 2025",
      location: "Hybrid",
      highlights: [
        "Drove outreach impacting 20K+ website visitors, 50+ colleges, and 50K+ social engagements",
        "Led strategic initiatives supporting fundraising efforts and financial planning",
        "Spearheaded B2B collaborations with government schools including Kendriya Vidyalaya and Navodaya Vidyalaya",
        "Delivered AI-driven personalized career guidance impacting 1,500+ students",
        "Mentored students and conducted career bootcamps aligned with NEP 2020 initiatives",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            03. EXPERIENCE
          </span>
          <h2 className="section-title mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building real-world impact through startup experience and strategic execution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 border-l-2 border-border hover:border-primary/50 
                       transition-colors duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow-effect" />
              
              <div className="p-6 md:p-8 rounded-xl card-gradient border border-border 
                            hover:border-primary/30 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.type}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
