
import React, { useState, useMemo, useEffect } from 'react';
import { Locale, Publication } from '../types';
import { en, fr } from '../i18n/strings';
import { SectionHeader, TagPill, LinkIcon } from '../components/UI';

const Publications: React.FC<{ locale: Locale }> = ({ locale }) => {
  const strings = locale === 'fr' ? fr : en;
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [activeCite, setActiveCite] = useState<string | null>(null);

  // Use fetch for JSON data to ensure compatibility with standard browser ESM 
  // which often restricts JSON imports without specific assertions.
  useEffect(() => {
    fetch('./data/publications.json')
      .then(res => res.json())
      .then(data => setPublications(data))
      .catch(err => console.error("Failed to load publications:", err));
  }, []);

  const filteredPubs = useMemo(() => {
    return publications.filter(pub => {
      const matchesFilter = filter === 'all' || pub.type === filter;
      const matchesSearch = pub.title.toLowerCase().includes(search.toLowerCase()) ||
                          pub.authors.some(a => a.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    }).sort((a, b) => b.year - a.year);
  }, [filter, search, publications]);

  return (
    <div className="space-y-12">
      <SectionHeader title={strings.nav.publications} subtitle={locale === 'en' ? "Peer-reviewed papers and preprints." : "Articles revus par les pairs et prépublications."} />

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center sticky top-16 z-40 bg-white/90 dark:bg-[#0B0F14]/90 py-4 border-b border-[#E5E7EB] dark:border-[#27313A] backdrop-blur">
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {['all', 'journal', 'conference', 'preprint'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors ${filter === type ? 'bg-[#1F4E79] text-white' : 'bg-[#E5E7EB] dark:bg-[#27313A] text-[#444444] hover:bg-[#D1D5DB]'}`}
            >
              {type === 'all' ? strings.ui.all : type}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder={strings.ui.search} 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-4 py-2 bg-[#E5E7EB] dark:bg-[#27313A] border border-[#E5E7EB] dark:border-[#27313A] rounded-lg text-xs focus:ring-2 focus:ring-[#1F4E79] outline-none transition-all"
          />
          <svg className="w-4 h-4 absolute left-2.5 top-2.5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      <div className="space-y-12">
        {Array.from(new Set(filteredPubs.map(p => p.year))).sort((a: number, b: number) => b - a).map(year => (
          <section key={year}>
            <h2 className="text-2xl font-serif italic text-[#9CA3AF] dark:text-[#444444] mb-6 border-b border-[#E5E7EB] dark:border-[#27313A] pb-2">{year}</h2>
            <div className="space-y-10">
              {filteredPubs.filter(p => p.year === year).map(pub => (
                <article key={pub.id} className="group relative">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-4 justify-between">
                      <h3 className="text-lg font-bold group-hover:text-[#1F4E79] dark:group-hover:text-[#7FB3C8] transition-colors leading-snug">
                        {pub.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-[#444444] dark:text-[#9CA3AF]">
                      {pub.authors.map((author, idx) => (
                        <span key={idx} className={author.includes("Amine MAAZIZI") ? "font-bold underline decoration-[#1F4E79]" : ""}>
                          {author}{idx < pub.authors.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs italic text-[#9CA3AF] dark:text-[#444444] font-serif">
                      {pub.venue}
                      {pub.status && <span className="ml-2 px-2 py-0.5 bg-[#E5E7EB] dark:bg-[#27313A] text-[#1F4E79] dark:text-[#4A90A4] rounded text-[10px] font-bold uppercase">{pub.status}</span>}
                    </p>

                    {pub.abstract && (
                      <p className="text-sm text-[#444444] dark:text-[#9CA3AF] leading-relaxed">
                        {pub.abstract}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      {pub.doi && <LinkIcon href={`https://doi.org/${pub.doi}`} label="DOI" />}
                      {pub.pdfUrl && <LinkIcon href={pub.pdfUrl} label="PDF" />}
                      {pub.arxivId && <LinkIcon href={`https://arxiv.org/abs/${pub.arxivId}`} label="ArXiv" />}
                      {pub.codeUrl && <LinkIcon href={pub.codeUrl} label="Code" />}
                      <button 
                        onClick={() => setActiveCite(activeCite === pub.id ? null : pub.id)}
                        className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] hover:text-[#111111] dark:hover:text-[#E6EDF3] flex items-center gap-1"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" /></svg>
                        {strings.ui.cite}
                      </button>
                    </div>

                    {activeCite === pub.id && (
                      <div className="mt-4 p-4 bg-[#E5E7EB] dark:bg-[#27313A] border border-[#E5E7EB] dark:border-[#27313A] rounded font-mono text-[10px] leading-relaxed relative animate-in fade-in slide-in-from-top-2">
                        <pre className="whitespace-pre-wrap">{pub.bibtex}</pre>
                        <button 
                            onClick={() => setActiveCite(null)}
                            className="absolute top-2 right-2 text-[#9CA3AF] hover:text-[#444444]"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {pub.tags.map(tag => <TagPill key={tag}>{tag}</TagPill>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Publications;
