
export type Locale = 'en' | 'fr';

export enum PublicationType {
  SELECTED = 'selected',
  JOURNAL = 'journal',
  CONFERENCE = 'conference',
  WORKSHOP = 'workshop',
  PREPRINT = 'preprint',
  THESIS = 'thesis',
  REPORT = 'report'
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  outputType?: 'technical report' | 'project report' | 'research survey' | 'poster presentation';
  year: number;
  type: PublicationType;
  label?: string;
  labelFr?: string;
  featured?: boolean;
  archive?: boolean;
  status?: string;
  abstract?: string;
  abstractFr?: string;
  doi?: string;
  pdfUrl?: string;
  arxivId?: string;
  codeUrl?: string;
  datasetUrl?: string;
  datasetLinks?: { label: string; url: string }[];
  slidesUrl?: string;
  bibtex?: string;
  tags: string[];
}

export interface ContentEntry {
  id: string;
  title: string;
  date?: string;
  endDate?: string;
  teaser?: string;
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
    talks: string;
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
    showMore: string;
    showLess: string;
  };
}
