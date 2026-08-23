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

  // Responsive heights tailored for navbar, drawers, and footer
  const heightClasses = {
    sm: 'h-10 max-w-[180px]',
    md: 'h-13 sm:h-16 max-w-[280px]',
    lg: 'h-16 sm:h-20 max-w-[340px]',
    xl: 'h-20 sm:h-26 max-w-[420px]'
  };

  const logoSrc = '/rosefield-logo.png';
  const cdnFallback = 'https://i.ibb.co/JW2bfV8q/Untitled-design-34.png';

  return (
    <div className={`inline-flex items-center select-none ${isFooter ? 'bg-white px-3.5 py-2 rounded-2xl shadow-xs border border-white/10' : ''} ${className}`}>
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


