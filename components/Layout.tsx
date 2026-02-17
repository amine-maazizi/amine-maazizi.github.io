
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Locale, I18nStrings } from '../types';
import { en, fr } from '../i18n/strings';

interface LayoutProps {
  children: React.ReactNode;
  metadataRail?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, metadataRail }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const locale: Locale = location.pathname.startsWith('/fr') ? 'fr' : 'en';
  const strings: I18nStrings = locale === 'fr' ? fr : en;

  // Sync theme state with DOM on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    const currentTheme = isDark ? 'dark' : 'light';
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const currentPath = location.pathname;
    const newPath = currentPath.startsWith('/fr') 
      ? currentPath.replace('/fr', `/${newLocale}`) 
      : currentPath.replace('/en', `/${newLocale}`);
    
    navigate(newPath);
  };

  const navItems = [
    { path: `/${locale}`, label: strings.nav.home },
    { path: `/${locale}/experience`, label: strings.nav.experience },
    { path: `/${locale}/publications`, label: strings.nav.publications },
    { path: `/${locale}/projects`, label: strings.nav.projects },
    { path: `/${locale}/talks`, label: strings.nav.talks },
    { path: `/${locale}/education`, label: strings.nav.education },
    { path: `/${locale}/awards`, label: strings.nav.awards },
    { path: `/${locale}/contact`, label: strings.nav.contact },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E6EDF3] dark:selection:bg-[#27313A]">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F14]/80 backdrop-blur-sm border-b border-[#E5E7EB] dark:border-[#27313A]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={`/${locale}`} className="font-bold tracking-tighter text-lg mono uppercase text-[#111111] dark:text-[#E6EDF3]">
            Amine Maazizi
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path.split('/').length === 2}
                className={({ isActive }) => 
                  `transition-colors hover:text-[#1F4E79] dark:hover:text-[#7FB3C8] ${isActive ? 'text-[#1F4E79] dark:text-[#7FB3C8]' : 'text-[#444444] dark:text-[#9CA3AF]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLocale}
              className="text-[10px] font-bold px-2 py-1 rounded border border-[#E5E7EB] dark:border-[#27313A] hover:bg-[#E5E7EB] dark:hover:bg-[#27313A] transition-colors uppercase"
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#E5E7EB] dark:hover:bg-[#27313A] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
          <div className="min-w-0">
            {children}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-10">
              <section>
                <h3 className="mono uppercase text-[10px] font-bold text-[#9CA3AF] dark:text-[#444444] mb-3 tracking-widest">Affiliation</h3>
                <p className="text-xs font-semibold leading-relaxed">
                  MVA Master's Student<br/>
                  <span className="text-[#9CA3AF] dark:text-[#444444]">ENS Paris-Saclay / ENSTA Paris</span>
                </p>
              </section>
              <section>
                <h3 className="mono uppercase text-[10px] font-bold text-[#9CA3AF] dark:text-[#444444] mb-3 tracking-widest">Research Interests</h3>
                <ul className="space-y-1 text-xs text-[#444444] dark:text-[#9CA3AF] font-serif italic">
                  <li>Geometric Deep Learning</li>
                  <li>Representation Learning</li>
                  <li>Biomedical Imaging</li>
                  <li>Shape Analysis</li>
                </ul>
              </section>
              <section>
                <h3 className="mono uppercase text-[10px] font-bold text-[#9CA3AF] dark:text-[#444444] mb-3 tracking-widest">Links</h3>
                <div className="flex flex-col gap-2 text-[11px] font-bold uppercase text-[#1F4E79] dark:text-[#4A90A4]">
                  <a href="https://github.com/amine-maazizi" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/amine-maazizi/" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="/MAAZIZI_CV.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-[#E5E7EB] dark:border-[#27313A] py-12 bg-[#E5E7EB]/50 dark:bg-[#27313A] mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-[#9CA3AF] font-medium mono uppercase tracking-[0.2em]">
            Amine Maazizi © {new Date().getFullYear()} — Palaiseau, France
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
