
import React from 'react';

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <header className="mb-8">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#E6EDF3] mb-3">{title}</h1>
    {subtitle && <p className="text-xl text-[#444444] dark:text-[#9CA3AF] italic font-serif">{subtitle}</p>}
    <div className="w-12 h-1 bg-[#1F4E79] dark:bg-[#4A90A4] mt-6" />
  </header>
);

export const Thumbnail: React.FC<{ src?: string; alt: string; icon?: string }> = ({ src, alt, icon }) => {
  if (icon) return (
    <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0 border border-[#E5E7EB] dark:border-[#27313A]">
      <span className="text-[10px] font-bold text-[#444444] mono">{icon}</span>
    </div>
  );
  if (!src) return (
    <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0 border border-[#E5E7EB] dark:border-[#27313A]">
      <span className="text-xs text-[#9CA3AF] mono">IMG</span>
    </div>
  );
  return (
    <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0 border border-[#E5E7EB] dark:border-[#27313A] p-2">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain transition-all" 
      />
    </div>
  );
};

export const TagPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2 py-0.5 bg-[#E5E7EB] dark:bg-[#27313A] text-[10px] font-bold uppercase tracking-widest text-[#444444] dark:text-[#9CA3AF] rounded">
    {children}
  </span>
);

export const LinkIcon: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a 
    href={href} 
    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F4E79] dark:text-[#4A90A4] hover:underline decoration-2 underline-offset-4"
  >
    {label}
  </a>
);
