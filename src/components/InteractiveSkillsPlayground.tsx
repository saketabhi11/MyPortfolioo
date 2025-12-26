import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Sparkles, RotateCcw } from 'lucide-react';

type SkillCategory = 'programming' | 'frontend' | 'backend';

interface Skill {
  name: string;
  category: SkillCategory;
  x: number;
  y: number;
}

const categoryColors: Record<SkillCategory, string> = {
  programming: 'bg-amber-500',
  frontend: 'bg-cyan-500',
  backend: 'bg-emerald-500',
};

const initialSkills: Skill[] = [
  { name: 'JavaScript', category: 'programming', x: 80, y: 60 },
  { name: 'TypeScript', category: 'programming', x: 320, y: 40 },
  { name: 'C++', category: 'programming', x: 520, y: 30 },
  { name: 'Python', category: 'programming', x: 180, y: 180 },
  { name: 'C', category: 'programming', x: 420, y: 200 },
  { name: 'React.js', category: 'frontend', x: 60, y: 120 },
  { name: 'Node.js', category: 'backend', x: 380, y: 130 },
  { name: 'Express.js', category: 'backend', x: 580, y: 140 },
  { name: 'Tailwind', category: 'frontend', x: 680, y: 100 },
  { name: 'MongoDB', category: 'backend', x: 620, y: 180 },
  { name: 'MySQL', category: 'backend', x: 80, y: 230 },
  { name: 'PostgreSQL', category: 'backend', x: 280, y: 250 },
  { name: 'Git', category: 'programming', x: 200, y: 280 },
  { name: 'Docker', category: 'backend', x: 350, y: 240 },
  { name: 'REST APIs', category: 'backend', x: 500, y: 260 },
  { name: 'Linux', category: 'programming', x: 680, y: 220 },
];

const InteractiveSkillsPlayground = () => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [isShaking, setIsShaking] = useState(false);
  const constraintsRef = useRef(null);

  const shuffleSkills = () => {
    setSkills(skills.map(skill => ({
      ...skill,
      x: Math.random() * 600 + 40,
      y: Math.random() * 250 + 30,
    })));
  };

  const shakeAll = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const resetSkills = () => {
    setSkills(initialSkills);
  };

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Interactive Skills Playground
          </h2>
          <p className="text-lg text-muted-foreground">
            Drag the skills around and watch them return home!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={shuffleSkills}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:brightness-110"
          >
            <Shuffle size={18} />
            Shuffle
          </button>
          <button
            onClick={shakeAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border text-foreground font-medium transition-all hover:bg-secondary/80"
          >
            <Sparkles size={18} />
            Shake All
          </button>
          <button
            onClick={resetSkills}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border text-foreground font-medium transition-all hover:bg-secondary/80"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>

        {/* Skills Sandbox */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-xl card-gradient border border-border">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <span className="text-2xl">🎨</span>
              <h3 className="text-xl font-semibold">Skills Sandbox - Enhanced Dragging!</h3>
            </div>

            <motion.div
              ref={constraintsRef}
              className="relative h-[350px] rounded-lg border-2 border-dashed border-destructive/30 bg-background/50 overflow-hidden"
            >
              {/* Hint */}
              <div className="absolute top-4 left-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles size={14} />
                Drag skills around!
              </div>

              {/* Status */}
              <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span>🏠</span>
                Ready
              </div>

              {/* Skill Bubbles */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  whileHover={{ scale: 1.05 }}
                  animate={isShaking ? {
                    x: [skill.x, skill.x - 5, skill.x + 5, skill.x - 5, skill.x + 5, skill.x],
                    y: skill.y,
                    transition: { duration: 0.5 }
                  } : { x: skill.x, y: skill.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`absolute px-4 py-2 rounded-full cursor-grab active:cursor-grabbing font-medium text-sm text-white shadow-lg ${categoryColors[skill.category]}`}
                  style={{ left: 0, top: 0 }}
                >
                  {skill.name}
                </motion.div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-muted-foreground">Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-500" />
                  <span className="text-muted-foreground">Frontend</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-muted-foreground">Backend</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillsPlayground;
