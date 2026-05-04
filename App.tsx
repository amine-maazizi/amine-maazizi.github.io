import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import ListView from './pages/ListView';
import TimelineView from './pages/TimelineView';
import { Locale } from './types';
import { en, fr } from './i18n/strings';
import { researchExperience, projects, awards, talks, education } from './data/content';

const visibleProjectIds = new Set(['proj-notmiwae', 'proj-sagalang']);
const visibleAwardIds = new Set(['aw-sae', 'aw-merit']);

const Contact: React.FC<{ locale: Locale }> = ({ locale }) => {
  const interests = locale === 'en'
    ? ['representation learning', 'geometric inductive biases', 'multimodal learning', 'latent-space modeling', 'foundation models', 'scientific machine learning']
    : ['l’apprentissage de représentations', 'les biais inductifs géométriques', 'l’apprentissage multimodal', 'la modélisation en espace latent', 'les modèles de fondation', 'l’apprentissage automatique scientifique'];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#E6EDF3] mb-3">Contact</h1>
        <div className="w-12 h-1 bg-[#1F4E79] dark:bg-[#4A90A4] mt-6" />
      </div>
      <div className="space-y-6 max-w-2xl">
        <p className="text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
          {locale === 'en'
            ? `I am happy to discuss research around ${interests.join(', ')}.`
            : `Je suis ouvert aux échanges de recherche autour de ${interests.join(', ')}.`}
        </p>
        <p className="text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
          {locale === 'en'
            ? 'You can reach me through one of my academic email addresses:'
            : 'Vous pouvez me contacter via l’une de mes adresses académiques :'}
        </p>
        <div className="space-y-3 text-[#444444] dark:text-[#9CA3AF] pl-4 border-l-2 border-[#1F4E79] dark:border-[#4A90A4]">
          <p className="font-mono text-sm">
            <a href="mailto:amine.maazizi@ensta.fr" className="hover:text-[#1F4E79] dark:hover:text-[#7FB3C8] transition-colors">amine.maazizi@ensta.fr</a>
            <span className="text-xs ml-2 text-[#9CA3AF]">(ENSTA Paris)</span>
          </p>
          <p className="font-mono text-sm">
            <a href="mailto:amine.maazizi@ip-paris.fr" className="hover:text-[#1F4E79] dark:hover:text-[#7FB3C8] transition-colors">amine.maazizi@ip-paris.fr</a>
            <span className="text-xs ml-2 text-[#9CA3AF]">(Institut Polytechnique de Paris)</span>
          </p>
          <p className="font-mono text-sm">
            <a href="mailto:amine.maazizi@epfl.ch" className="hover:text-[#1F4E79] dark:hover:text-[#7FB3C8] transition-colors">amine.maazizi@epfl.ch</a>
            <span className="text-xs ml-2 text-[#9CA3AF]">(EPFL)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const englishProjects = projects.en.filter((project) => visibleProjectIds.has(project.id));
  const frenchProjects = projects.fr.filter((project) => visibleProjectIds.has(project.id));
  const englishAwards = awards.en.filter((award) => visibleAwardIds.has(award.id));
  const frenchAwards = awards.fr.filter((award) => visibleAwardIds.has(award.id));

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/en" element={<Home locale="en" />} />
        <Route path="/en/publications" element={<Publications locale="en" />} />
        <Route path="/en/research" element={<Navigate to="/en/publications" replace />} />
        <Route path="/en/archive" element={<Navigate to="/en/publications" replace />} />
        <Route path="/en/experience" element={<TimelineView locale="en" title={en.nav.experience} items={researchExperience.en} kind="experience" />} />
        <Route path="/en/projects" element={<ListView locale="en" title={en.nav.projects} items={englishProjects} />} />
        <Route path="/en/awards" element={<ListView locale="en" title={en.nav.awards} items={englishAwards} />} />
        <Route path="/en/talks" element={<ListView locale="en" title={en.nav.talks} items={talks.en} />} />
        <Route path="/en/education" element={<TimelineView locale="en" title={en.nav.education} items={education.en} kind="education" />} />
        <Route path="/en/contact" element={<Contact locale="en" />} />

        <Route path="/fr" element={<Home locale="fr" />} />
        <Route path="/fr/publications" element={<Publications locale="fr" />} />
        <Route path="/fr/research" element={<Navigate to="/fr/publications" replace />} />
        <Route path="/fr/archive" element={<Navigate to="/fr/publications" replace />} />
        <Route path="/fr/experience" element={<TimelineView locale="fr" title={fr.nav.experience} items={researchExperience.fr} kind="experience" />} />
        <Route path="/fr/projects" element={<ListView locale="fr" title={fr.nav.projects} items={frenchProjects} />} />
        <Route path="/fr/awards" element={<ListView locale="fr" title={fr.nav.awards} items={frenchAwards} />} />
        <Route path="/fr/talks" element={<ListView locale="fr" title={fr.nav.talks} items={talks.fr} />} />
        <Route path="/fr/education" element={<TimelineView locale="fr" title={fr.nav.education} items={education.fr} kind="education" />} />
        <Route path="/fr/contact" element={<Contact locale="fr" />} />
      </Routes>
    </Layout>
  );
};

export default App;
