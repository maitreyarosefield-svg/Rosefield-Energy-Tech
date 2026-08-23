import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = true
}) => {
  const isDark = variant === 'dark';
  const isFooter = variant === 'footer';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subtextSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Emblem */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-lg bg-[#242424] border border-[#F8B848]/30 shadow-xs shrink-0 overflow-hidden`}>
        {/* Abstract geometric energy & circular flow symbol */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
          <circle cx="20" cy="20" r="16" stroke="#F8D8A0" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />
          <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20" stroke="#F88058" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20" stroke="#F8B848" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3.5" fill="#F8D8A0" />
          <path d="M20 9L21.5 12H18.5L20 9Z" fill="#F88058" />
          <path d="M20 31L18.5 28H21.5L20 31Z" fill="#F8B848" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-bold uppercase tracking-wider ${textSizes[size]} ${isFooter ? 'text-white' : isDark ? 'text-[#242424]' : 'text-white'}`}>
            ROSEFIELD
          </span>
          <span className="text-[#F88058] font-bold text-xs">◆</span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className={`font-sans font-semibold uppercase tracking-wider ${subtextSizes[size]} ${isFooter ? 'text-[#F8D8A0]' : 'text-[#8C7A6B]'}`}>
            ENERGY TECH
          </span>
        </div>
        {showTagline && size !== 'sm' && (
          <span className={`text-[8.5px] uppercase tracking-wider mt-0.5 opacity-75 font-medium ${isFooter ? 'text-[#D0C7BC]' : 'text-[#6B635B]'}`}>
            Knowledge • Strategy • Connectivity
          </span>
        )}
      </div>
    </div>
  );
};
