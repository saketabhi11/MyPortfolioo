import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;

      glowRef.current.animate(
        {
          transform: `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`,
        },
        {
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-5 h-5 rounded-full z-[9999]"
      style={{
        background: "rgba(56,189,248,0.35)", // cyan glow
        boxShadow: "0 0 25px rgba(56,189,248,0.6)",
        filter: "blur(4px)",
      }}
    />
  );
};

export default CursorGlow;
