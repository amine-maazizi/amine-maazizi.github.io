import React from 'react';
import { Locale } from '../types';

const newsItems = [
  {
    date: 'August 2026',
    dateTime: '2026-08',
    title: 'Admitted to the PhD programme at Mines Paris - PSL',
    summary: 'I will join the Centre for Robotics and the NPM3D team as a doctoral researcher in November 2026.',
  },
  {
    date: 'April 2026',
    dateTime: '2026-04',
    title: 'Joined EPFL',
    summary: 'Started a research internship at the AIMM Lab on treatment-response modelling in spatial proteomics.',
  },
  {
    date: 'November 2025',
    dateTime: '2025-11',
    title: 'Finalist for ENSTA research pitch competition',
    summary: 'Finalist for ENSTA\'s 2025 "My Research Project in 180 Seconds" competition.',
  },
  {
    date: 'October 2025',
    dateTime: '2025-10',
    title: 'Continued collaboration with Institut Pasteur',
    summary: 'Continued work on geometry-aware shape matching for morphodynamic analysis.',
  },
];

const honors = [
  {
    year: '2025',
    dateTime: '2025',
    title: 'Finalist, Best Research Project Award, ENSTA Paris',
  },
  {
    year: '2023',
    dateTime: '2023',
    title: 'Moroccan Excellence Scholarship, Ministry of Higher Education',
  },
];

const Home: React.FC<{ locale: Locale }> = ({ locale }) => {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px] md:items-center">
        <div className="space-y-5 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-[2.2rem] font-bold leading-tight text-[var(--color-text)]">
              Amine Maazizi
            </h1>
            <div className="space-y-1 text-base text-[var(--color-muted)] leading-relaxed">
              <p>Research Intern at EPFL</p>
              <p>Incoming Doctoral Researcher at Mines Paris - PSL</p>
            </div>
          </div>

          <p className="mx-auto text-base md:text-lg leading-relaxed text-[var(--color-text)] max-w-2xl">
            I am interested in representation learning, open-vocabulary 3D perception, and multimodal knowledge
            transfer from vision-language models to LiDAR and point clouds.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <a href="mailto:amine.maazizi@epfl.ch" className="hover:underline underline-offset-4">
              Email
            </a>
            <a
              href="https://github.com/amine-maazizi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile, opens in a new tab"
              className="hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amine-maazizi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile, opens in a new tab"
              className="hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="md:justify-self-end">
          <img
            src="/images/photo.jpeg"
            alt="Amine Maazizi hiking outdoors"
            className="w-full max-w-[260px] aspect-square rounded object-cover object-[70%_70%]"
          />
        </div>
      </section>

      <section aria-labelledby="news-heading">
        <h2 id="news-heading" className="text-xl font-bold text-[var(--color-text)] mb-5">News</h2>
        <ul className="space-y-4">
          {newsItems.map((item) => (
              <li key={`${item.date}-${item.title}`} className="grid gap-1 sm:grid-cols-[7.5rem_1fr]">
                <time dateTime={item.dateTime} className="text-sm text-[var(--color-soft)]">{item.date}</time>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--color-text)]">{item.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed">{item.summary}</p>
                </div>
              </li>
            ))}
        </ul>
      </section>

      <section aria-labelledby="honors-heading">
        <h2 id="honors-heading" className="text-xl font-bold text-[var(--color-text)] mb-5">Honors</h2>
        <ul className="space-y-3">
          {honors.map((item) => (
            <li key={`${item.year}-${item.title}`} className="grid gap-1 sm:grid-cols-[4rem_1fr]">
              <time dateTime={item.dateTime} className="text-sm text-[var(--color-soft)]">{item.year}</time>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">{item.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
