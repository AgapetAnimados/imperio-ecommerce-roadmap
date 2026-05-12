import React from 'react';
import { RoadmapStep } from '../types';

interface StepCardProps {
  step: RoadmapStep;
  index: number;
  isLast: boolean;
  total: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast, total }) => {
  const stepNumber = step.isHighlight ? 'FINAL' : (index + 1).toString().padStart(2, '0');
  const isUp = index % 2 === 0;

  return (
    <div
      className="flex-shrink-0 w-[420px] relative transition-all duration-500"
      style={{ marginTop: isUp ? '0px' : '320px' }}
    >
      <a
        href={step.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center text-center px-6 transition-all"
      >
        {/* Punto de conexión */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full z-30 transition-all group-hover:scale-150
          ${isUp ? 'bottom-[-165px]' : 'top-[-165px]'}
          ${step.isHighlight
            ? 'bg-gradient-to-br from-[#f3e0b5] to-[#8e6d31] shadow-[0_0_40px_rgba(197,160,89,1)] scale-125'
            : 'bg-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.5)] border-2 border-white/20'
          }
        `}></div>

        {/* Número de paso */}
        <div className={`flex flex-col items-center mb-4 ${isUp ? 'order-1' : 'order-2'}`}>
          <span className={`font-black italic transition-all duration-500
            ${step.isHighlight
              ? 'text-gold-gradient text-6xl md:text-8xl drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]'
              : 'text-8xl text-white/10 group-hover:text-[#c5a059] group-hover:opacity-100'
            }
          `}>
            {stepNumber}
          </span>
          <div className={`h-1.5 transition-all duration-500 mt-2 rounded-full
            ${step.isHighlight ? 'w-40 bg-gradient-to-r from-[#f3e0b5] to-[#8e6d31]' : 'w-16 bg-white/10 group-hover:w-32 group-hover:bg-[#c5a059]'}
          `}></div>
        </div>

        {/* Tarjeta */}
        <div className={`w-full backdrop-blur-3xl p-10 rounded-[3rem] border shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all transform group-hover:-translate-y-4
          ${isUp ? 'order-2' : 'order-1'}
          ${step.isHighlight
            ? 'bg-gradient-to-b from-[#c5a059]/20 to-black/80 border-[#c5a059]/40 shadow-[#c5a059]/10'
            : 'bg-[#1a1c22]/80 border-white/5 group-hover:border-[#c5a059]/40'
          }
        `}>
          {step.isHighlight && (
            <div className="mb-6 bg-gradient-to-r from-[#f3e0b5] to-[#c5a059] text-black text-[10px] font-black px-4 py-1.5 rounded-full inline-block tracking-[0.3em] animate-pulse">
              MISIÓN CRÍTICA
            </div>
          )}

          <div className="flex flex-col items-center gap-6 mb-6">
            <span className={`text-6xl filter transition-transform duration-500
              ${step.isHighlight ? 'scale-125 drop-shadow-[0_0_25px_rgba(197,160,89,0.6)] animate-bounce' : 'group-hover:scale-125 opacity-80 group-hover:opacity-100'}
            `}>
              {step.icon}
            </span>
            <h4 className={`text-2xl font-black leading-tight uppercase tracking-tighter transition-colors
              ${step.isHighlight ? 'text-gold-gradient' : 'text-white group-hover:text-[#c5a059]'}
            `}>
              {step.title}
            </h4>
          </div>

          <p className={`text-sm leading-relaxed font-medium px-4
            ${step.isHighlight ? 'text-white/90' : 'text-gray-500 group-hover:text-gray-300'}
          `}>
            {step.description}
          </p>

          <div className="mt-10">
            <div className={`inline-flex items-center gap-3 text-[11px] font-black tracking-[0.4em] uppercase transition-all py-3 px-6 rounded-full border
              ${step.isHighlight
                ? 'bg-[#c5a059] text-black border-[#c5a059]'
                : 'opacity-0 group-hover:opacity-100 text-[#c5a059] border-[#c5a059]/30 hover:bg-[#c5a059] hover:text-black'
              }
            `}>
              {step.isHighlight ? 'AGENDAR AHORA ➔' : 'INICIAR CLASE ➔'}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default StepCard;
