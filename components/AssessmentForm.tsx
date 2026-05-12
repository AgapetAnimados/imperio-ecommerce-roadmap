import React, { useState } from 'react';
import { StudentLevel } from '../types';

interface AssessmentFormProps {
  onComplete: (name: string, level: StudentLevel) => void;
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length > 1) {
      setStep(2);
    }
  };

  return (
    <div className="bg-[#111] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500">
      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">¡Bienvenido Guerrero!</h2>
            <p className="text-gray-500 text-sm mt-3 font-bold uppercase tracking-widest opacity-60">Iniciemos tu camino al imperio</p>
          </div>
          <div className="space-y-6">
            <div className="relative group">
              <input
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="¿Cuál es tu nombre?"
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059]/50 transition-all text-xl font-bold placeholder:text-gray-700"
              />
            </div>
            <button
              type="submit"
              disabled={name.trim().length < 2}
              className="w-full bg-gradient-to-r from-[#c5a059] to-[#8e6d31] hover:from-[#f3e0b5] hover:to-[#c5a059] disabled:opacity-20 disabled:cursor-not-allowed text-black font-black py-5 rounded-2xl transition-all transform active:scale-[0.98] shadow-xl shadow-[#c5a059]/10 uppercase tracking-[0.2em] text-sm"
            >
              Comenzar Diagnóstico ➔
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Un gusto, {name}</h2>
            <h3 className="text-sm font-bold text-[#c5a059] mt-3 uppercase tracking-[0.3em]">Define tu nivel actual</h3>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <button
              type="button"
              onClick={() => onComplete(name, StudentLevel.ADVANCED)}
              className="group p-8 text-left rounded-[2rem] border border-white/10 bg-black/40 hover:border-[#c5a059] transition-all hover:bg-[#c5a059]/5 flex items-center justify-between relative overflow-hidden"
            >
              <div className="relative z-10 pr-4">
                <span className="block text-xl font-black text-white group-hover:text-[#c5a059] transition-colors uppercase italic">YA TENGO VENTAS</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1 block">Tengo conocimientos operativos</span>
              </div>
              <span className="text-4xl group-hover:scale-125 transition-transform group-hover:rotate-12">🚀</span>
            </button>
            <button
              type="button"
              onClick={() => onComplete(name, StudentLevel.BEGINNER)}
              className="group p-8 text-left rounded-[2rem] border border-white/10 bg-black/40 hover:border-[#c5a059] transition-all hover:bg-[#c5a059]/5 flex items-center justify-between relative overflow-hidden"
            >
              <div className="relative z-10 pr-4">
                <span className="block text-xl font-black text-white group-hover:text-[#c5a059] transition-colors uppercase italic">INICIO DESDE 0</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1 block">Quiero aprender las bases</span>
              </div>
              <span className="text-4xl group-hover:scale-125 transition-transform">🌱</span>
            </button>
          </div>
          <button
            onClick={() => setStep(1)}
            className="text-gray-600 hover:text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em] w-full text-center transition-colors"
          >
            ← Volver atrás
          </button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;
