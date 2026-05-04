import React, { useEffect, useMemo, useState } from 'react';
import { Locale, Publication } from '../types';
import { en, fr } from '../i18n/strings';
import { SectionHeader, TagPill, LinkIcon } from '../components/UI';

type PaperTab = 'all' | 'conference' | 'journal' | 'preprint' | 'archive';

const tabs: PaperTab[] = ['all', 'conference', 'journal', 'preprint', 'archive'];

const tabLabels: Record<Locale, Record<PaperTab, string>> = {
  en: {
    all: 'All',
    conference: 'Conference',
    journal: 'Journal',
    preprint: 'Preprint',
    archive: 'Archive',
  },
  fr: {
    all: 'Tous',
    conference: 'Conférence',
    journal: 'Revue',
    preprint: 'Prépublication',
    archive: 'Archive',
  },
};

const AuthorList: React.FC<{ authors: string[] }> = ({ authors }) => (
  <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-[#444444] dark:text-[#9CA3AF]">
    {authors.map((author, idx) => (
      <span key={`${author}-${idx}`} className={author === 'A. Maazizi' ? 'font-bold underline decoration-[#1F4E79]' : ''}>
        {author}{idx < authors.length - 1 ? ',' : ''}
      </span>
    ))}
  </div>
);

const ResourceLinks: React.FC<{ item: Publication }> = ({ item }) => (
  <div className="flex flex-wrap items-center gap-4 pt-1">
    {item.pdfUrl && <LinkIcon href={item.pdfUrl} label="PDF" />}
    {item.codeUrl && <LinkIcon href={item.codeUrl} label="Code" />}
    {item.datasetLinks?.map((dataset) => (
      <LinkIcon key={dataset.url} href={dataset.url} label={dataset.label} />
    ))}
  </div>
);

const ResearchCard: React.FC<{ item: Publication; locale: Locale }> = ({ item, locale }) => (
  <article className="group relative">
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <h3 className="text-xl font-bold group-hover:text-[#1F4E79] dark:group-hover:text-[#7FB3C8] transition-colors leading-snug">
          {item.title}
        </h3>
        <span className="text-xs font-bold mono text-[#9CA3AF] dark:text-[#444444]">{item.year}</span>
      </div>
      <AuthorList authors={item.authors} />
      <p className="text-xs italic text-[#9CA3AF] dark:text-[#444444] font-serif">
        {locale === 'fr' ? item.labelFr : item.label}
        {item.status && <span className="ml-2 not-italic mono uppercase">{item.status}</span>}
      </p>
      <p className="text-sm leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
        {locale === 'fr' ? item.abstractFr : item.abstract}
      </p>
      <ResourceLinks item={item} />
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}
      </div>
    </div>
  </article>
);

const ArchiveCard: React.FC<{ item: Publication; locale: Locale }> = ({ item, locale }) => (
  <article className="rounded-lg border border-[#E5E7EB] dark:border-[#27313A] p-4">
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h3 className="text-base font-bold leading-snug text-[#111111] dark:text-[#E6EDF3]">
            {item.title}
          </h3>
          <p className="text-[11px] font-bold mono uppercase tracking-wider text-[#1F4E79] dark:text-[#4A90A4] mt-1">
            {locale === 'fr' ? item.labelFr : item.label}
          </p>
        </div>
        <span className="text-xs font-bold mono text-[#9CA3AF] dark:text-[#444444]">{item.year}</span>
      </div>
      <AuthorList authors={item.authors} />
      <p className="text-sm leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
        {locale === 'fr' ? item.abstractFr : item.abstract}
      </p>
      <ResourceLinks item={item} />
    </div>
  </article>
);

const Publications: React.FC<{ locale: Locale }> = ({ locale }) => {
  const strings = locale === 'fr' ? fr : en;
  const [items, setItems] = useState<Publication[]>([]);
  const [activeTab, setActiveTab] = useState<PaperTab>('all');

  useEffect(() => {
    fetch('/publications.json')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Failed to load papers:', err));
  }, []);

  const visibleItems = useMemo(() => {
    const sorted = [...items].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

    if (activeTab === 'archive') {
      return sorted.filter((item) => item.archive);
    }

    const nonArchive = sorted.filter((item) => !item.archive);

    if (activeTab === 'all') {
      return nonArchive;
    }

    return nonArchive.filter((item) => item.type === activeTab);
  }, [activeTab, items]);

  return (
    <div className="space-y-10">
      <SectionHeader
        title={strings.nav.publications}
        subtitle={locale === 'fr' ? 'Recherche sélectionnée et rapports archivés.' : 'Selected research and archived reports.'}
      />

      <div className="flex flex-wrap gap-1.5 border-b border-[#E5E7EB] dark:border-[#27313A] pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${
              activeTab === tab
                ? 'bg-[#1F4E79] text-white'
                : 'bg-[#E5E7EB] dark:bg-[#27313A] text-[#444444] dark:text-[#9CA3AF] hover:bg-[#D1D5DB] dark:hover:bg-[#33404B]'
            }`}
          >
            {tabLabels[locale][tab]}
          </button>
        ))}
      </div>

      <section className={activeTab === 'archive' ? 'space-y-4' : 'space-y-8'}>
        <h2 className="text-sm font-bold mono uppercase tracking-widest text-[#9CA3AF] dark:text-[#444444] border-b border-[#E5E7EB] dark:border-[#27313A] pb-2">
          {tabLabels[locale][activeTab]}
        </h2>

        {visibleItems.length === 0 ? (
          <p className="text-sm text-[#9CA3AF] dark:text-[#444444] italic">
            {locale === 'fr' ? 'Aucun élément pour le moment.' : 'No items yet.'}
          </p>
        ) : (
          <div className={activeTab === 'archive' ? 'space-y-4' : 'space-y-8'}>
            {visibleItems.map((item) => (
              activeTab === 'archive'
                ? <ArchiveCard key={item.id} item={item} locale={locale} />
                : <ResearchCard key={item.id} item={item} locale={locale} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Publications;
