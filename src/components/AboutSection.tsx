import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end applications with React, Node.js, and modern databases.',
    },
    {
      icon: Rocket,
      title: 'Startup Experience',
      description: 'Contributed to 0-to-1 growth at startups, understanding both technical and business aspects.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: '250+ DSA problems solved on LeetCode with a contest rating of 1672.',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Led strategic initiatives impacting thousands of students and multiple organizations.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              01. ABOUT ME
            </span>
            <h2 className="section-title mb-6">
              Engineering Student with a
              <span className="text-gradient"> Startup Mindset</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
               Code is my toolkit, creativity my fuel, and ambition my compass.
               </p>
<p>
I build products at the intersection of logic, performance, and impact—powered by the MERN stack, sharpened through C++ problem-solving (250+ challenges solved), and driven by a deep curiosity to turn ideas into scalable solutions. From validating concepts to shipping MVPs, I thrive in fast-paced environments where learning and execution move together.
</p>
<p>
An athlete’s discipline shapes how I work—consistent, focused, and resilient under pressure. A good mug of cold coffee fuels long debugging sessions, late-night builds, and the obsession to get things just right. I enjoy breaking down complex problems, designing clean systems, and building from zero to one, always keeping the user and the bigger picture in focus.

Always learning. Always building.
              </p>
              <p>
Fueled by cold coffee, guided by discipline, and driven to create solutions that don’t just work—but matter.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 
                         transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                              mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
