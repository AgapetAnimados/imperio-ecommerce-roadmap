import React, { useRef } from 'react';
import { UserProfile, StudentLevel } from '../types';
import { BEGINNER_STEPS, ADVANCED_STEPS } from '../constants';
import StepCard from './StepCard';
import Logo from './Logo';

interface VisualRoadmapProps {
  profile: UserProfile;
}

const VisualRoadmap: React.FC<VisualRoadmapProps> = ({ profile }) => {
  const steps = profile.level === StudentLevel.BEGINNER ? BEGINNER_STEPS : ADVANCED_STEPS;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stepWidth = 420;
  const roadWidth = steps.length * stepWidth;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -stepWidth : stepWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[80vh] py-10 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="relative z-30 text-center space-y-4 max-w-4xl mx-auto mb-12 px-4">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[10px] font-black tracking-[0.4em] text-[#c5a059] uppercase mb-6 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
          <Logo className="w-4 h-4" />
          Plan Maestro de {profile.name}
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
          TU RUTA AL <br /><span className="text-gold-gradient">IMPERIO</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-bold max-w-2xl mx-auto uppercase tracking-widest opacity-80 mt-6">
          Navega lateralmente para descubrir tu camino hacia la libertad financiera.
        </p>

        <div className="flex items-center justify-center gap-10 mt-12">
          <button
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c5a059] hover:text-black transition-all shadow-xl"
          >
            <span className="text-2xl">←</span>
          </button>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#c5a059] font-black text-[9px] tracking-[0.5em] uppercase opacity-70">Desliza para avanzar</span>
            <div className="w-32 h-0.5 bg-white/5 relative overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-[#c5a059] scroll-hint-arrow"></div>
            </div>
          </div>
          <button
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c5a059] hover:text-black transition-all shadow-xl"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-32 pt-12 no-scrollbar horizontal-scroll-mask cursor-grab active:cursor-grabbing"
      >
        <div
          className="relative px-[10vw]"
          style={{ width: `${roadWidth + 600}px`, minWidth: '100vw' }}
        >
          {/* Decorative landmarks */}
          <div className="absolute top-0 left-[500px] opacity-10 pointer-events-none scale-150 grayscale">🏛️</div>
          <div className="absolute top-[350px] left-[1200px] opacity-10 pointer-events-none scale-150">💰</div>
          <div className="absolute top-[20px] left-[2200px] opacity-10 pointer-events-none scale-150">🏰</div>
          <div className="absolute top-[400px] left-[3000px] opacity-10 pointer-events-none scale-150">🦁</div>

          <div className="absolute top-[80px] right-[450px] pointer-events-none animate-pulse">
            <Logo className="w-40 h-40 opacity-30" />
          </div>

          {/* SVG Road */}
          <div className="absolute top-[250px] left-0 w-full h-[200px] pointer-events-none">
            <svg width="100%" height="100%" viewBox={`0 0 ${roadWidth} 200`} preserveAspectRatio="none" className="opacity-40">
              <path
                d={`M 0 100 ${steps.map((_, i) => `C ${i * stepWidth + 200} ${i % 2 === 0 ? 0 : 200}, ${i * stepWidth + 200} ${i % 2 === 0 ? 0 : 200}, ${(i + 1) * stepWidth} 100`).join(' ')}`}
                stroke="#1a1c22"
                strokeWidth="80"
                strokeLinecap="round"
                fill="none"
              />
              <path
                className="road-line"
                d={`M 0 100 ${steps.map((_, i) => `C ${i * stepWidth + 200} ${i % 2 === 0 ? 0 : 200}, ${i * stepWidth + 200} ${i % 2 === 0 ? 0 : 200}, ${(i + 1) * stepWidth} 100`).join(' ')}`}
                stroke="url(#goldGradientRoad)"
                strokeWidth="3"
                strokeDasharray="20 20"
                fill="none"
              />
              <defs>
                <linearGradient id="goldGradientRoad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8e6d31" />
                  <stop offset="50%" stopColor="#f3e0b5" />
                  <stop offset="100%" stopColor="#c5a059" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps */}
          <div className="relative flex items-start">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
                total={steps.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Referido Banner */}
      <div className="max-w-4xl mx-auto px-6 mt-16 mb-20 relative z-30">
        <div className="relative group overflow-hidden bg-black/80 border border-[#c5a059]/20 rounded-[3rem] p-10 md:p-14 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-[80px]"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-[#f3e0b5] to-[#8e6d31] rounded-3xl flex items-center justify-center text-5xl shadow-[0_15px_40px_rgba(197,160,89,0.3)] animate-pulse border-4 border-black">
              👑
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-[#c5a059] font-black tracking-[0.4em] text-[10px] uppercase italic">Beneficio Exclusivo del Imperio</h3>
              <p className="text-white text-2xl md:text-3xl font-black leading-[1.1] tracking-tight uppercase">
                RECUERDA QUE CON NUESTRO <span className="text-gold-gradient underline decoration-[#c5a059]/20">CÓDIGO DE REFERIDO</span> DE <span className="text-[#c5a059]">DROPI O EFFI</span> PUEDES TENER TODA NUESTRA PLATAFORMA Y COMUNIDAD <span className="bg-[#c5a059] text-black px-3 py-1 rounded-lg">GRATIS</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background name watermark */}
      <div className="fixed bottom-0 left-0 w-full overflow-hidden pointer-events-none -z-10 opacity-[0.03]">
        <h3 className="text-[25vw] font-black text-white whitespace-nowrap leading-none tracking-tighter uppercase select-none">
          {profile.name} {profile.name}
        </h3>
      </div>
    </div>
  );
};

export default VisualRoadmap;
