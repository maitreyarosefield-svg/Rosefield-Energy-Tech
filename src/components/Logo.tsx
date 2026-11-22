import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const isFooter = variant === 'footer';

  // Responsive heights tailored for trimmed 913x260 logo in navbar, drawers, and footer
  const heightClasses = {
    sm: 'h-9 sm:h-10 max-w-[160px]',
    md: 'h-12 sm:h-14 max-w-[260px]',
    lg: 'h-14 sm:h-16 max-w-[300px]',
    xl: 'h-16 sm:h-20 max-w-[360px]'
  };

  const logoSrc = '/rosefield-logo.png';
  const cdnFallback = 'https://i.ibb.co/JW2bfV8q/Untitled-design-34.png';

  return (
    <div className={`inline-flex items-center select-none ${isFooter ? 'bg-white px-5 py-3 rounded-2xl shadow-xs border border-white/10' : ''} ${className}`}>
      <img
        src={logoSrc}
        onError={(e) => {
          // Fallback to CDN if relative path fails in any preview environment
          const target = e.currentTarget;
          if (target.src !== cdnFallback) {
            target.src = cdnFallback;
          }
        }}
        alt="Rosefield Energy Tech"
        referrerPolicy="no-referrer"
        className={`w-auto ${heightClasses[size]} object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
      />
    </div>
  );
};


