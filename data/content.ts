
import { ContentEntry } from '../types';

export const researchExperience: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'exp-epfl',
      title: 'Research Intern',
      org: 'EPFL, Artificial Intelligence in Molecular Medicine (AIMM) Lab',
      location: 'Lausanne, Switzerland',
      date: '2026-04',
      endDate: '2026-09',
      teaser: 'Latent-space perturbation modeling for spatial proteomics and treatment-response simulation.',
      summary:
        'Solved treatment-response simulation as a latent-space perturbation modeling problem through structured dynamics over spatial proteomics representations, aiming to improve generalization across biological contexts.',
      body: '',
      thumbnail: '/images/EPFL.png',
      tags: ['deep-learning', 'spatial-proteomics', 'foundation-models', 'tissue-simulation']
    },
    {
      id: 'exp-pasteur',
      title: 'Research intern & collaborator',
      org: 'Institut Pasteur, Biomedical Image Analysis Unit',
      location: 'Paris, France',
      date: '2025-06',
      endDate: '2025-12',
      teaser: 'Geometry-aware shape matching for morphodynamic analysis of biological membranes.',
      summary:
        'Solved biological membrane shape comparison through geometry-aware matching with mechanical priors, achieving a more interpretable framework for morphodynamic analysis.',
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
      teaser: 'Structured survey of text- and image-conditioned 3D reconstruction methods.',
      summary:
        'Solved the fragmentation of 3D generation literature through a structured survey of text- and image-conditioned reconstruction methods, clarifying the shift from geometric inductive bias toward 2D generative priors.',
      body: '',
      thumbnail: '/images/naist.png',
      tags: ['geometric-deep-learning', '3d-generation', 'virtual-reality', 'neural-implicit-representations'],
      links: [{ label: 'survey', url: '/papers/naist_survey.pdf' }]
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
      teaser: 'Modélisation des perturbations en espace latent pour la protéomique spatiale et la simulation de réponses aux traitements.',
      summary:
        'Reformulé la simulation de réponses aux traitements comme un problème de modélisation des perturbations en espace latent à travers des dynamiques structurées sur des représentations de protéomique spatiale, avec l’objectif d’améliorer la généralisation à différents contextes biologiques.',
      body: '',
      thumbnail: '/images/EPFL.png',
      tags: ['deep-learning', 'protéomique-spatiale', 'modèles-de-fondation', 'simulation-tissulaire']
    },
    {
      id: 'exp-pasteur',
      title: 'Stagiaire de recherche & collaborateur',
      org: "Institut Pasteur, Unité d’analyse d’images biomédicales",
      location: 'Paris, France',
      date: '2025-06',
      endDate: '2025-12',
      teaser: 'Recalage de formes géométrique pour l’analyse morphodynamique de membranes biologiques.',
      summary:
        "Abordé la comparaison de membranes biologiques par un recalage de formes intégrant des contraintes géométriques et mécaniques, afin d’obtenir un cadre plus interprétable pour l’analyse morphodynamique.",
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
      teaser: 'Revue structurée des méthodes de reconstruction 3D conditionnées par texte et image.',
      summary:
        'Structuré une littérature fragmentée sur la génération 3D à travers une revue des méthodes de reconstruction conditionnées par texte et image, en clarifiant le passage des biais inductifs géométriques aux priors génératifs 2D.',
      body: '',
      thumbnail: '/images/naist.png',
      tags: ['apprentissage-géométrique-profond', 'génération-3d', 'réalité-virtuelle', 'représentations-neurales-implicites'],
      links: [{ label: 'survey', url: '/papers/naist_survey.pdf' }]
    }
  ]
};


