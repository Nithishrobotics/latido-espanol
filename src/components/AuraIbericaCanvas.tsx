import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Compass, Eye, Waves, Play, Pause } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface AuraIbericaCanvasProps {
  className?: string;
  showEmblem?: boolean;
  interactiveGlow?: boolean;
}

export const AuraIbericaCanvas: React.FC<AuraIbericaCanvasProps> = ({
  className = '',
  showEmblem = true,
  interactiveGlow = true
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [glowIntensity, setGlowIntensity] = useState<'vivid' | 'soft'>('vivid');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveGlow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden select-none ${className}`}
      aria-label="Aura Ibérica: Composición gráfica dinámica inspirada en los colores y el sol de España"
    >
      {/* 1. DYNAMIC FLUID MESH GRADIENT (SPANISH AURORA) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Spanish Red Aura Orb */}
        <div
          className={`absolute rounded-full blur-3xl transition-opacity duration-700 ${
            glowIntensity === 'vivid' ? 'opacity-40' : 'opacity-20'
          } ${isAnimating ? 'animate-aurora-flow' : ''}`}
          style={{
            width: '65vw',
            height: '65vw',
            maxWidth: '600px',
            maxHeight: '600px',
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(circle, #A51E2D 0%, rgba(165, 42, 42, 0) 70%)',
            transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`
          }}
        />

        {/* Sunflower Ochre Solar Orb */}
        <div
          className={`absolute rounded-full blur-3xl transition-opacity duration-700 ${
            glowIntensity === 'vivid' ? 'opacity-45' : 'opacity-25'
          } ${isAnimating ? 'animate-aurora-flow' : ''}`}
          style={{
            width: '55vw',
            height: '55vw',
            maxWidth: '520px',
            maxHeight: '520px',
            top: '5%',
            right: '-12%',
            animationDelay: '-6s',
            background: 'radial-gradient(circle, #E2B342 0%, rgba(231, 184, 75, 0) 72%)',
            transform: `translate(${-mousePos.x * 0.05}px, ${-mousePos.y * 0.05}px)`
          }}
        />

        {/* Mediterranean Azure Blue Tide Orb */}
        <div
          className={`absolute rounded-full blur-3xl transition-opacity duration-700 ${
            glowIntensity === 'vivid' ? 'opacity-30' : 'opacity-15'
          } ${isAnimating ? 'animate-aurora-flow' : ''}`}
          style={{
            width: '45vw',
            height: '45vw',
            maxWidth: '420px',
            maxHeight: '420px',
            bottom: '-15%',
            left: '20%',
            animationDelay: '-12s',
            background: 'radial-gradient(circle, #0284C7 0%, rgba(2, 132, 199, 0) 68%)',
            transform: `translate(${mousePos.y * 0.04}px, ${mousePos.x * 0.04}px)`
          }}
        />

        {/* Terracotta Andalusian Warm Hearth */}
        <div
          className={`absolute rounded-full blur-2xl transition-opacity duration-700 ${
            glowIntensity === 'vivid' ? 'opacity-35' : 'opacity-20'
          }`}
          style={{
            width: '40vw',
            height: '40vw',
            maxWidth: '380px',
            maxHeight: '380px',
            top: '30%',
            left: '35%',
            background: 'radial-gradient(circle, #BA6649 0%, rgba(200, 117, 86, 0) 70%)'
          }}
        />

        {/* Interactive Mouse Spotlight Flare */}
        <div
          className="absolute rounded-full pointer-events-none blur-2xl transition-transform duration-300 ease-out"
          style={{
            width: '300px',
            height: '300px',
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(231, 184, 75, 0.25) 0%, rgba(165, 42, 42, 0.1) 45%, transparent 70%)'
          }}
        />

        {/* Archival Paper Pattern Overlay to integrate with the editorial aesthetic */}
        <div className="absolute inset-0 bg-paper-pattern opacity-30 mix-blend-multiply" />
      </div>

      {/* 2. ANDALUSIAN SOLAR COMPASS GRAPHICAL EMBLEM */}
      {showEmblem && (
        <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] mx-auto aspect-square p-2">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full select-none"
            aria-label="Sol Ibérico y Rosa de los Vientos Renacentista"
          >
            <defs>
              {/* Radial gradient for central sun */}
              <radialGradient id="solarGlowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
                <stop offset="35%" stopColor="#E2B342" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#BA6649" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#A51E2D" stopOpacity="0.6" />
              </radialGradient>

              {/* Shimmer gradient for rays */}
              <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2B342" />
                <stop offset="50%" stopColor="#A51E2D" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>

              {/* Subtle ceramic drop shadow */}
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#222522" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* A. Outer Celestial Ring (Slow Clockwise Rotation) */}
            <g className={isAnimating ? 'animate-spin-slow' : ''} style={{ transformOrigin: '150px 150px' }}>
              {/* Outer border circle */}
              <circle
                cx="150"
                cy="150"
                r="135"
                fill="none"
                stroke="#A51E2D"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                opacity="0.5"
              />

              {/* Degrees tick marks */}
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = (i * 10 * Math.PI) / 180;
                const r1 = i % 9 === 0 ? 128 : 132;
                const r2 = 135;
                const x1 = 150 + r1 * Math.cos(angle);
                const y1 = 150 + r1 * Math.sin(angle);
                const x2 = 150 + r2 * Math.cos(angle);
                const y2 = 150 + r2 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 9 === 0 ? '#A51E2D' : '#E2B342'}
                    strokeWidth={i % 9 === 0 ? '2' : '0.8'}
                    opacity={i % 9 === 0 ? '0.8' : '0.4'}
                  />
                );
              })}

              {/* Cardinal Navigation Points (Norte, Sur, Este, Oeste) */}
              <text x="150" y="24" textAnchor="middle" fill="#A51E2D" fontSize="9" fontFamily="monospace" fontWeight="bold">N · ESP</text>
              <text x="278" y="153" textAnchor="middle" fill="#0284C7" fontSize="9" fontFamily="monospace" fontWeight="bold">E · MED</text>
              <text x="150" y="286" textAnchor="middle" fill="#BA6649" fontSize="9" fontFamily="monospace" fontWeight="bold">S · AND</text>
              <text x="22" y="153" textAnchor="middle" fill="#52634D" fontSize="9" fontFamily="monospace" fontWeight="bold">O · ATL</text>
            </g>

            {/* B. Middle Geometric Filigree Star (Counter-Clockwise Rotation) */}
            <g className={isAnimating ? 'animate-spin-slow-reverse' : ''} style={{ transformOrigin: '150px 150px' }}>
              {/* Concentric Moorish Arch pattern */}
              <circle
                cx="150"
                cy="150"
                r="108"
                fill="none"
                stroke="#E2B342"
                strokeWidth="1.5"
                opacity="0.65"
              />
              <circle
                cx="150"
                cy="150"
                r="95"
                fill="none"
                stroke="#BA6649"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                opacity="0.5"
              />

              {/* 16-point geometric compass triangles */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const nextAngle = ((i * 45 + 22.5) * Math.PI) / 180;
                const tipR = 120;
                const baseR = 75;
                const xTip = 150 + tipR * Math.cos(angle);
                const yTip = 150 + tipR * Math.sin(angle);
                const xBase = 150 + baseR * Math.cos(nextAngle);
                const yBase = 150 + baseR * Math.sin(nextAngle);
                return (
                  <path
                    key={i}
                    d={`M 150 150 L ${xTip} ${yTip} L ${xBase} ${yBase} Z`}
                    fill={i % 2 === 0 ? '#E2B342' : '#A51E2D'}
                    opacity={i % 2 === 0 ? '0.35' : '0.2'}
                  />
                );
              })}
            </g>

            {/* C. Radiant Solar Core (Breathing Pulse) */}
            <g className={isAnimating ? 'animate-solar-pulse' : ''} style={{ transformOrigin: '150px 150px' }} filter="url(#softShadow)">
              {/* Outer corona aura */}
              <circle
                cx="150"
                cy="150"
                r="64"
                fill="url(#solarGlowGrad)"
                opacity="0.9"
              />

              {/* 24 Wavy and Straight Solar Rays */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const isEven = i % 2 === 0;
                const rStart = 64;
                const rEnd = isEven ? 88 : 78;
                const x1 = 150 + rStart * Math.cos(angle);
                const y1 = 150 + rStart * Math.sin(angle);
                const x2 = 150 + rEnd * Math.cos(angle);
                const y2 = 150 + rEnd * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isEven ? '#E2B342' : '#A51E2D'}
                    strokeWidth={isEven ? '2.5' : '1.5'}
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                );
              })}

              {/* Inner Ceramic Sun Disc */}
              <circle
                cx="150"
                cy="150"
                r="50"
                fill="#FBF8F1"
                stroke="#A51E2D"
                strokeWidth="2.5"
              />

              {/* Concentric Golden Ring */}
              <circle
                cx="150"
                cy="150"
                r="42"
                fill="#F7F1E7"
                stroke="#E2B342"
                strokeWidth="1.8"
              />

              {/* Classical Stylized Sun Face (Eyes & Serene Smile) */}
              {/* Eyes */}
              <path
                d="M 132 142 Q 138 136 144 142"
                fill="none"
                stroke="#A51E2D"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 156 142 Q 162 136 168 142"
                fill="none"
                stroke="#A51E2D"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="138" cy="142" r="2" fill="#A51E2D" />
              <circle cx="162" cy="142" r="2" fill="#A51E2D" />

              {/* Nose */}
              <path
                d="M 150 144 L 147 154 L 153 154"
                fill="none"
                stroke="#BA6649"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Serene Smile */}
              <path
                d="M 138 163 Q 150 171 162 163"
                fill="none"
                stroke="#A51E2D"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Rosy Andalusian Cheeks */}
              <circle cx="131" cy="153" r="5" fill="#E2B342" opacity="0.45" />
              <circle cx="169" cy="153" r="5" fill="#E2B342" opacity="0.45" />

              {/* Spanish Wordmark Arc */}
              <text
                x="150"
                y="182"
                textAnchor="middle"
                fill="#52634D"
                fontSize="7.5"
                fontFamily="serif"
                fontWeight="bold"
                letterSpacing="1.5"
              >
                LATIDO ESPAÑOL
              </text>
            </g>
          </svg>
        </div>
      )}

      {/* 3. FLOATING AMBER & GOLD SPARKLES (MEDITERRANEAN EMBERS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: '15%', bottom: '25%', delay: '0s', size: 'w-2 h-2', bg: 'bg-[#E2B342]' },
          { left: '82%', bottom: '30%', delay: '1.2s', size: 'w-2.5 h-2.5', bg: 'bg-[#A51E2D]' },
          { left: '28%', bottom: '15%', delay: '2.5s', size: 'w-1.5 h-1.5', bg: 'bg-[#0284C7]' },
          { left: '74%', bottom: '45%', delay: '0.8s', size: 'w-2 h-2', bg: 'bg-[#E2B342]' },
          { left: '48%', bottom: '20%', delay: '1.8s', size: 'w-1.5 h-1.5', bg: 'bg-[#BA6649]' },
          { left: '60%', bottom: '10%', delay: '3.1s', size: 'w-2 h-2', bg: 'bg-[#E2B342]' }
        ].map((particle, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-[0.5px] ${particle.size} ${particle.bg} ${
              isAnimating ? 'animate-float-particle' : 'opacity-40'
            }`}
            style={{
              left: particle.left,
              bottom: particle.bottom,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>

      {/* 4. DISCREET GRAPHICAL CONTROLS (Top Right of Canvas) */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-[#FBF8F1]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#222522]/15 shadow-xs text-xs text-[#222522]/80">
        <Tooltip
          spanishPrompt={isAnimating ? '«Pausar animación ⏸️»' : '«Activar animación ▶️»'}
          content={isAnimating ? 'Pause ambient rotation' : 'Resume ambient rotation'}
        >
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="p-1 hover:text-[#A51E2D] transition-colors flex items-center gap-1 font-mono font-medium"
            aria-label={isAnimating ? 'Pausar aura gráfica' : 'Activar aura gráfica'}
          >
            {isAnimating ? <Pause className="w-3 h-3 text-[#A51E2D]" /> : <Play className="w-3 h-3 text-[#52634D]" />}
            <span className="hidden sm:inline">{isAnimating ? 'Animación activa' : 'Pausada'}</span>
          </button>
        </Tooltip>

        <span className="text-[#222522]/20">·</span>

        <Tooltip
          spanishPrompt="«Intensidad de color 🎨»"
          content="Toggle between vivid and soft atmospheric glow"
        >
          <button
            onClick={() => setGlowIntensity(glowIntensity === 'vivid' ? 'soft' : 'vivid')}
            className="p-1 hover:text-[#A51E2D] transition-colors flex items-center gap-1 font-mono font-medium"
            aria-label="Cambiar intensidad del aura"
          >
            <Sparkles className="w-3 h-3 text-[#E2B342]" />
            <span className="hidden sm:inline capitalize">{glowIntensity === 'vivid' ? 'Vívido' : 'Suave'}</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
