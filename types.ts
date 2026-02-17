
export type Locale = 'en' | 'fr';

export enum PublicationType {
  JOURNAL = 'journal',
  CONFERENCE = 'conference',
  WORKSHOP = 'workshop',
  PREPRINT = 'preprint',
  THESIS = 'thesis'
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  status?: string;
  abstract?: string;
  doi?: string;
  pdfUrl?: string;
  arxivId?: string;
  codeUrl?: string;
  datasetUrl?: string;
  slidesUrl?: string;
  bibtex?: string;
  tags: string[];
}

export interface ContentEntry {
  id: string;
  title: string;
  date?: string;
  endDate?: string;
  summary: string;
  body: string;
  tags?: string[];
  thumbnail?: string;
  icon?: string;
  org?: string;
  location?: string;
  role?: string;
  links?: { label: string; url: string }[];
  ranking?: string;
  coursework?: string[];
}

export interface I18nStrings {
  nav: {
    home: string;
    research: string;
    publications: string;
    experience: string;
    projects: string;
    awards: string;
    talks: string;
    education: string;
    updates: string;
    contact: string;
    cv: string;
  };
  ui: {
    cite: string;
    close: string;
    abstract: string;
    links: string;
    filter: string;
    all: string;
    search: string;
    now: string;
    currentFocus: string;
    teaching: string;
  };
}
