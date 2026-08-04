
import React from 'react';

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <header className="mb-7">
    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color-text)] mb-3">{title}</h1>
    {subtitle && <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed">{subtitle}</p>}
  </header>
);

export const Thumbnail: React.FC<{ src?: string; alt: string; icon?: string }> = ({ src, alt, icon }) => {
  if (icon) return (
    <div className="w-16 h-16 bg-[var(--color-surface)] rounded flex items-center justify-center shrink-0 border border-[var(--color-border)]">
      <span className="text-[10px] font-semibold text-[var(--color-muted)]">{icon}</span>
    </div>
  );
  if (!src) return (
    <div className="w-16 h-16 bg-[var(--color-surface)] rounded flex items-center justify-center shrink-0 border border-[var(--color-border)]">
      <span className="text-xs text-[var(--color-soft)]">Image</span>
    </div>
  );
  return (
    <div className="w-16 h-16 bg-[var(--color-surface)] rounded flex items-center justify-center shrink-0 border border-[var(--color-border)] p-2">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain transition-all" 
      />
    </div>
  );
};

export const TagPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-xs text-[var(--color-muted)] whitespace-nowrap">
    {children}
  </span>
);

export const LinkIcon: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a 
    href={href} 
    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)] hover:underline underline-offset-4"
  >
    {label}
  </a>
);
