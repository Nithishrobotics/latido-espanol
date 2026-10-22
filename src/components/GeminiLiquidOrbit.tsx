import React, { useEffect, useRef } from 'react';

export const GeminiLiquidOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryOrbRef = useRef<HTMLDivElement>(null);
  const secondaryOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Current smoothed position (for spring-like lerp)
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 3;

    // Target position (tracks mouse or drifts)
    let targetX = currentX;
    let targetY = currentY;

    let time = 0;
    let isMouseMoving = false;
    let mouseTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMouseMoving = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 2500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      time += 0.015;

      // When idle, add gentle ambient trigonometric drift
      if (!isMouseMoving) {
        const driftX = Math.sin(time * 0.7) * 160 + Math.cos(time * 0.3) * 60;
        const driftY = Math.cos(time * 0.5) * 120 + Math.sin(time * 0.2) * 40;
        targetX = window.innerWidth / 2 + driftX;
        targetY = window.innerHeight / 3 + driftY;
      }

      // Smooth spring lerping (0.05 speed for liquid viscosity)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (primaryOrbRef.current) {
        primaryOrbRef.current.style.transform = `translate3d(${currentX - 280}px, ${currentY - 280}px, 0)`;
      }

      if (secondaryOrbRef.current) {
        // Offset secondary orb for a multi-layered Gemini-style liquid interaction
        const secX = currentX + Math.sin(time) * 120;
        const secY = currentY + Math.cos(time) * 120;
        secondaryOrbRef.current.style.transform = `translate3d(${secX - 220}px, ${secY - 220}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Primary Terracotta into Albero Gold Liquid Gradient Orb */}
      <div
        ref={primaryOrbRef}
        className="absolute top-0 left-0 w-[560px] h-[560px] rounded-full blur-[110px] opacity-25 will-change-transform"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #C85A32 0%, #E2B342 55%, transparent 75%)',
          transition: 'opacity 0.8s ease'
        }}
      />

      {/* Secondary Complementary Mediterranean Ambient Node */}
      <div
        ref={secondaryOrbRef}
        className="absolute top-0 left-0 w-[440px] h-[440px] rounded-full blur-[130px] opacity-15 will-change-transform"
        style={{
          background: 'radial-gradient(circle at 60% 60%, #E2B342 0%, #C85A32 60%, transparent 80%)',
          transition: 'opacity 0.8s ease'
        }}
      />

      {/* Static Subdued Ambient Base in Charcoal Center */}
      <div
        className="absolute -top-[20%] left-[10%] w-[800px] h-[600px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C85A32 0%, rgba(255, 200, 55, 0.4) 40%, transparent 70%)'
        }}
      />
    </div>
  );
};
