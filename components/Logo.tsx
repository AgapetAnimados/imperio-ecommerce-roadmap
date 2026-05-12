import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        <path d="M10 70 L20 30 L40 50 L50 20 L60 50 L80 30 L90 70 Z" fill="#000000" />
        <path
          d="M15 65 L35 45 L50 55 L75 15"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M70 15 L78 12 L80 22" fill="url(#goldGradient)" />
        <rect x="22" y="55" width="4" height="10" fill="url(#goldGradient)" />
        <rect x="32" y="50" width="4" height="15" fill="url(#goldGradient)" />
        <rect x="42" y="52" width="4" height="13" fill="url(#goldGradient)" />
        <rect x="52" y="58" width="4" height="7" fill="url(#goldGradient)" />
        <rect x="62" y="48" width="4" height="17" fill="url(#goldGradient)" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e0b5" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#8e6d31" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
