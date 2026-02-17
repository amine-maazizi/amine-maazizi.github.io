
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import ListView from './pages/ListView';
import { Locale } from './types';
import { en, fr } from './i18n/strings';
import { researchExperience, projects, awards, updates, talks, education } from './data/content';

const App: React.FC = () => {
  const location = useLocation();
  const currentLocale: Locale = location.pathname.startsWith('/fr') ? 'fr' : 'en';
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* EN Routes */}
        <Route path="/en" element={<Home locale="en" />} />
        <Route path="/en/publications" element={<Publications locale="en" />} />
        <Route path="/en/experience" element={<ListView locale="en" title={en.nav.experience} items={researchExperience.en} />} />
        <Route path="/en/projects" element={<ListView locale="en" title={en.nav.projects} items={projects.en} />} />
        <Route path="/en/awards" element={<ListView locale="en" title={en.nav.awards} items={awards.en} />} />
        <Route path="/en/talks" element={<ListView locale="en" title={en.nav.talks} items={talks.en} />} />
        <Route path="/en/education" element={<ListView locale="en" title={en.nav.education} items={education.en} />} />
        <Route path="/en/contact" element={
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#E6EDF3] mb-3">Contact</h1>
              <div className="w-12 h-1 bg-[#1F4E79] dark:bg-[#4A90A4] mt-6" />
            </div>
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
                I'm always interested in discussing research collaborations, internship opportunities, or questions about my work in geometric deep learning, computer vision, and biomedical imaging.
              </p>
              <p className="text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
                Feel free to reach out via one of my academic email addresses:
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
        } />
        
        {/* FR Routes */}
        <Route path="/fr" element={<Home locale="fr" />} />
        <Route path="/fr/publications" element={<Publications locale="fr" />} />
        <Route path="/fr/experience" element={<ListView locale="fr" title={fr.nav.experience} items={researchExperience.fr} />} />
        <Route path="/fr/projects" element={<ListView locale="fr" title={fr.nav.projects} items={projects.fr} />} />
        <Route path="/fr/awards" element={<ListView locale="fr" title={fr.nav.awards} items={awards.fr} />} />
        <Route path="/fr/talks" element={<ListView locale="fr" title={fr.nav.talks} items={talks.fr} />} />
        <Route path="/fr/education" element={<ListView locale="fr" title={fr.nav.education} items={education.fr} />} />
        <Route path="/fr/contact" element={
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#E6EDF3] mb-3">Contact</h1>
              <div className="w-12 h-1 bg-[#1F4E79] dark:bg-[#4A90A4] mt-6" />
            </div>
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
                Je suis toujours intéressé pour discuter de collaborations de recherche, d'opportunités de stage ou de questions concernant mes travaux en apprentissage géométrique profond, vision par ordinateur et imagerie biomédicale.
              </p>
              <p className="text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
                N'hésitez pas à me contacter via l'une de mes adresses académiques :
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
        } />
      </Routes>
    </Layout>
  );
};

export default App;
