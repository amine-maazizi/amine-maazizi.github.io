
import { ContentEntry } from '../types';

export const updates: Record<string, ContentEntry[]> = { 
  en: [
    {
      id: 'in-epfl',
      title: 'Joined EPFL',
      date: '2026-04',
      summary: 'Started a research internship at the AIMM Lab, working on VIRTUES-SIM for therapy-conditioned tissue simulation.',
      body: ''
    },
    {
      id: 'up-bida-poster-2026',
      title: 'Poster Presentation at CentraleSupélec',
      date: '2026-03',
      summary:
        'Presented a poster presentation at the Bibliotheque space in Eiffel (CentraleSupélec).',
      body: ''
    },
    { 
      id: 'up-poster', 
      title: 'Poster Presentation at ENS Paris-Saclay', 
      date: '2025-12', 
      summary: 'Presented "not-MIWAE and a Supervised MNAR Extension" at the ENS Paris-Saclay Atrium.', 
      body: '' 
    },
    { 
      id: 'up-shapematch-dev', 
      title: 'Development of shape-matching research software', 
      date: '2025-10', 
      summary: 'Started development of a collaborative research library with Institut Pasteur to provide biologists an accessible tool for constrained mesh shape matching.', 
      body: '' 
    }
  ],
  fr: [
    {
      id: 'in-epfl',
      title: 'Arrivée à l’EPFL',
      date: '2026-04',
      summary: 'Début d’un stage de recherche au AIMM Lab, sur VIRTUES-SIM pour la simulation tissulaire conditionnée par les thérapies.',
      body: ''
    },
    {
      id: 'up-bida-poster-2026',
      title: 'Présentation de poster a CentraleSupélec',
      date: '2026-03',
      summary:
        'Présentation de poster a la Bibliotheque (espace Eiffel, CentraleSupélec).',
      body: ''
    },
    { 
      id: 'up-poster', 
      title: 'Présentation de poster à l\'ENS Paris-Saclay', 
      date: '2025-12', 
      summary: 'Présentation des travaux « not-MIWAE and a Supervised MNAR Extension » à l\'Atrium de l\'ENS Paris-Saclay.', 
      body: '' 
    },
    { 
      id: 'up-shapematch-dev', 
      title: 'Développement d\'un logiciel de mise en correspondance de formes', 
      date: '2025-10', 
      summary: 'Début du développement d\'une bibliothèque de recherche en collaboration avec Institut Pasteur pour permettre aux biologistes d\'effectuer un appariement de formes sous contraintes mécaniques sur des maillages.', 
      body: '' 
    }
  ]
};

export const talks: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'talk-bida-sr-poster',
      title: 'Zero-shot MRI super-resolution reproduction',
      org: 'Bibliotheque space, Eiffel, CentraleSupélec',
      location: 'Gif-sur-Yvette, France',
      date: '2026-03-26',
      summary:
        'Poster presentation of our reviewed reproduction of "Exploring the Feasibility of Zero-Shot Super-Resolution in Preclinical Imaging".',
      body: '',
      links: [{ label: 'poster', url: '/papers/poster-bida-sr.pdf' }],
      thumbnail: '/images/automathon.png'
    },
    {
      id: 'talk-notmiwae-poster',
      title: 'not-MIWAE and a supervised MNAR extension',
      org: 'ENS Paris-Saclay, Atrium',
      location: 'Gif-sur-Yvette, France',
      date: '2025-12-18',
      summary: 'Poster presentation on variational methods for missing-not-at-random data imputation.',
      body: '',
      links: [{ label: 'poster', url: '/papers/poster-notmiwae.pdf' }],
      thumbnail: '/images/ens.jpg'
    }
  ],
  fr: [
    {
      id: 'talk-bida-sr-poster',
      title: 'Présentation de poster : reproduction en super-resolution IRM zero-shot',
      org: 'Bibliotheque, espace Eiffel, CentraleSupélec',
      location: 'Gif-sur-Yvette, France',
      date: '2026-03-26',
      summary:
        'Présentation de poster presentant notre reproduction revue de "Exploring the Feasibility of Zero-Shot Super-Resolution in Preclinical Imaging".',
      body: '',
      links: [{ label: 'poster', url: '/papers/poster-bida-sr.pdf' }],
      thumbnail: '/images/automathon.png'
    },
    {
      id: 'talk-notmiwae-poster',
      title: 'not-MIWAE et extension MNAR supervisée',
      org: 'ENS Paris-Saclay, Atrium',
      location: 'Gif-sur-Yvette, France',
      date: '2025-12-18',
      summary: 'Présentation poster sur méthodes variationnelles pour imputation de données manquantes non aléatoires.',
      body: '',
      links: [{ label: 'poster', url: '/papers/poster-notmiwae.pdf' }],
      thumbnail: '/images/ens.jpg'
    }
  ]
};
