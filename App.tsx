import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import ListView from './pages/ListView';
import { Locale } from './types';
import { en } from './i18n/strings';
import { talks } from './data/content';

const Contact: React.FC<{ locale: Locale }> = ({ locale }) => {
  const interests = locale === 'en'
    ? ['representation learning', 'open-vocabulary 3D perception', 'multimodal knowledge transfer', 'vision-language models', 'LiDAR and point clouds']
    : ['l apprentissage de representations', 'la perception 3D open-vocabulary', 'le transfert de connaissances multimodal', 'les modeles vision-langage', 'le LiDAR et les nuages de points'];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color-text)] mb-3">Contact</h1>
      </div>
      <div className="space-y-6 max-w-2xl">
        <p className="text-base md:text-lg leading-relaxed text-[var(--color-muted)]">
          {locale === 'en'
            ? `I am happy to discuss research around ${interests.join(', ')}.`
            : `Je suis ouvert aux échanges de recherche autour de ${interests.join(', ')}.`}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[var(--color-muted)]">
          {locale === 'en'
            ? 'You can reach me through one of my academic email addresses:'
            : 'Vous pouvez me contacter via l’une de mes adresses académiques :'}
        </p>
        <div className="space-y-3 text-[var(--color-muted)] pl-4 border-l border-[var(--color-border)]">
          <p className="text-sm">
            <a href="mailto:amine.maazizi@ensta.fr" className="hover:text-[var(--color-accent-strong)] hover:underline underline-offset-4 transition-colors">amine.maazizi@ensta.fr</a>
            <span className="text-xs ml-2 text-[var(--color-soft)]">(ENSTA Paris)</span>
          </p>
          <p className="text-sm">
            <a href="mailto:amine.maazizi@ip-paris.fr" className="hover:text-[var(--color-accent-strong)] hover:underline underline-offset-4 transition-colors">amine.maazizi@ip-paris.fr</a>
            <span className="text-xs ml-2 text-[var(--color-soft)]">(Institut Polytechnique de Paris)</span>
          </p>
          <p className="text-sm">
            <a href="mailto:amine.maazizi@epfl.ch" className="hover:text-[var(--color-accent-strong)] hover:underline underline-offset-4 transition-colors">amine.maazizi@epfl.ch</a>
            <span className="text-xs ml-2 text-[var(--color-soft)]">(EPFL)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home locale="en" />} />
        <Route path="/publications" element={<Publications locale="en" />} />
        <Route path="/research" element={<Navigate to="/publications" replace />} />
        <Route path="/archive" element={<Navigate to="/publications" replace />} />
        <Route path="/talks" element={<ListView locale="en" title={en.nav.talks} items={talks.en} />} />
        <Route path="/contact" element={<Contact locale="en" />} />

        <Route path="/en" element={<Navigate to="/" replace />} />
        <Route path="/en/*" element={<Navigate to="/" replace />} />
        <Route path="/fr/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
