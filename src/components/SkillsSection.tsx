const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'MongoDB Atlas'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Linux', 'Postman', 'Docker', 'VS Code'],
    },
    {
      title: 'Core CS Concepts',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks'],
    },
    {
      title: 'Software Engineering',
      skills: ['REST APIs', 'API Integration', 'Unit Testing', 'Agile Methodology', 'SDLC'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            02. SKILLS
          </span>
          <h2 className="section-title mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit built through hands-on experience, 
            continuous learning, and real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 
                       transition-all duration-500"
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
