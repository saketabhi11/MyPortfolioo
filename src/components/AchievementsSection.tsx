import { Award, Code, GraduationCap, Trophy } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "National Entrepreneurship Challenge",
      subtitle: "IIT Bombay, 2024",
      description: "Ranked AIR 27 out of 600+ teams nationwide",
    },
    {
      icon: Award,
      title: "MoE Innovation Bootcamp",
      subtitle: "NIT Surathkal, AICTE",
      description: "Selected for prestigious Ministry of Education Design and Entrepreneurship Bootcamp",
    },
    {
      icon: Trophy,
      title: "Zonal Ideathon Winner",
      subtitle: "Delhi NCR Region",
      description: "Won 2nd Place for product innovation, user research, and market-driven execution",
    },
    {
      icon: Award,
      title: "State-Level Ideation",
      subtitle: "Top 10 Finalist",
      description: "Recognized for creative problem-solving and scalable market solutions",
    },
  ];

  const dsaProfiles = [
    {
      platform: "LeetCode",
      handle: "@saket11",
      stats: "Rating: 1672 | 250+ Problems Solved",
      link: "https://leetcode.com/saket11",
    },
    {
      platform: "GeeksforGeeks",
      handle: "@saketabhishek",
      stats: "Active Problem Solver",
      link: "https://geeksforgeeks.org/user/saketabhishek",
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            05. ACHIEVEMENTS
          </span>
          <h2 className="section-title mb-4">
            Recognition & <span className="text-gradient">Accomplishments</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Highlights from competitive programming, innovation challenges, and academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="text-primary" size={24} />
              Innovation & Leadership
            </h3>
            {achievements.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl card-gradient border border-border hover:border-primary/30 
                         transition-all duration-500 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary/80">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DSA & Coding */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code className="text-primary" size={24} />
              Competitive Programming
            </h3>
            
            {dsaProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl card-gradient border border-border hover:border-primary/30 
                         transition-all duration-500 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {profile.platform}
                    </h4>
                    <p className="text-sm text-muted-foreground font-mono">{profile.handle}</p>
                    <p className="text-sm text-primary/80 mt-2">{profile.stats}</p>
                  </div>
                  <div className="p-2 rounded-lg border border-border bg-secondary/30 text-muted-foreground 
                               group-hover:text-primary group-hover:border-primary/50 transition-all">
                    <Code size={18} />
                  </div>
                </div>
              </a>
            ))}

            {/* Education */}
            <div className="p-5 rounded-xl card-gradient border border-border mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">B.Tech in Information Technology</h4>
                  <p className="text-sm text-muted-foreground">ABES Engineering College, Ghaziabad</p>
                  <p className="text-sm text-primary/80">2022 - Present | 73%</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <h4 className="font-medium text-foreground">Higher Secondary (12th)</h4>
                  <p className="text-sm text-muted-foreground">Hellens School, Sitamarhi</p>
                  <p className="text-sm text-primary/80">2020 - 2021 | 80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
