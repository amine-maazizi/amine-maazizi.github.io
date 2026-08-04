import React, { useEffect, useMemo, useState } from 'react';
import { Locale, Publication, PublicationType } from '../types';
import { en, fr } from '../i18n/strings';
import { SectionHeader } from '../components/UI';

type PaperCategoryId = 'preprints' | 'journalConference' | 'technicalReports' | 'posters';

type PaperOutput = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  outputType: 'technical report' | 'project report' | 'research survey' | 'poster presentation';
  pdfUrl?: string;
  codeUrl?: string;
  posterUrl?: string;
};

const categoryLabels: Record<PaperCategoryId, string> = {
  preprints: 'Preprints',
  journalConference: 'Journal and conference papers',
  technicalReports: 'Technical reports',
  posters: 'Posters and presentations',
};

const posterOutputs: PaperOutput[] = [
  {
    id: 'poster-notmiwae',
    title: 'Deep Generative Modelling with MNAR Data and a Supervised Extension',
    authors: ['A. Maazizi', 'A. Gassem', 'E. Melzani'],
    year: 2026,
    venue: 'MVA, Probabilistic Graphical Models and Deep Generative Models',
    outputType: 'poster presentation',
    posterUrl: '/documents/posters/not-miwae-mnar-poster.pdf',
  },
  {
    id: 'poster-bida-sr',
    title: 'A Critical Review of Zero-Shot Super-Resolution for Preclinical MRI',
    authors: ['A. Maazizi', 'N. Vujadinovic'],
    year: 2026,
    venue: 'MVA, Deep Learning for Medical Imaging',
    outputType: 'poster presentation',
    posterUrl: '/documents/posters/zero-shot-mri-super-resolution-poster.pdf',
  },
];

const toPaperOutput = (item: Publication): PaperOutput => ({
  id: item.id,
  title: item.title,
  authors: item.authors,
  year: item.year,
  venue: item.venue,
  outputType: item.outputType,
  pdfUrl: item.pdfUrl,
  codeUrl: item.codeUrl,
});

const AuthorList: React.FC<{ authors: string[] }> = ({ authors }) => (
  <span className="text-[var(--color-muted)]">
    {authors.map((author, index) => (
      <React.Fragment key={`${author}-${index}`}>
        <span className={author === 'A. Maazizi' ? 'font-semibold' : undefined}>{author}</span>
        {index < authors.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))}
  </span>
);

const ResourceLinks: React.FC<{ item: PaperOutput }> = ({ item }) => (
  <span className="inline-flex flex-wrap gap-x-3 gap-y-1 text-sm">
    {item.pdfUrl && (
        <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" aria-label={`PDF: ${item.title}`} className="hover:underline underline-offset-4">
        PDF
      </a>
    )}
    {item.codeUrl && (
      <a href={item.codeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Code for ${item.title}`} className="hover:underline underline-offset-4">
        Code
      </a>
    )}
    {item.posterUrl && (
        <a href={item.posterUrl} target="_blank" rel="noopener noreferrer" aria-label={`Poster: ${item.title}`} className="hover:underline underline-offset-4">
        Poster
      </a>
    )}
  </span>
);

const PaperRow: React.FC<{ item: PaperOutput }> = ({ item }) => (
  <li className="space-y-1">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <h3 className="min-w-0 break-words font-semibold leading-snug text-[var(--color-text)]">{item.title}</h3>
      <span className="text-sm text-[var(--color-soft)] shrink-0">{item.year}</span>
    </div>
    <p className="text-sm leading-relaxed">
      <AuthorList authors={item.authors} />
    </p>
    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
      {item.venue}, {item.outputType}
    </p>
    {(item.pdfUrl || item.codeUrl || item.posterUrl) && <ResourceLinks item={item} />}
  </li>
);

const Publications: React.FC<{ locale: Locale }> = ({ locale }) => {
  const strings = locale === 'fr' ? fr : en;
  const [items, setItems] = useState<Publication[]>([]);

  useEffect(() => {
    fetch('/publications.json')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Failed to load papers:', err));
  }, []);

  const categories = useMemo(() => {
    const sorted = [...items].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

    const preprints = sorted
      .filter((item) => item.type === PublicationType.PREPRINT && !item.archive)
      .map(toPaperOutput);

    const journalConference = sorted
      .filter((item) => [PublicationType.JOURNAL, PublicationType.CONFERENCE].includes(item.type) && !item.archive)
      .map(toPaperOutput);

    const technicalReports = sorted
      .filter((item) => item.type === PublicationType.REPORT || item.archive)
      .map(toPaperOutput);

    return [
      { id: 'preprints' as const, items: preprints },
      { id: 'journalConference' as const, items: journalConference },
      { id: 'technicalReports' as const, items: technicalReports },
      { id: 'posters' as const, items: [...posterOutputs].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title)) },
    ];
  }, [items]);

  const visibleCategories = categories.filter((category) => category.items.length > 0);

  return (
    <div className="space-y-10">
      <SectionHeader title={strings.nav.publications} subtitle="Research outputs and archived technical work." />

      <div className="space-y-10">
        {visibleCategories.map((category) => (
          <section key={category.id} className="space-y-4" aria-labelledby={`papers-${category.id}`}>
            <h2 id={`papers-${category.id}`} className="text-xl font-bold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">
              {categoryLabels[category.id]}
            </h2>
            <ul className="space-y-5">
              {category.items.map((item) => (
                <PaperRow key={item.id} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Publications;
