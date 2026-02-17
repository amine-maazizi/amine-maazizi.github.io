
import { ContentEntry } from '../types';

export const researchExperience: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'exp-epfl',
      title: 'Research intern',
      org: 'EPFL, Artificial Intelligence in Molecular Medicine (AIMM) Lab',
      location: 'Lausanne, Switzerland',
      date: '2026-04',
      endDate: '2026-09',
      summary:
        'Developing deep learning models for panoptic cell segmentation in multiplex spatial proteomics imaging. Applying foundation model architectures to biological imaging data. Training and benchmarking architectures on the SwissAI Alps HPC cluster in collaboration with computational and clinical partners.',
      body: '',
      thumbnail: '/images/EPFL.png',
      tags: ['deep-learning', 'cell-segmentation', 'spatial-proteomics', 'computer-vision']
    },
    {
      id: 'exp-pasteur',
      title: 'Research intern & collaborator',
      org: 'Institut Pasteur, Biomedical Image Analysis Unit',
      location: 'Paris, France',
      date: '2025-06',
      endDate: 'Present',
      summary:
        'Conducted research on geometry-aware shape matching models for biological membrane morphology using curvature-based (Helfrich energy) constraints. Developed an optimized computational simulation framework and performed large-scale experiments demonstrating curvature-induced forces as drivers of membrane morphogenesis. The work began as an on-site research internship and continues as an ongoing research collaboration.',
      body: '',
      thumbnail: '/images/pasteur.jpg',
      tags: ['geometric-deep-learning', 'shape-matching', 'computational-biology', 'differential-geometry']
    },
    {
      id: 'exp-naist',
      title: 'Research collaborator',
      org: 'NAIST, Cybernetics and Reality Engineering (CaRE) Lab',
      location: 'Remote',
      date: '2024-10',
      endDate: '2024-12',
      summary:
        'Conducted a structured literature survey on geometric deep learning methods for 3D CG model generation from multimodal inputs, with applications to VR. Reviewed multimodal pipelines for virtual reality content creation and analyzed the role of neural implicit representations in computer graphics.',
      body: '',
      thumbnail: '/images/naist.png',
      tags: ['geometric-deep-learning', '3d-generation', 'virtual-reality', 'neural-implicit-representations']
    }
  ],
  fr: [
    {
      id: 'exp-epfl',
      title: 'Stagiaire de recherche',
      org: 'EPFL, Artificial Intelligence in Molecular Medicine (AIMM) Lab',
      location: 'Lausanne, Suisse',
      date: '2026-04',
      endDate: '2026-09',
      summary:
        'Développement de modèles d’apprentissage profond pour la segmentation panoptique de cellules en imagerie de protéomique spatiale multiplexée. Application d’architectures de modèles fondation à des données d’imagerie biologique. Entraînement et évaluation des modèles sur le cluster HPC SwissAI Alps, en collaboration avec des partenaires computationnels et cliniques.',
      body: '',
      thumbnail: '/images/EPFL.png',
      tags: ['apprentissage-profond', 'segmentation-cellulaire', 'protéomique-spatiale', 'vision-par-ordinateur']
    },
    {
      id: 'exp-pasteur',
      title: 'Stagiaire de recherche & collaborateur',
      org: "Institut Pasteur, Unité d’analyse d’images biomédicales",
      location: 'Paris, France',
      date: '2025-06',
      endDate: 'Présent',
      summary:
        'Recherche sur des modèles de mise en correspondance de formes sensibles à la géométrie pour la morphologie des membranes biologiques, avec des contraintes de courbure (énergie de Helfrich). Développement d’un cadre de simulation optimisé et réalisation d’expériences à grande échelle montrant que des forces induites par la courbure constituent un mécanisme clé de la morphogenèse membranaire. Le travail a débuté par un stage de recherche en présentiel et se poursuit sous la forme d’une collaboration de recherche continue.',
      body: '',
      thumbnail: '/images/pasteur.jpg',
      tags: ['apprentissage-géométrique-profond', 'alignement-de-formes', 'biologie-computationnelle', 'géométrie-différentielle']
    },
    {
      id: 'exp-naist',
      title: 'Collaborateur de recherche',
      org: 'NAIST, Cybernetics and Reality Engineering (CaRE) Lab',
      location: 'À distance',
      date: '2024-10',
      endDate: '2024-12',
      summary:
        'Réalisation d’une revue de littérature structurée sur des méthodes d’apprentissage géométrique profond pour la génération de modèles 3D (CG) à partir d’entrées multimodales, avec des applications à la RV. Analyse de pipelines multimodaux pour la création de contenu en réalité virtuelle et étude du rôle des représentations neurales implicites en infographie.',
      body: '',
      thumbnail: '/images/naist.png',
      tags: ['apprentissage-géométrique-profond', 'génération-3d', 'réalité-virtuelle', 'représentations-neurales-implicites']
    }
  ]
};


