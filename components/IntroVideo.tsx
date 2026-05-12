import React, { useRef, useState } from 'react';
import Logo from './Logo';
import { StudentLevel } from '../types';

interface IntroVideoProps {
  onFinish: () => void;
  userName: string;
  level: StudentLevel;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onFinish, userName, level }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const videoSrc = level === StudentLevel.BEGINNER
    ? "https://cdn.shopify.com/videos/c/o/v/f2deb26cc2274371b180e59b2cb08ed1.mp4"
    : "https://cdn.shopify.com/videos/c/o/v/d3722e3ef1c3430a9ad8fbb5238c0fe2.mp4";

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f1115] flex flex-col items-center justify-center p-4 animate-in fade-in duration-700">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="space-y-2 animate-in slide-in-from-top-4 duration-1000 delay-200">
          <div className="flex justify-center mb-4">
            <Logo className="w-16 h-16" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
            PREPÁRATE, <span className="text-gold-gradient">{userName}</span>
          </h2>
          <p className="text-gray-500 font-bold text-xs md:text-sm tracking-[0.3em] uppercase">
            Tu imperio comienza con este mensaje
          </p>
        </div>

        <div className="relative group aspect-video rounded-[2rem] overflow-hidden border border-[#c5a059]/30 shadow-[0_0_50px_rgba(197,160,89,0.15)] bg-black">
          <video
            key={videoSrc}
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted={isMuted}
            onEnded={onFinish}
            src={videoSrc}
          />
          <div className="absolute bottom-6 right-6 flex gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-90"
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col items-center gap-6">
          <button
            onClick={onFinish}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#c5a059] to-[#8e6d31] hover:from-[#f3e0b5] hover:to-[#c5a059] text-black font-black rounded-2xl transition-all transform active:scale-95 shadow-[0_10px_30px_rgba(197,160,89,0.3)] uppercase tracking-[0.2em] text-sm overflow-hidden"
          >
            <span className="relative z-10">SALTAR VIDEO Y VER RUTA ➔</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em] animate-pulse">
            El video se cerrará automáticamente al finalizar
          </p>
        </div>
      </div>

      <div className="fixed -bottom-20 -left-20 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed -top-20 -right-20 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default IntroVideo;
