const symbols = ["{}", "< />", "()", "•", "[]"];

const HeroParticles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute animate-particle text-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 12 + 10}px`,
            opacity: 0.35,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 10 + 18}s`,
          }}
        >
          {symbols[i % symbols.length]}
        </span>
      ))}
    </div>
  );
};

export default HeroParticles;