export const projects: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'proj-notmiwae',
      title: 'not-MIWAE: PyTorch implementation for MNAR imputation',
      role: 'Author and maintainer',
      summary:
        'PyTorch library implementing variational autoencoder-based imputation for missing-not-at-random data. Extends the MIWAE framework with supervised learning capabilities for censored observations. Published on PyPI with documentation and reproducible examples.',
      body: '',
      tags: ['pytorch', 'variational-inference', 'missing-data', 'deep-learning'],
      links: [{ label: 'PyPI', url: 'https://pypi.org/project/notmiwae-pytorch/' }],
      icon: 'VAE'
    },
    {
      id: 'proj-clairvoyance',
      title: 'Clairvoyance: assistive vision system for smart glasses',
      role: 'Lead developer',
      summary:
        'Assistive computer vision pipeline for wearable smart glasses combining depth estimation, object detection + classification, and OCR for real-time scene understanding. Implements a two-stage agentic workflow: a custom-trained language model to handle planned/known scenarios, with a fallback LLM-based agent to respond to unplanned user requests. Includes an embedded hardware stack (camera + Raspberry Pi) and an edge-optimized inference pipeline.',
      body: '',
      tags: ['computer-vision', 'edge-ai', 'accessibility', 'embedded-systems'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/PIE-Clairvoyance' }],
      thumbnail: '/images/clairvoyance.png'
    },
    {
      id: 'proj-sagalang',
      title: 'SAGALang: interpreted language with neural code completion',
      role: 'Creator',
      summary:
        'Custom programming language with lexer, parser, and tree-walk interpreter. Integrates transformer-based code completion for intelligent suggestions. Implements type inference and runtime error handling.',
      body: '',
      tags: ['compilers', 'programming-languages', 'natural-language-processing', 'transformers'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/SagaLang' }],
      thumbnail: '/images/saga.png'
    }
  ],
  fr: [
    {
      id: 'proj-notmiwae',
      title: 'not-MIWAE : implémentation PyTorch pour imputation MNAR',
      role: 'Auteur et mainteneur',
      summary:
        "Bibliothèque PyTorch implémentant l'imputation par autoencodeur variationnel pour données manquantes non aléatoires. Extension du framework MIWAE avec apprentissage supervisé pour observations censurées. Publié sur PyPI avec documentation et exemples reproductibles.",
      body: '',
      tags: ['pytorch', 'inférence-variationnelle', 'données-manquantes', 'apprentissage-profond'],
      links: [{ label: 'PyPI', url: 'https://pypi.org/project/notmiwae-pytorch/' }],
      icon: 'VAE'
    },
    {
      id: 'proj-clairvoyance',
      title: 'Clairvoyance : système de vision assistive pour lunettes connectées',
      role: 'Développeur principal',
      summary:
        "Pipeline de vision assistive pour lunettes connectées combinant estimation de profondeur, détection + classification d’objets et OCR pour une compréhension de scène en temps réel. Met en place un workflow agentique en deux étapes : un modèle de langage entraîné sur mesure pour gérer des scénarios planifiés/connus, avec un agent basé sur un LLM en repli pour répondre à des requêtes utilisateur non prévues. Inclut une pile matérielle embarquée (caméra + Raspberry Pi) et une chaîne d’inférence optimisée pour l’edge.",
      body: '',
      tags: ['vision-par-ordinateur', 'edge-ai', 'accessibilité', 'systèmes-embarqués'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/PIE-Clairvoyance' }],
      thumbnail: '/images/clairvoyance.png'
    },
    {
      id: 'proj-sagalang',
      title: 'SAGALang : langage interprété avec complétion de code neuronale',
      role: 'Créateur',
      summary:
        "Langage de programmation personnalisé avec analyseur lexical, syntaxique et interpréteur. Intègre une complétion de code basée sur des transformers pour des suggestions intelligentes. Implémente une inférence de types et une gestion des erreurs d’exécution.",
      body: '',
      tags: ['compilateurs', 'langages-de-programmation', 'traitement-langage-naturel', 'transformers'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/SagaLang' }],
      thumbnail: '/images/saga.png'
    }
  ]
};

export const awards: Record<string, ContentEntry[]> = {
  en: [
    { id: 'aw-sae', title: 'Finalist, best research project award', org: 'SAE, ENSTA Paris', date: '2025-11', summary: 'Selected among finalists for morphodynamic analysis of hematopoietic stem cell emergence using geometric methods.', body: '', thumbnail: '/images/ensta.png' },
    { id: 'aw-automathon', title: 'First place, Automathon hackathon', org: 'CentraleSupélec', date: '2025-10', summary: 'Sound event detection using convolutional architectures.', body: '', thumbnail: '/images/automathon.png' },
    { id: 'aw-globalai', title: 'Creativity award, Global AI hackathon', org: 'MIT Sloan', date: '2025-05', summary: 'Ranked 13th globally among 800 participants.', body: '', thumbnail: '/images/mit_hackathon.jpg' },
    { id: 'aw-merit', title: 'Moroccan excellence scholarship', org: 'Ministry of Higher Education', date: '2023-09', summary: 'Merit-based scholarship for academic performance in preparatory classes (CPGE).', body: '', thumbnail: '/images/ministere_edu.png' },
  ],
  fr: [
    { id: 'aw-sae', title: 'Finaliste, prix du meilleur projet de recherche', org: 'SAE, ENSTA Paris', date: '2025-11', summary: 'Sélectionné parmi les finalistes pour analyse morphodynamique de l\'émergence de cellules souches hématopoïétiques par méthodes géométriques.', body: '', thumbnail: '/images/ensta.png' },
    { id: 'aw-automathon', title: 'Premier prix, hackathon Automathon', org: 'CentraleSupélec', date: '2025-10', summary: 'Détection d\'événements sonores par architectures convolutionnelles.', body: '', thumbnail: '/images/automathon.png' },
    { id: 'aw-globalai', title: 'Prix de la créativité, hackathon Global AI', org: 'MIT Sloan', date: '2025-05', summary: 'Classé 13ème mondial parmi 800 participants.', body: '', thumbnail: '/images/mit_hackathon.jpg' },
    { id: 'aw-merit', title: 'Bourse de mérite de l\'enseignement supérieur', org: 'Ministère de l\'Enseignement Supérieur', date: '2023-09', summary: 'Bourse au mérite pour performance académique en classes préparatoires (CPGE).', body: '', thumbnail: '/images/ministere_edu.png' },
  ]
};

export const updates: Record<string, ContentEntry[]> = { 
  en: [
    { 
      id: 'up-epfl', 
      title: 'Joining EPFL', 
      date: '2026-01', 
      summary: 'Accepted for a research internship at the AIMM Lab starting April 2026.', 
      body: '' 
    },
    { 
      id: 'up-poster', 
      title: 'Poster Presentation at ENS Paris-Saclay', 
      date: '2024-12', 
      summary: 'Presented "not-MIWAE and a Supervised MNAR Extension" at the ENS Paris-Saclay Atrium.', 
      body: '' 
    },
    { 
      id: 'up-pasteur', 
      title: 'Institut Pasteur Collaboration', 
      date: '2025-09', 
      summary: 'Completed a 3-month on-site research internship at Institut Pasteur and continued as a research collaborator toward a joint publication on geometry-aware membrane shape analysis.', 
      body: '' 
    }
  ],
  fr: [
    { 
      id: 'up-epfl', 
      title: 'Arrivée à l\'EPFL', 
      date: '2026-01', 
      summary: 'Accepté pour un stage de recherche au AIMM Lab à partir d’avril 2026.', 
      body: '' 
    },
    { 
      id: 'up-poster', 
      title: 'Présentation de poster à l\'ENS Paris-Saclay', 
      date: '2024-12', 
      summary: 'Présentation des travaux « not-MIWAE and a Supervised MNAR Extension » à l’Atrium de l’ENS Paris-Saclay.', 
      body: '' 
    },
    { 
      id: 'up-pasteur', 
      title: 'Collaboration avec l\'Institut Pasteur', 
      date: '2025-09', 
      summary: 'Suite à un stage de recherche de trois mois en présentiel à l’Institut Pasteur, poursuite du travail en collaboration scientifique en vue d’une publication sur l’analyse géométrique de la morphologie membranaire.', 
      body: '' 
    }
  ]
};

export const talks: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'talk-notmiwae-poster',
      title: 'not-MIWAE and a supervised MNAR extension',
      org: 'ENS Paris-Saclay, Atrium',
      location: 'Gif-sur-Yvette, France',
      date: '2024-12-18',
      summary: 'Poster presentation on variational methods for missing-not-at-random data imputation.',
      body: '',
      links: [{ label: 'poster', url: '/papers/poster-notmiwae.pdf' }],
      thumbnail: '/images/ens.jpg'
    }
  ],
  fr: [
    {
      id: 'talk-notmiwae-poster',
      title: 'not-MIWAE et extension MNAR supervisée',
      org: 'ENS Paris-Saclay, Atrium',
      location: 'Gif-sur-Yvette, France',
      date: '2024-12-18',
      summary: 'Présentation poster sur méthodes variationnelles pour imputation de données manquantes non aléatoires.',
      body: '',
      links: [{ label: 'poster', url: '/papers/poster-notmiwae.pdf' }],
      thumbnail: '/images/ens.jpg'
    }
  ]
};