export const projects: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'proj-shapematch',
      title: 'Geometry-aware shape matching software for biological microscopy',
      role: 'Research collaborator',
      summary:
        'Research software developed in collaboration with biologists at Institut Pasteur for constrained shape matching on biological surface meshes. The project started from a concrete scientific need: comparing membrane geometries across time while going beyond purely geometric registration by incorporating optional mechanical priors such as curvature-based membrane models. I designed and implemented the full software stack, from mesh processing and optimization routines to the user-facing abstractions, under biological guidance from collaborators and mathematical supervision on the modeling side.\n\nThe library is built in a PyTorch-like style so that users can define their own constrained shape-matching problems on custom meshes, plug in different constraints or optimization schemes, and visualize the resulting alignments. In addition to the core library, I also developed a GUI-oriented version to make the framework accessible to researchers without a strong background in computational geometry. The goal was not just to run one research experiment, but to turn the methodology into reusable research software for both scientific users and more technical collaborators.',
      body: '',
      tags: ['geometric-deep-learning', 'shape-matching', 'computational-biology', 'differential-geometry', 'biological-imaging'],
      thumbnail: '/images/pasteur.jpg'
    },
    {
      id: 'proj-notmiwae',
      title: 'not-MIWAE: PyTorch implementation for MNAR imputation',
      role: 'Author and maintainer',
      summary:
        'PyTorch implementation of MIWAE, not-MIWAE, supMIWAE, and supervised MNAR extensions in a unified missing-data modeling framework.',
      body: '',
      tags: ['pytorch', 'variational-inference', 'missing-data', 'deep-learning', 'open-source'],
      links: [{ label: 'PyPI', url: 'https://pypi.org/project/notmiwae-pytorch/' }],
      icon: 'VAE'
    },
    {
      id: 'proj-bida',
      title: 'BiDA MRI super-resolution',
      role: 'Author',
      summary:
        "Lightweight reproduction of the core BiDA idea for rodent brain MRI super-resolution under limited compute. The objective was not to fully replicate the original paper's large-scale setup, but to test whether the central mechanism \u2014 two slice-wise diffusion priors combined with DDNM-based inference and biplanar averaging \u2014 could already produce meaningful results in a constrained environment. I trained the model on CAMRI rat data and evaluated it on a true out-of-domain mouse dataset, treating the project as both a proof of concept and a controlled sanity check of the method.\n\nCompared with the original paper, I made a series of pragmatic simplifications in data scale, architecture size, training budget, and sampling strategy so the method could run on a single consumer GPU. Despite those constraints, the system achieved a +2.6 dB PSNR improvement over cubic interpolation, showing that the reconstruction mechanism remained effective even in a reduced setting. Beyond the quantitative result, the project was valuable as an exercise in careful reproduction: deciding what must stay faithful to the paper, what can be simplified, and how to evaluate the method honestly when full replication is out of reach.",
      body: '',
      tags: ['medical-imaging', 'diffusion-models', 'mri', 'super-resolution', 'reproducibility']
    },
    {
      id: 'proj-pointllm',
      title: 'PointLLM contrastive alignment',
      role: 'Author',
      summary:
        'Investigation of contrastive versus generative objectives for aligning point-cloud and language representations in a PointLLM-style architecture. The project was framed as a lightweight reproduction and ablation study: rather than proposing a new model, I wanted to understand which objective produced more coherent multimodal embeddings when learning from 3D shape-text pairs derived from Objaverse samples converted to point clouds.\n\nThe analysis focused primarily on embedding-space behavior rather than downstream end tasks. In practice, contrastive training produced better cosine similarity and visibly tighter alignment in t-SNE visualizations than the generative alternative, suggesting that explicit alignment objectives may be better suited for this type of multimodal representation learning. The project was a useful introduction to the intersection of geometric deep learning and language-conditioned 3D representation learning, and helped me think more critically about objective design rather than only model architecture.',
      body: '',
      tags: ['geometric-deep-learning', 'multimodal-learning', 'point-clouds', 'language-models', 'representation-learning']
    },
    {
      id: 'proj-nuclei',
      title: 'Self-supervised nuclei segmentation',
      role: 'Author',
      summary:
        'Personal experiment on self-supervised representation learning for biological image segmentation using the PanNuke dataset. The idea was simple: first learn useful visual representations without labels through BYOL-style pretraining, then transfer those representations to a U-Net segmentation model and compare the result with a purely supervised baseline. The project was primarily a reproduction-oriented study rather than a search for novel biological findings, but it gave me a concrete way to test how self-supervision behaves in a microscopy setting.\n\nThe main comparison was against a standard supervised U-Net pipeline, with evaluation centered on Dice, IoU, and training stability. Even in this relatively simple setup, the project was informative because it highlighted the practical appeal of SSL in domains where annotation is expensive and domain-specific structure matters. It also reinforced a broader lesson that comes up often in biomedical imaging: representation quality can matter just as much as downstream architecture choice.',
      body: '',
      tags: ['self-supervised-learning', 'biomedical-imaging', 'segmentation', 'computer-vision', 'representation-learning']
    },
    {
      id: 'proj-clairvoyance',
      title: 'Clairvoyance: assistive vision system for smart glasses',
      role: 'Lead developer',
      summary:
        'Assistive computer vision system for wearable smart glasses designed to help visually impaired users interpret indoor environments. I led the computer vision and agentic pipeline design, working on depth estimation, the deterministic "Plan A" reasoning path, and the overall system logic for handling both expected and unexpected scenarios. The platform combines object detection, OCR, and coarse depth cues with a dual decision framework: planned situations are handled locally through structured rules and lightweight language components, while unfamiliar requests are delegated to a fallback LLM-based agent.\n\nThe system runs on a Raspberry Pi 4 with a wide-angle camera and bone-conduction audio output, and was designed as a modular, low-cost, privacy-aware prototype. A key contribution was the architecture itself: a hybrid design that preserves efficient deterministic behavior for common interactions while still allowing flexible reasoning when needed. In practice, the prototype achieved real-time operation with latency as the main limitation, and showed how agentic design can be made more useful when grounded in a structured perception pipeline rather than relying entirely on end-to-end language reasoning.',
      body: '',
      tags: ['computer-vision', 'edge-ai', 'accessibility', 'embedded-systems', 'agentic-systems'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/PIE-Clairvoyance' }],
      thumbnail: '/images/clairvoyance.png'
    },
    {
      id: 'proj-sagalang',
      title: 'SAGALang: interpreted language with neural code completion',
      role: 'Programming-language / systems project',
      summary:
        'Small interpreted language project covering a lexer, parser, AST execution, runtime handling, and exploratory neural code-completion tooling.',
      body: '',
      tags: ['programming-languages', 'interpreters', 'compilers', 'language-models', 'systems'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/SagaLang' }],
      thumbnail: '/images/saga.png'
    }
  ],
  fr: [
    {
      id: 'proj-shapematch',
      title: 'Logiciel de mise en correspondance de formes sensible \u00e0 la g\u00e9om\u00e9trie pour microscopie biologique',
      role: 'Collaborateur de recherche',
      summary:
        "Logiciel de recherche d\u00e9velopp\u00e9 en collaboration avec des biologistes de l'Institut Pasteur pour la mise en correspondance sous contraintes de maillages de surfaces biologiques. Le projet est parti d'un besoin scientifique concret : comparer des g\u00e9om\u00e9tries membranaires au cours du temps en allant au-del\u00e0 du recalage purement g\u00e9om\u00e9trique, en int\u00e9grant des priors m\u00e9caniques optionnels tels que des mod\u00e8les de membrane bas\u00e9s sur la courbure. J'ai con\u00e7u et impl\u00e9ment\u00e9 l'ensemble de la pile logicielle, du traitement de maillages et des routines d'optimisation aux abstractions utilisateur, sous guidance biologique des collaborateurs et supervision math\u00e9matique sur la partie mod\u00e9lisation.\n\nLa biblioth\u00e8que est construite dans un style similaire \u00e0 PyTorch, permettant aux utilisateurs de d\u00e9finir leurs propres probl\u00e8mes de mise en correspondance sous contraintes sur des maillages personnalis\u00e9s, de brancher diff\u00e9rentes contraintes ou sch\u00e9mas d'optimisation, et de visualiser les alignements obtenus. En plus de la biblioth\u00e8que centrale, j'ai \u00e9galement d\u00e9velopp\u00e9 une version orient\u00e9e interface graphique pour rendre le cadre accessible aux chercheurs sans solide formation en g\u00e9om\u00e9trie computationnelle. L'objectif n'\u00e9tait pas seulement de mener une exp\u00e9rience de recherche, mais de transformer la m\u00e9thodologie en logiciel de recherche r\u00e9utilisable pour les utilisateurs scientifiques comme pour les collaborateurs plus techniques.",
      body: '',
      tags: ['apprentissage-g\u00e9om\u00e9trique-profond', 'alignement-de-formes', 'biologie-computationnelle', 'g\u00e9om\u00e9trie-diff\u00e9rentielle', 'imagerie-biologique'],
      thumbnail: '/images/pasteur.jpg'
    },
    {
      id: 'proj-notmiwae',
      title: 'not-MIWAE : impl\u00e9mentation PyTorch pour imputation MNAR',
      role: 'Auteur et mainteneur',
      summary:
        'Implémentation PyTorch de MIWAE, not-MIWAE, supMIWAE et d’extensions supervisées MNAR dans un cadre unifié de modélisation de données manquantes.',
      body: '',
      tags: ['pytorch', 'inf\u00e9rence-variationnelle', 'donn\u00e9es-manquantes', 'apprentissage-profond', 'open-source'],
      links: [{ label: 'PyPI', url: 'https://pypi.org/project/notmiwae-pytorch/' }],
      icon: 'VAE'
    },
    {
      id: 'proj-bida',
      title: "BiDA : super-r\u00e9solution d'IRM c\u00e9r\u00e9bral de rongeurs",
      role: 'Auteur',
      summary:
        "Reproduction l\u00e9g\u00e8re de l'id\u00e9e centrale de BiDA pour la super-r\u00e9solution d'IRM de cerveau de rongeur sous contraintes de calcul. L'objectif n'\u00e9tait pas de reproduire int\u00e9gralement l'environnement \u00e0 grande \u00e9chelle de l'article original, mais de tester si le m\u00e9canisme central \u2014 deux priors de diffusion en tranches combin\u00e9s \u00e0 une inf\u00e9rence bas\u00e9e sur DDNM et une moyenne biplanaire \u2014 pouvait d\u00e9j\u00e0 produire des r\u00e9sultats significatifs dans un environnement contraint. J'ai entra\u00een\u00e9 le mod\u00e8le sur des donn\u00e9es de rats CAMRI et \u00e9valu\u00e9 sur un jeu de donn\u00e9es de souris r\u00e9ellement hors domaine, traitant le projet \u00e0 la fois comme une preuve de concept et une v\u00e9rification contr\u00f4l\u00e9e de la m\u00e9thode.\n\nPar rapport \u00e0 l'article original, j'ai effectu\u00e9 une s\u00e9rie de simplifications pragmatiques sur l'\u00e9chelle des donn\u00e9es, la taille de l'architecture, le budget d'entra\u00eenement et la strat\u00e9gie d'\u00e9chantillonnage pour que la m\u00e9thode puisse fonctionner sur un seul GPU grand public. Malgr\u00e9 ces contraintes, le syst\u00e8me a atteint une am\u00e9lioration de +2,6 dB en PSNR par rapport \u00e0 l'interpolation cubique, montrant que le m\u00e9canisme de reconstruction restait efficace m\u00eame dans un contexte r\u00e9duit. Au-del\u00e0 du r\u00e9sultat quantitatif, le projet \u00e9tait pr\u00e9cieux comme exercice de reproduction rigoureuse : d\u00e9cider ce qui doit rester fid\u00e8le \u00e0 l'article, ce qui peut \u00eatre simplifi\u00e9, et comment \u00e9valuer honn\u00eatement la m\u00e9thode quand la r\u00e9plication compl\u00e8te est hors de port\u00e9e.",
      body: '',
      tags: ['imagerie-m\u00e9dicale', 'mod\u00e8les-de-diffusion', 'irm', 'super-r\u00e9solution', 'reproductibilit\u00e9']
    },
    {
      id: 'proj-pointllm',
      title: 'PointLLM : alignement contrastif de nuages de points',
      role: 'Auteur',
      summary:
        "Investigation des objectifs contrastifs versus g\u00e9n\u00e9ratifs pour l'alignement de repr\u00e9sentations de nuages de points et de langage dans une architecture de style PointLLM. Le projet a \u00e9t\u00e9 cadr\u00e9 comme une reproduction l\u00e9g\u00e8re et une \u00e9tude d'ablation : plut\u00f4t que de proposer un nouveau mod\u00e8le, je voulais comprendre quel objectif produisait des embeddings multimodaux plus coh\u00e9rents lors de l'apprentissage sur des paires forme 3D\u2013texte d\u00e9riv\u00e9es d'\u00e9chantillons Objaverse convertis en nuages de points.\n\nL'analyse s'est concentr\u00e9e principalement sur le comportement dans l'espace des embeddings plut\u00f4t que sur les t\u00e2ches aval. En pratique, l'entra\u00eenement contrastif a produit une meilleure similarit\u00e9 cosinus et un alignement visiblement plus serr\u00e9 dans les visualisations t-SNE que l'alternative g\u00e9n\u00e9rative, sugg\u00e9rant que les objectifs d'alignement explicites pourraient \u00eatre mieux adapt\u00e9s \u00e0 ce type d'apprentissage de repr\u00e9sentations multimodales. Le projet a \u00e9t\u00e9 une introduction utile \u00e0 l'intersection de l'apprentissage g\u00e9om\u00e9trique profond et de l'apprentissage de repr\u00e9sentations 3D conditionn\u00e9 par le langage, et m'a aid\u00e9 \u00e0 r\u00e9fl\u00e9chir plus critiquement \u00e0 la conception des objectifs plut\u00f4t qu'uniquement \u00e0 l'architecture des mod\u00e8les.",
      body: '',
      tags: ['apprentissage-g\u00e9om\u00e9trique-profond', 'apprentissage-multimodal', 'nuages-de-points', 'mod\u00e8les-de-langage', 'apprentissage-de-repr\u00e9sentations']
    },
    {
      id: 'proj-nuclei',
      title: 'Segmentation auto-supervis\u00e9e de noyaux cellulaires',
      role: 'Auteur',
      summary:
        "Exp\u00e9rience personnelle sur l'apprentissage de repr\u00e9sentations auto-supervis\u00e9 pour la segmentation d'images biologiques en utilisant le jeu de donn\u00e9es PanNuke. L'id\u00e9e \u00e9tait simple : apprendre d'abord des repr\u00e9sentations visuelles utiles sans \u00e9tiquettes par un pr\u00e9-entra\u00eenement de style BYOL, puis transf\u00e9rer ces repr\u00e9sentations vers un mod\u00e8le de segmentation U-Net et comparer le r\u00e9sultat avec une r\u00e9f\u00e9rence purement supervis\u00e9e. Le projet \u00e9tait avant tout une \u00e9tude orient\u00e9e reproduction plut\u00f4t qu'une recherche de nouvelles d\u00e9couvertes biologiques, mais il m'a donn\u00e9 un moyen concret de tester le comportement de l'auto-supervision dans un contexte de microscopie.\n\nLa comparaison principale \u00e9tait avec un pipeline U-Net supervis\u00e9 standard, avec une \u00e9valuation centr\u00e9e sur Dice, IoU et la stabilit\u00e9 de l'entra\u00eenement. M\u00eame dans ce cadre relativement simple, le projet \u00e9tait instructif car il a mis en \u00e9vidence l'attrait pratique de l'SSL dans des domaines o\u00f9 l'annotation est co\u00fbteuse et o\u00f9 la structure sp\u00e9cifique au domaine est importante. Il a \u00e9galement renforc\u00e9 une le\u00e7on plus g\u00e9n\u00e9rale qui revient souvent en imagerie biom\u00e9dicale : la qualit\u00e9 des repr\u00e9sentations peut \u00eatre aussi importante que le choix de l'architecture aval.",
      body: '',
      tags: ['apprentissage-auto-supervis\u00e9', 'imagerie-biom\u00e9dicale', 'segmentation', 'vision-par-ordinateur', 'apprentissage-de-repr\u00e9sentations']
    },
    {
      id: 'proj-clairvoyance',
      title: 'Clairvoyance : syst\u00e8me de vision assistive pour lunettes connect\u00e9es',
      role: 'D\u00e9veloppeur principal',
      summary:
        "Syst\u00e8me de vision assistive pour lunettes connect\u00e9es con\u00e7u pour aider les utilisateurs malvoyants \u00e0 interpr\u00e9ter les environnements int\u00e9rieurs. J'ai dirig\u00e9 la conception du pipeline de vision par ordinateur et agentique, travaillant sur l'estimation de profondeur, le chemin de raisonnement d\u00e9terministe \u00ab Plan A \u00bb, et la logique syst\u00e8me globale pour g\u00e9rer les sc\u00e9narios attendus et inattendus. La plateforme combine d\u00e9tection d'objets, OCR et indices de profondeur grossiers avec un cadre de d\u00e9cision dual : les situations planifi\u00e9es sont trait\u00e9es localement via des r\u00e8gles structur\u00e9es et des composants de langage l\u00e9gers, tandis que les requ\u00eates inconnues sont d\u00e9l\u00e9gu\u00e9es \u00e0 un agent de repli bas\u00e9 sur un LLM.\n\nLe syst\u00e8me fonctionne sur un Raspberry Pi 4 avec une cam\u00e9ra grand-angle et une sortie audio \u00e0 conduction osseuse, con\u00e7u comme un prototype modulaire, \u00e0 faible co\u00fbt et respectueux de la vie priv\u00e9e. Une contribution cl\u00e9 \u00e9tait l'architecture elle-m\u00eame : une conception hybride qui pr\u00e9serve un comportement d\u00e9terministe efficace pour les interactions communes tout en permettant un raisonnement flexible si n\u00e9cessaire. En pratique, le prototype a atteint un fonctionnement en temps r\u00e9el avec la latence comme principale limitation, et a montr\u00e9 comment la conception agentique peut \u00eatre rendue plus utile lorsqu'elle est ancr\u00e9e dans un pipeline de perception structur\u00e9 plut\u00f4t que de s'appuyer enti\u00e8rement sur un raisonnement de bout en bout en langage.",
      body: '',
      tags: ['vision-par-ordinateur', 'edge-ai', 'accessibilit\u00e9', 'syst\u00e8mes-embarqu\u00e9s', 'syst\u00e8mes-agentiques'],
      links: [{ label: 'code', url: 'https://github.com/amine-maazizi/PIE-Clairvoyance' }],
      thumbnail: '/images/clairvoyance.png'
    },
    {
      id: 'proj-sagalang',
      title: 'SAGALang : langage interpr\u00e9t\u00e9 avec compl\u00e9tion de code neuronale',
      role: 'Projet langages de programmation / systèmes',
      summary:
        'Petit projet de langage interprété couvrant lexer, parser, exécution d’AST, gestion du runtime et premières explorations d’outils de complétion de code neuronale.',
      body: '',
      tags: ['langages-de-programmation', 'interpr\u00e9teurs', 'compilateurs', 'mod\u00e8les-de-langage', 'syst\u00e8mes'],
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

export const education: Record<string, ContentEntry[]> = {
  en: [
    {
      id: 'edu-mva',
      title: 'Master in Mathematics, Vision, and Learning (MVA)',
      org: 'ENS Paris-Saclay',
      location: 'Gif-sur-Yvette, France',
      date: '2025-09',
      endDate: '2026-09',
      teaser: 'Selective graduate program in mathematics, computer vision, and machine learning.',
      summary: 'Graduate coursework in probabilistic modeling, representation learning, geometric methods, and machine learning.',
      body: 'Relevant coursework includes probabilistic graphical models, geometric data analysis, representation learning, medical imaging, graph machine learning, stochastic processes, and multimodal explainable AI.',
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
      teaser: 'Engineering curriculum with a computer science major and AI specialization.',
      summary: 'Engineering curriculum at ENSTA Paris with a computer science major and artificial intelligence specialization.',
      body: '4.05/4.3 GPA, top 5% in 80 students. Relevant coursework includes machine learning, statistical learning, deep learning, computer vision, language modeling, and reinforcement learning.',
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
      teaser: 'Two-year intensive preparation for French engineering school entrance exams.',
      summary: 'Intensive preparation in mathematics, physics, and engineering fundamentals.',
      body: 'Top 5% nationally. Coursework included linear algebra, calculus, physics, and chemistry.',
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
      teaser: 'Programme sélectif en mathématiques, vision par ordinateur et apprentissage automatique.',
      summary: 'Cursus de master en modélisation probabiliste, apprentissage de représentations, méthodes géométriques et apprentissage automatique.',
      body: 'Enseignements pertinents : modèles graphiques probabilistes, analyse géométrique des données, apprentissage de représentations, imagerie médicale, graphes en apprentissage automatique, processus stochastiques et IA multimodale explicable.',
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
      teaser: 'Cursus d’ingénierie avec majeure en informatique et spécialisation en IA.',
      summary: 'Cursus d’ingénierie à ENSTA Paris avec majeure en informatique et spécialisation en intelligence artificielle.',
      body: '4.05/4.3 GPA, top 5% des 80 étudiants. Enseignements pertinents : apprentissage automatique, apprentissage statistique, apprentissage profond, vision par ordinateur, modélisation du langage et apprentissage par renforcement.',
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
      teaser: 'Préparation intensive de deux ans aux concours des écoles d’ingénieurs françaises.',
      summary: 'Formation intensive en mathématiques, physique et fondamentaux scientifiques.',
      body: 'Top 5% au niveau national. Enseignements : algèbre linéaire, analyse, physique et chimie.',
      thumbnail: '/images/cpge.jpg',
      tags: ['mathématiques', 'physique', 'préparation-ingénierie'],
      ranking: 'Top 5% au niveau national',
      coursework: ['algèbre linéaire', 'calcul', 'physique', 'chimie']
    }
  ]
};
