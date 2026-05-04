import React from 'react';
import { Locale } from '../types';
import { en, fr } from '../i18n/strings';
import { updates } from '../data/content';
import { SectionHeader } from '../components/UI';

const Home: React.FC<{ locale: Locale }> = ({ locale }) => {
  const strings = locale === 'fr' ? fr : en;

  return (
    <div className="space-y-16">
      <section className="flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0 relative">
          <img
            src="/images/formal_photo.jpg"
            alt="Amine Maazizi"
            className="w-40 h-40 md:w-56 md:h-56 rounded-xl shadow-2xl border border-[#E5E7EB] dark:border-[#27313A] object-cover"
          />
        </div>
        <div className="space-y-6">
          <SectionHeader
            title="Amine Maazizi"
            subtitle={locale === 'en'
              ? 'Research Intern at EPFL · MVA Student at ENS Paris-Saclay · Engineering Student at ENSTA Paris'
              : 'Stagiaire de recherche à l’EPFL · Étudiant MVA à l’ENS Paris-Saclay · Élève-ingénieur à l’ENSTA Paris'}
          />
          <div className="prose-serif text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF] max-w-2xl">
            <p>
              {locale === 'en'
                ? 'I am interested in machine learning approaches that incorporate inductive biases, such as geometric structure, to learn useful representations without relying solely on scale. I am currently working on latent-space perturbation modeling for spatial proteomics data, with applications to treatment-response simulation.'
                : 'Je m’intéresse aux approches d’apprentissage automatique qui intègrent des biais inductifs, comme la structure géométrique, afin d’apprendre des représentations utiles sans dépendre uniquement du passage à l’échelle. Je travaille actuellement sur la modélisation des perturbations en espace latent pour des données de protéomique spatiale, avec des applications à la simulation de réponses aux traitements.'}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold mono uppercase tracking-widest text-[#9CA3AF] dark:text-[#444444] mb-8 border-b border-[#E5E7EB] dark:border-[#27313A] pb-2">
          {locale === 'en' ? 'Recent updates' : 'Mises à jour récentes'}
        </h2>
        <div className="space-y-6">
          {(locale === 'en' ? updates.en : updates.fr).filter((update) => ['in-epfl', 'up-shapematch-dev'].includes(update.id)).map((update) => (
            <div key={update.id} className="flex gap-4 pb-6 border-b border-[#E5E7EB] dark:border-[#27313A] last:border-b-0 last:pb-0">
              <span className="mono text-xs text-[#9CA3AF] shrink-0 mt-1">{update.date}</span>
              <div className="flex-1">
                <h3 className="font-bold text-[#111111] dark:text-[#E6EDF3]">{update.title}</h3>
                <p className="text-sm text-[#444444] dark:text-[#9CA3AF] mt-1">{update.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-[#E5E7EB] dark:bg-[#27313A] rounded-xl border border-[#E5E7EB] dark:border-[#27313A]">
        <h2 className="text-xs font-bold mono uppercase tracking-widest text-[#1F4E79] dark:text-[#4A90A4] mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E79] dark:bg-[#4A90A4] animate-pulse" />
          {strings.ui.currentFocus}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-1">Morphodynamic Study of EHT</h3>
            <p className="text-[11px] font-bold mono uppercase tracking-wider text-[#1F4E79] dark:text-[#4A90A4] mb-2">
              {locale === 'en' ? 'Institut Pasteur · geometry-aware shape matching' : 'Institut Pasteur · recalage de formes géométrique'}
            </p>
            <p className="text-[#444444] dark:text-[#9CA3AF] leading-relaxed italic">
              {locale === 'en'
                ? 'Studying morphodynamic changes during endothelial-to-hematopoietic transition using geometry-aware shape matching and mechanical priors.'
                : 'Étude des changements morphodynamiques pendant la transition endothélio-hématopoïétique à l’aide d’un recalage de formes géométrique et de contraintes mécaniques.'}
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Virtues-SIM</h3>
            <p className="text-[11px] font-bold mono uppercase tracking-wider text-[#1F4E79] dark:text-[#4A90A4] mb-2">
              {locale === 'en' ? 'EPFL AIMM Lab · latent-space perturbation modeling' : 'EPFL AIMM Lab · modélisation des perturbations en espace latent'}
            </p>
            <p className="text-[#444444] dark:text-[#9CA3AF] leading-relaxed italic">
              {locale === 'en'
                ? 'Modeling cellular responses to perturbations through latent-space dynamics for spatial proteomics data, with applications to treatment-response simulation.'
                : 'Modélisation des réponses cellulaires aux perturbations par dynamiques en espace latent pour des données de protéomique spatiale, avec des applications à la simulation de réponses aux traitements.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
