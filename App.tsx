import React, { useState } from 'react';
import AssessmentForm from './components/AssessmentForm';
import VisualRoadmap from './components/VisualRoadmap';
import IntroVideo from './components/IntroVideo';
import Logo from './components/Logo';
import { UserProfile, StudentLevel } from './types';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleAssessmentComplete = (name: string, level: StudentLevel) => {
    setProfile({ name, level });
    setShowVideo(true);
  };

  const handleVideoFinish = () => {
    setShowVideo(false);
  };

  const handleReset = () => {
    setProfile(null);
    setShowVideo(false);
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white selection:bg-[#c5a059] selection:text-black flex flex-col">
      {showVideo && profile && (
        <IntroVideo onFinish={handleVideoFinish} userName={profile.name} level={profile.level} />
      )}

      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none">IMPERIO</span>
              <span className="text-[#c5a059] font-bold text-xs tracking-[0.4em] uppercase">ECOMMERCE</span>
            </div>
          </div>
          {profile && !showVideo && (
            <button
              onClick={handleReset}
              className="text-xs font-black bg-white/5 hover:bg-[#c5a059]/10 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#c5a059]/30 transition-all uppercase tracking-widest"
            >
              Reiniciar Ruta
            </button>
          )}
        </div>
      </nav>

      <main className="flex-grow max-w-[1400px] mx-auto w-full px-6 pt-8 pb-32 overflow-visible">
        {!profile ? (
          <div className="max-w-xl mx-auto py-12 md:py-20">
            <div className="text-center mb-12 space-y-6">
              <div className="flex justify-center mb-8">
                <Logo className="w-32 h-32 md:w-48 md:h-48" />
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-4 leading-[0.9] tracking-tighter uppercase">
                TU MAPA <br /> AL <span className="text-gold-gradient">ÉXITO</span>
              </h1>
              <p className="text-gray-400 text-lg font-medium tracking-wide uppercase">
                Domina el mercado y construye tu imperio
              </p>
            </div>
            <AssessmentForm onComplete={handleAssessmentComplete} />
          </div>
        ) : (
          !showVideo && <VisualRoadmap profile={profile} />
        )}
      </main>
    </div>
  );
};

export default App;
