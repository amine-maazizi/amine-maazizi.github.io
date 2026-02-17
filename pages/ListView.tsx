
import React from 'react';
import { Locale, ContentEntry } from '../types';
import { en, fr } from '../i18n/strings';
import { SectionHeader, Thumbnail, TagPill, LinkIcon } from '../components/UI';

interface ListViewProps {
  locale: Locale;
  title: string;
  items: ContentEntry[];
}

const ListView: React.FC<ListViewProps> = ({ locale, title, items }) => {
  const strings = locale === 'fr' ? fr : en;

  return (
    <div className="space-y-12">
      <SectionHeader title={title} />
      <div className="space-y-16">
        {items.map((item) => (
          <div key={item.id} className="flex gap-6 items-start group">
            <Thumbnail src={item.thumbnail} alt={item.title} icon={item.icon} />
            <div className="flex-1 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-[#111111] dark:text-[#E6EDF3] group-hover:text-[#1F4E79] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-bold text-[#9CA3AF] dark:text-[#444444] mono uppercase">
                  {item.date} {item.endDate ? `— ${item.endDate}` : ''}
                </span>
              </div>
              
              {item.org && (
                <p className="text-sm font-serif italic text-[#9CA3AF] dark:text-[#444444]">
                  {item.org} {item.location && `· ${item.location}`}
                </p>
              )}

              <p className="text-[#444444] dark:text-[#9CA3AF] leading-relaxed text-sm">
                {item.summary}
              </p>

              {item.ranking && (
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#1F4E79] dark:text-[#4A90A4] uppercase tracking-wide">
                    {locale === 'fr' ? 'Classement' : 'Ranking'}
                  </p>
                  <p className="text-sm text-[#444444] dark:text-[#9CA3AF]">
                    {item.ranking}
                  </p>
                </div>
              )}

              {item.coursework && item.coursework.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#1F4E79] dark:text-[#4A90A4] uppercase tracking-wide">
                    {locale === 'fr' ? 'Enseignements pertinents' : 'Relevant coursework'}
                  </p>
                  <p className="text-sm text-[#444444] dark:text-[#9CA3AF]">
                    {item.coursework.join(', ')}
                  </p>
                </div>
              )}

              {item.tags && (
                <div className="flex gap-2 pt-2">
                  {item.tags.map(t => <TagPill key={t}>{t}</TagPill>)}
                </div>
              )}

              {item.links && (
                <div className="flex gap-4 pt-2">
                  {item.links.map(l => <LinkIcon key={l.url} href={l.url} label={l.label} />)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