export const education: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'edu-mva',
      title: 'Master in Mathematics, Vision, and Learning (MVA)',
      org: 'ENS Paris-Saclay',
      location: 'Gif-sur-Yvette, France',
      date: '2025-09',
      endDate: '2026-09',
      summary: 'Selective graduate program in mathematics, computer vision, and machine learning at ENS Paris-Saclay (Université Paris-Saclay), widely regarded as the leading AI research master\'s program in France. The curriculum emphasizes statistical learning theory, probabilistic modeling, geometric deep learning, and computer vision, with strong preparation for doctoral research.',
      body: '',
      thumbnail: '/images/mva.png',
      tags: ['applied-mathematics', 'geometric-deep-learning', 'deep-learning', 'foundation-models', 'medical-imaging'],
      coursework: ['probabilistic graphical models & deep generative models', 'geometric data analysis', 'geometry processing & geometric deep learning', 'representation learning', 'deep learning for medical imaging', 'graphs in machine learning', 'stochastic processes and rare events simulation', 'multimodal explainable AI']
    },
    {
      id: 'edu-ensta',
      title: 'MSc in Engineering (Institut Polytechnique de Paris)',
      org: 'ENSTA Paris',
      location: 'Palaiseau, France',
      date: '2023-09',
      endDate: '2026-09',
      summary: 'Engineering curriculum at ENSTA Paris (Institut Polytechnique de Paris) with major in computer science and specialization in artificial intelligence.',
      body: '',
      thumbnail: '/images/ensta.png',
      tags: ['computer-science', 'machine-learning', 'reinforcement-learning', 'language-models'],
      ranking: '4.05/4.3 GPA, top 5% in 80 students',
      coursework: ['machine learning', 'statistical learning', 'deep learning', 'computer vision', 'language modeling', 'reinforcement learning']
    },
    {
      id: 'edu-cpge',
      title: 'Preparatory classes (MPSI/MP*)',
      org: 'CPGE Moulay Youssef',
      location: 'Casablanca, Morocco',
      date: '2021-09',
      endDate: '2023-06',
      summary: 'Two-year intensive preparation for French engineering school entrance exams, establishing strong mathematical and scientific foundations.',
      body: '',
      thumbnail: '/images/cpge.jpg',
      tags: ['mathematics', 'physics', 'engineering-preparation'],
      ranking: 'Top 5% nationally',
      coursework: ['linear algebra', 'calculus', 'physics', 'chemistry']
    }
  ],
  fr: [
    {
      id: 'edu-mva',
      title: 'Master Mathématiques, Vision et Apprentissage (MVA)',
      org: 'ENS Paris-Saclay',
      location: 'Gif-sur-Yvette, France',
      date: '2025-09',
      endDate: '2026-09',
      summary: 'Programme d\'études supérieures sélectif en mathématiques, vision par ordinateur et apprentissage automatique à ENS Paris-Saclay (Université Paris-Saclay), largement reconnu comme le programme master en IA de recherche leader en France. Le cursus met l\'accent sur la théorie de l\'apprentissage statistique, la modélisation probabiliste, l\'apprentissage géométrique profond et la vision par ordinateur, avec une forte préparation à la recherche doctorale.',
      body: '',
      thumbnail: '/images/mva.png',
      tags: ['apprentissage-géométrique-profond', 'vision-par-ordinateur', 'apprentissage-automatique'],
      coursework: ['modèles graphiques probabilistes & modèles génératifs profonds', 'analyse géométrique des données', 'traitement géométrique & apprentissage géométrique profond', 'apprentissage de représentations', 'apprentissage profond pour imagerie médicale', 'graphes en apprentissage automatique', 'simulation de processus stochastiques et événements rares', 'IA multimodale explicable']
    },
    {
      id: 'edu-ensta',
      title: 'Master d\'Ingénierie (Institut Polytechnique de Paris)',
      org: 'ENSTA Paris',
      location: 'Palaiseau, France',
      date: '2023-09',
      endDate: '2026-09',
      summary: 'Cursus d\'ingénierie à ENSTA Paris (Institut Polytechnique de Paris) avec majeure en informatique et spécialisation en intelligence artificielle.',
      body: '',
      thumbnail: '/images/ensta.png',
      tags: ['mathématiques-appliquées', 'apprentissage-profond', 'optimisation'],
      ranking: '4.05/4.3 GPA, top 5% des 80 étudiants',
      coursework: ['apprentissage automatique', 'apprentissage statistique', 'reconnaissance d\'images par apprentissage profond', 'apprentissage profond', 'modélisation du langage', 'apprentissage par renforcement']
    },
    {
      id: 'edu-cpge',
      title: 'Classes préparatoires (MPSI/MP*)',
      org: 'CPGE Moulay Youssef',
      location: 'Casablanca, Maroc',
      date: '2021-09',
      endDate: '2023-06',
      summary: 'Préparation intensive de deux ans pour les concours d\'entrée aux écoles d\'ingénierie françaises, établissant des bases mathématiques et scientifiques solides.',
      body: '',
      thumbnail: '/images/cpge.jpg',
      tags: ['mathématiques', 'physique', 'préparation-ingénierie'],
      ranking: 'Top 5% au niveau national',
      coursework: ['algèbre linéaire', 'calcul', 'physique', 'chimie']
    }
  ]
};
