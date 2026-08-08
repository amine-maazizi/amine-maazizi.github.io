import React from 'react';
import { Link } from 'react-router-dom';
import { I18nStrings } from '../types';
import { en } from '../i18n/strings';

interface LayoutProps {
  children: React.ReactNode;
  metadataRail?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const strings: I18nStrings = en;

  const navItems = [
    { path: '/', label: strings.nav.home },
    { path: '/publications', label: strings.nav.publications },
  ];

  const linkClass =
    'text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:underline underline-offset-4';

  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--color-border)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-4 focus:z-50 focus:bg-[var(--color-bg)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--color-accent)] focus:underline"
      >
        Skip to main content
      </a>
      <header className="border-b border-[var(--color-header-border)]">
        <div className="max-w-[880px] mx-auto px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <Link
            to="/"
            className="site-name inline-flex items-center gap-2 text-[1.05rem] font-bold text-[var(--color-text)] hover:text-[var(--color-accent)]"
          >
            Amine Maazizi
          </Link>

          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem]">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </Link>
            ))}
            <a
              href="/MAAZIZI_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV PDF in a new tab"
              className={linkClass}
            >
              CV
            </a>
            <Link to="/contact" className={linkClass}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1 max-w-[880px] w-full mx-auto px-5 py-12 md:py-16">
        {children}
      </main>

      <footer className="border-t border-[var(--color-border)] py-8 mt-16">
        <div className="max-w-[880px] mx-auto px-5">
          <p className="text-sm text-[var(--color-soft)]">
            Amine Maazizi (c) {new Date().getFullYear()} - Palaiseau, France
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
