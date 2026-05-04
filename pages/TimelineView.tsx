import React, { useState } from 'react';
import { ContentEntry, Locale } from '../types';
import { en, fr } from '../i18n/strings';
import { SectionHeader, TagPill, LinkIcon } from '../components/UI';

interface TimelineViewProps {
  locale: Locale;
  title: string;
  items: ContentEntry[];
  kind: 'experience' | 'education';
}

const formatDateRange = (item: ContentEntry) => {
  if (item.date && item.endDate) return `${item.date} — ${item.endDate}`;
  return item.date || item.endDate || '';
};

const TimelineNode: React.FC<{ item: ContentEntry }> = ({ item }) => (
  <div className="relative z-10 w-16 h-12 rounded-md border border-[#E5E7EB] dark:border-[#27313A] bg-white dark:bg-[#0B0F14] flex items-center justify-center p-1 shadow-sm">
    {item.thumbnail ? (
      <img src={item.thumbnail} alt="" className="w-full h-full object-contain" />
    ) : (
      <span className="mono text-[10px] font-bold text-[#9CA3AF]">{item.icon || '•'}</span>
    )}
  </div>
);

const TimelineItem: React.FC<{ item: ContentEntry; locale: Locale; index: number }> = ({ item, locale, index }) => {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `timeline-details-${item.id}`;
  const dateRange = formatDateRange(item);
  const detailText = item.body || item.summary;
  const teaser = item.teaser || item.summary;

  return (
    <article className="group grid grid-cols-[4rem_1fr] gap-5 md:gap-7 relative">
      <TimelineNode item={item} />

      <div className="pb-10">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className="w-full text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E79] dark:focus-visible:ring-[#4A90A4]"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#111111] dark:text-[#E6EDF3] group-hover:text-[#1F4E79] dark:group-hover:text-[#7FB3C8] transition-colors">
                {item.title}
              </h3>
              {(item.org || item.location) && (
                <p className="text-sm font-serif italic text-[#9CA3AF] dark:text-[#444444]">
                  {item.org}{item.location ? ` · ${item.location}` : ''}
                </p>
              )}
            </div>
            {dateRange && (
              <span className="text-xs font-bold text-[#9CA3AF] dark:text-[#444444] mono uppercase md:text-right shrink-0">
                {dateRange}
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-[#444444] dark:text-[#9CA3AF] mt-3">
            {teaser}
          </p>

          <span className="inline-flex mt-3 text-[10px] font-bold mono uppercase tracking-wider text-[#1F4E79] dark:text-[#4A90A4]">
            {expanded ? (locale === 'fr' ? 'Masquer' : 'Hide') : (locale === 'fr' ? 'Détails' : 'Details')}
          </span>
        </button>

        <div
          id={detailsId}
          className={`grid transition-[grid-template-rows,opacity,transform] duration-200 motion-reduce:transition-none md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:grid-rows-[1fr] md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0 ${
            expanded ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-1'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 pt-4 border-t border-[#E5E7EB] dark:border-[#27313A] space-y-3">
              <p className="text-sm leading-relaxed text-[#444444] dark:text-[#9CA3AF]">
                {detailText}
              </p>

              {item.ranking && (
                <p className="text-xs font-semibold text-[#1F4E79] dark:text-[#4A90A4]">
                  {item.ranking}
                </p>
              )}

              {item.coursework && item.coursework.length > 0 && (
                <p className="text-xs text-[#444444] dark:text-[#9CA3AF]">
                  <span className="font-bold text-[#1F4E79] dark:text-[#4A90A4]">
                    {locale === 'fr' ? 'Cours :' : 'Coursework:'}
                  </span>{' '}
                  {item.coursework.slice(0, 6).join(', ')}
                </p>
              )}

              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}
                </div>
              )}

              {item.links && (
                <div className="flex flex-wrap gap-4">
                  {item.links.map((link) => <LinkIcon key={link.url} href={link.url} label={link.label} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {index === 0 && (
        <span className="sr-only">{locale === 'fr' ? 'Flèche vers le futur' : 'Arrow toward the future'}</span>
      )}
    </article>
  );
};

const TimelineView: React.FC<TimelineViewProps> = ({ locale, title, items, kind }) => {
  const strings = locale === 'fr' ? fr : en;
  const subtitle = kind === 'experience'
    ? (locale === 'fr' ? 'Parcours de recherche récent.' : 'Recent research path.')
    : (locale === 'fr' ? 'Formation académique.' : 'Academic formation.');

  return (
    <div className="space-y-12">
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="relative max-w-4xl">
        <div className="absolute left-8 top-1 bottom-4 w-0.5 bg-[#D1D5DB] dark:bg-[#33404B]" aria-hidden="true" />
        <svg
          className="absolute left-[25px] -top-3 w-4 h-4 text-[#1F4E79] dark:text-[#4A90A4]"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 1L2 5M6 1L10 5M6 1V11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="space-y-2">
          {items.map((item, index) => (
            <TimelineItem key={item.id} item={item} locale={locale} index={index} />
          ))}
        </div>
      </div>

      <p className="sr-only">{strings.ui.showMore}</p>
    </div>
  );
};

export default TimelineView;
