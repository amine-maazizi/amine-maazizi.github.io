
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
              ? "MVA Student at ENS Paris-Saclay & ENSTA Paris" 
              : "Étudiant MVA à l'ENS Paris-Saclay & ENSTA Paris"}
          />
          <div className="prose-serif text-lg leading-relaxed text-[#444444] dark:text-[#9CA3AF] max-w-2xl">
            <p>
              {locale === 'en' 
                ? "I am an engineer-researcher specializing in applied mathematics, computer science, and AI. My work focuses on geometric processing, representation learning, and computer vision with applications in biomedical imaging and computational biology."
                : "Élève-ingénieur et chercheur spécialisé en mathématiques appliquées et intelligence artificielle. Mes travaux portent sur le traitement géométrique, l'apprentissage de représentations et la vision par ordinateur, avec des applications en imagerie biomédicale."}
            </p>
            <p className="mt-4">
               {locale === 'en'
                ? "Currently, I am collaborating with the Institut Pasteur on geometry-aware models for cell membrane analysis. In April 2026, I will join the AIMM Lab at EPFL as a research intern."
                : "Je collabore actuellement avec l'Institut Pasteur sur des modèles de mise en correspondance de formes pour l'analyse des membranes biologiques. Je rejoindrai l'AIMM Lab à l'EPFL en avril 2026."}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold mono uppercase tracking-widest text-[#9CA3AF] dark:text-[#444444] mb-8 border-b border-[#E5E7EB] dark:border-[#27313A] pb-2">
          {locale === 'en' ? 'Recent updates' : 'Mises à jour récentes'}
        </h2>
        <div className="space-y-6">
          {(locale === 'en' ? updates.en : updates.fr).map((update) => (
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
            <h3 className="font-bold mb-1">Morphodynamics & Curvature</h3>
            <p className="text-[#444444] dark:text-[#9CA3AF] leading-relaxed italic">Analyzing hematopoietic stem cell emergence via Helfrich energy constraints (Institut Pasteur).</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Panoptic Segmentation</h3>
            <p className="text-[#444444] dark:text-[#9CA3AF] leading-relaxed italic">Foundation models for spatial proteomics and multiplex imaging (EPFL Prep).</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
