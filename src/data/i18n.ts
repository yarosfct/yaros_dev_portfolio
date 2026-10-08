export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type NavItem = { id: string; label: string };
type SectionHeading = { eyebrow?: string; title: string; description: string; align?: "start" | "center" };

type Project = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  impact?: string;
  role?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  gallery?: string[];
  github?: string;
  demo?: string;
  note?: string;
};

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  link?: { href: string; label: string };
};

type TechGroup = {
  title: string;
  items: string[];
};

type Contact = {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  cv?: { href: string; label: string };
};

type Achievement = {
  title: string;
  detail: string;
  image?: string;
  imageAlt?: string;
};

type Language = {
  name: string;
  level: string;
};

type Strength = {
  title: string;
  detail: string;
};

export type PortfolioDictionary = {
  ui: {
    languageLabel: string;
    themeLabel: string;
    availability: string;
    projectContributionLabel: string;
    demoLabel: string;
      navGitHub: string;
      sectionsLabel: string;
      openMenu: string;
    closeMenu: string;
    screenshotsLabel: string;
    expandLabel: string;
    fitScreen: string;
    fitWidth: string;
    zoomIn: string;
    zoomOut: string;
    previousImage: string;
    nextImage: string;
    closeViewer: string;
    enlargedAlt: string;
    publicProjectsTitle: string;
    moreProjectsTitle: string;
    clientWorkTitle: string;
  };
  nav: NavItem[];
  hero: {
    name: string;
    title: string;
    pitch: string;
    ctas: {
      projects: string;
      contact: string;
      experience: string;
      github: string;
    };
    highlights: Array<{ value: string; label: string }>;
  };
  sectionHeadings: Record<"projects" | "stack" | "about" | "experience" | "achievements" | "contact", SectionHeading>;
  projects: Project[];
  publicProjects: Project[];
  moreProjects: Project[];
  clientProjects: Project[];
  techGroups: TechGroup[];
  about: {
    leadBefore: string;
    leadAfter: string;
    companyName: string;
    companyHref: string;
    paragraphs: string[];
    languagesLabel: string;
    languages: Language[];
    strengthsLabel: string;
    strengths: Strength[];
  };
  experience: TimelineItem[];
  achievements: Achievement[];
  contact: Contact;
  footer: string;
};

const crestPointHref = "https://crestpoint.pt/";
const thesisHref = "https://github.com/yarosfct/software-modeling-challenges";

export const dictionaries: Record<Locale, PortfolioDictionary> = {
  en: {
    ui: {
      languageLabel: "Language",
      themeLabel: "Toggle theme",
      availability: "Open to roles · remote preferred",
      projectContributionLabel: "My part in it",
      demoLabel: "Demo",
      navGitHub: "GitHub",
      sectionsLabel: "Sections",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      screenshotsLabel: "{count} screenshots",
      expandLabel: "Expand",
      fitScreen: "Fit screen",
      fitWidth: "Fit width",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      previousImage: "Previous image",
      nextImage: "Next image",
      closeViewer: "Close image viewer",
      enlargedAlt: "enlarged screenshot",
      publicProjectsTitle: "Public projects",
      moreProjectsTitle: "More projects",
      clientWorkTitle: "Client work"
    },
    nav: [
      { id: "hero", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "achievements", label: "Achievements" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "Finishing Computer Engineering at NOVA FCT, and building CrestPoint Tech",
      pitch:
        "I co-founded CrestPoint Tech with two colleagues. I also build for the web and for mobile, with some machine-learning work: client projects at Fractory, public repositories, and university projects at NOVA FCT.",
      ctas: {
        projects: "View projects",
        contact: "Get in touch",
        experience: "See experience",
        github: "GitHub"
      },
      highlights: [
        { value: "2021–2026", label: "Integrated Master's in Computer Engineering, NOVA FCT" },
        { value: "Apr 2026", label: "Co-founder of CrestPoint Tech" }
      ]
    },
    sectionHeadings: {
      projects: {
        eyebrow: "Selected work",
        title: "Client work, university work, and public repositories",
        description:
          "SafetyScope and Kinesis are Fractory client work, shown as screenshots under NDA. EcoTrecko is a 3rd-year team project. Public GitHub projects, two smaller repositories, and CrestPoint client work are below."
      },
      stack: {
        eyebrow: "Tech stack",
        title: "Tools behind the work on this page",
        description: "What the projects on this page use: web apps, Flutter, and a smaller set for 3D and machine learning."
      },
      about: {
        eyebrow: "About me",
        title: "How I work, and what I care about",
        description: "A short background, the things I keep practicing, and the languages I use."
      },
      experience: {
        title: "My journey",
        description: "My personal and professional path.",
        align: "center"
      },
      achievements: {
        eyebrow: "Achievements",
        title: "Two projects that were recognized",
        description: "A ranking from the bachelor's phase, and an award from a course shared across FCT."
      },
      contact: {
        eyebrow: "Contact",
        title: "Say hello",
        description: "I'm based in Aveiro and open to roles, remote preferred. Email is the most direct way to reach me."
      }
    },
    projects: [
      {
        id: "project-safetyscope",
        title: "SafetyScope",
        summary:
          "Marketing site for a safety product. The screenshots are the public pages: the homepage, an about page, and a contact page.",
        stack: [],
        impact: "Client work from my time at Fractory. Shown as screenshots only, because the project is under NDA.",
        role: "Fractory · client work",
        image: "/images/SafetyMain.png",
        gallery: ["/images/SafetyMain.png", "/images/SafetyAbout.png", "/images/SafetyContact.png"],
        note: "SafetyScope's company has since closed, so the product dashboards are not available to show. There is no public demo or code link."
      },
      {
        id: "project-kinesis",
        title: "Kinesis",
        summary: "An events product. The screenshots show the public landing page and the sign-in screen.",
        stack: [],
        impact: "Client work from my time at Fractory. Shown as screenshots only, because the project is under NDA.",
        role: "Fractory · client work",
        image: "/images/KinesisHero.png",
        gallery: ["/images/KinesisHero.png", "/images/KinesisLogin.png"],
        note: "There is no public demo or code link."
      },
      {
        id: "project-ecotrecko",
        title: "EcoTrecko",
        summary:
          "A mobile app for tracking more eco-friendly habits, built as a 3rd-year team project — the last year of the bachelor's phase. The image is the project poster.",
        stack: ["Flutter", "Dart", "Firebase", "Figma"],
        impact: "Ranked 2nd best project of that year, out of more than 20 projects.",
        role: "3rd-year team project",
        image: "/images/ecotrecko_poster.jpeg",
        imageFit: "contain",
        note: "There is no demo or code link. The app is offline, the repository is on another account, and it depended on Google Cloud services that are no longer available."
      }
    ],
    publicProjects: [
      {
        id: "project-polski-od-zera",
        title: "PolskiOdZera",
        summary:
          "A web app for learning Polish from zero. It includes an A1 curriculum, six exercise types, SM-2 spaced repetition, a mistakes notebook, grammar pages, vocabulary lists, and an offline-first PWA.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB"],
        github: "https://github.com/yarosfct/Language_School_PL"
      },
      {
        id: "project-goal-tracker",
        title: "GoalTracker",
        summary:
          "A goal-tracking web app built for a UX course group project, with a dashboard, goals, a weekly schedule, analytics, and settings.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        role: "UX course group project",
        github: "https://github.com/yarosfct/GoalTracker_UX_PWR"
      },
      {
        id: "project-sudoku-3d",
        title: "Sudoku3D",
        summary: "A personal 3D Sudoku project, with a difficulty menu and a timer.",
        stack: ["React", "Three.js", "Spline", "Vite"],
        role: "Personal project",
        github: "https://github.com/yarosfct/Sudoku3D"
      }
    ],
    moreProjects: [
      {
        id: "project-census-ml",
        title: "census_ml_project",
        summary:
          "A Python study on the UCI Adult Census Income dataset. It looks at how preprocessing and hyperparameter tuning affect classical models that predict whether income exceeds $50,000.",
        stack: ["Python", "scikit-learn", "pandas"],
        github: "https://github.com/yarosfct/census_ml_project"
      },
      {
        id: "project-market-dashboard",
        title: "MarketDashboard",
        summary: "A Flutter sales dashboard with line, bar, and donut charts, category filtering, a time range, and a responsive layout.",
        stack: ["Flutter", "Dart"],
        image: "/images/market-dashboard.png",
        imageAlt: "MarketDashboard sales charts",
        github: "https://github.com/yarosfct/MarketDashboard"
      }
    ],
    clientProjects: [
      {
        id: "project-soregi",
        title: "Soregi",
        summary:
          "A scroll-animated landing page for SOREGI – Frutas e Legumes, Lda., a Portuguese carrot and potato farm in Alcochete. It includes a scroll-locked seed-to-carrot hero, a product crate reveal, and a harvest-to-packing conveyor animation.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
        role: "CrestPoint Tech · client work",
        note: "No public code or live link."
      },
      {
        id: "project-nato-interpret",
        title: "Nato·Interpret",
        summary: "A professional German–Georgian interpreting and translation website, multilingual (i18n).",
        stack: ["React", "TypeScript"],
        role: "CrestPoint Tech · client work",
        note: "No public code or live link."
      }
    ],
    techGroups: [
      {
        title: "Web",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Framer Motion"]
      },
      {
        title: "Mobile",
        items: ["Flutter", "Dart", "Firebase", "Figma"]
      },
      {
        title: "3D & ML",
        items: ["Three.js", "Spline", "Python"]
      }
    ],
    about: {
      leadBefore:
        "I was born in Ukraine and raised in Portugal. I'm finishing an Integrated Master's in Computer Engineering at NOVA FCT, where I enrolled in 2021, and I co-founded ",
      leadAfter: " with two colleagues.",
      companyName: "CrestPoint Tech",
      companyHref: crestPointHref,
      paragraphs: [
        "I'm easy-going, and I like people to feel comfortable around me. Humor is part of how I work with others, and I'm serious when the work calls for it. Creativity is the strength I trust most: I like coming up with answers to everyday problems, which is how I got into 3D printing and electronics.",
        "I stay active and I like trying new things. Right now that is combat sports, especially kickboxing. It has taught me confidence, restraint, and respect for other people. Before kickboxing I skated, which taught me to talk to strangers and to learn by practicing on my own.",
        "An Erasmus exchange in Wrocław, Poland, from October 2025 to February 2026, at Wrocław University of Science and Technology (Politechnika Wrocławska), took me out of my comfort zone while I was writing my thesis and taking courses. I had to be more autonomous and keep several things going in a country that was not mine. I made close friendships there, and I came home with a deeper appreciation of my Ukrainian heritage. I already spoke Ukrainian; in Poland I learned to read and write it, and I learned a lot of Polish."
      ],
      languagesLabel: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Native" },
        { name: "Ukrainian", level: "Fluent" },
        { name: "Polish", level: "Conversational" }
      ],
      strengthsLabel: "How I work",
      strengths: [
        {
          title: "Creativity",
          detail: "I like solving everyday problems. 3D printing and electronics grew out of that, as hobbies."
        },
        {
          title: "Autonomy",
          detail: "Erasmus in Wrocław, from October 2025 to February 2026, meant handling the thesis and coursework at the same time, away from home."
        },
        {
          title: "Restraint and respect",
          detail: "Kickboxing has been teaching me confidence, restraint, and respect for other people."
        }
      ]
    },
    experience: [
      {
        period: "April 2026 — Present",
        title: "Co-founder",
        subtitle: "CrestPoint Tech",
        description:
          "Delivers custom websites, apps, and automation for SMEs as a managed monthly software service.",
        link: { href: crestPointHref, label: "crestpoint.pt" }
      },
      {
        period: "2026 — Defense pending",
        title: "Master's thesis",
        subtitle: "NOVA FCT",
        description:
          "The Challenges in Learning and Teaching Software Modelling. Submitted and accepted; defense to be scheduled.",
        link: { href: thesisHref, label: "Thesis repository" }
      },
      {
        period: "October 2025 — February 2026",
        title: "Erasmus exchange · Wrocław, Poland",
        subtitle: "Politechnika Wrocławska",
        description: "Exchange while managing my thesis and courses."
      },
      {
        period: "May 2025 — January 2026",
        title: "Web Developer",
        subtitle: "Fractory",
        description: "Web developer at a studio founded by university colleagues."
      },
      {
        period: "2021 — 2026",
        title: "Integrated Master's in Computer Engineering",
        subtitle: "NOVA FCT",
        description: "Engenharia Informática at Faculdade de Ciências e Tecnologia, Universidade NOVA de Lisboa."
      }
    ],
    achievements: [
      {
        title: "2nd best project of the year — EcoTrecko",
        detail:
          "Team project in the 3rd year, the last year of the bachelor's phase of my Integrated Master's. Ranked 2nd out of more than 20 projects that year."
      },
      {
        title: "Connecting Humanity Award — Hive Control",
        detail:
          "Team project in the entrepreneurship course in my 1st master's year (4th year). The course is common to all degrees at FCT and had more than 50 teams. Hive Control, an open-source distributed IoT system connector, received the Connecting Humanity Award from NOS — one of five awards given."
      }
    ],
    contact: {
      email: "yaroslav.hayduk8@gmail.com",
      linkedin: "https://www.linkedin.com/in/yaroslav-hayduk-a1a563206/",
      github: "https://github.com/yarosfct",
      location: "Aveiro, Portugal"
    },
    footer: "© 2026 Yaroslav Hayduk. Built with Next.js and Tailwind CSS."
  },
  pt: {
    ui: {
      languageLabel: "Idioma",
      themeLabel: "Alternar tema",
      availability: "Aberto a oportunidades · remoto de preferência",
      projectContributionLabel: "O meu contributo",
      demoLabel: "Demonstração",
      navGitHub: "GitHub",
      sectionsLabel: "Secções",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      screenshotsLabel: "{count} capturas",
      expandLabel: "Ampliar",
      fitScreen: "Ajustar ao ecrã",
      fitWidth: "Ajustar à largura",
      zoomIn: "Aumentar zoom",
      zoomOut: "Reduzir zoom",
      previousImage: "Imagem anterior",
      nextImage: "Imagem seguinte",
      closeViewer: "Fechar visualizador",
      enlargedAlt: "captura ampliada",
      publicProjectsTitle: "Projetos públicos",
      moreProjectsTitle: "Mais projetos",
      clientWorkTitle: "Trabalho de cliente"
    },
    nav: [
      { id: "hero", label: "Início" },
      { id: "projects", label: "Projetos" },
      { id: "experience", label: "Percurso" },
      { id: "achievements", label: "Prémios" },
      { id: "about", label: "Sobre" },
      { id: "contact", label: "Contacto" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "A terminar Engenharia Informática na NOVA FCT, e a construir a CrestPoint Tech",
      pitch:
        "Cofundei a CrestPoint Tech com dois colegas. Também desenvolvo para a web e para telemóvel, com algum trabalho de machine learning: projetos de cliente na Fractory, repositórios públicos e projetos na NOVA FCT.",
      ctas: {
        projects: "Ver projetos",
        contact: "Falar comigo",
        experience: "Ver percurso",
        github: "GitHub"
      },
      highlights: [
        { value: "2021–2026", label: "Mestrado Integrado em Engenharia Informática na NOVA FCT" },
        { value: "Abr 2026", label: "Cofundador da CrestPoint Tech" }
      ]
    },
    sectionHeadings: {
      projects: {
        eyebrow: "Trabalho selecionado",
        title: "Trabalho de cliente, trabalho de universidade e repositórios públicos",
        description:
          "A SafetyScope e a Kinesis são trabalho de cliente na Fractory, mostrado em capturas sob NDA. O EcoTrecko é um projeto de equipa do 3.º ano. Abaixo estão projetos públicos no GitHub, dois repositórios mais pequenos e trabalho de cliente da CrestPoint Tech."
      },
      stack: {
        eyebrow: "Tecnologias",
        title: "Ferramentas por trás do que está nesta página",
        description: "O que os projetos desta página usam: aplicações web, Flutter, e um conjunto mais pequeno para 3D e machine learning."
      },
      about: {
        eyebrow: "Sobre mim",
        title: "Como trabalho, e o que me importa",
        description: "Um pouco de percurso, o que continuo a praticar, e as línguas que uso."
      },
      experience: {
        title: "O meu percurso",
        description: "O meu caminho pessoal e profissional.",
        align: "center"
      },
      achievements: {
        eyebrow: "Prémios",
        title: "Dois projetos que foram reconhecidos",
        description: "Uma classificação da fase de licenciatura, e um prémio de uma cadeira comum na FCT."
      },
      contact: {
        eyebrow: "Contacto",
        title: "Olá",
        description: "Estou em Aveiro e aberto a oportunidades, remoto de preferência. O email é a forma mais direta de falar comigo."
      }
    },
    projects: [
      {
        id: "project-safetyscope",
        title: "SafetyScope",
        summary:
          "Site de apresentação de um produto de segurança. As capturas são as páginas públicas: a página inicial, uma página sobre o produto e a página de contacto.",
        stack: [],
        impact: "Trabalho de cliente do tempo em que estive na Fractory. Mostro apenas capturas, porque o projeto está sob NDA.",
        role: "Fractory · trabalho de cliente",
        image: "/images/SafetyMain.png",
        gallery: ["/images/SafetyMain.png", "/images/SafetyAbout.png", "/images/SafetyContact.png"],
        note: "A empresa da SafetyScope entretanto encerrou, por isso os painéis do produto não estão disponíveis. Não há demonstração pública nem ligação para o código."
      },
      {
        id: "project-kinesis",
        title: "Kinesis",
        summary: "Um produto de eventos. As capturas mostram a página pública de apresentação e o ecrã de início de sessão.",
        stack: [],
        impact: "Trabalho de cliente do tempo em que estive na Fractory. Mostro apenas capturas, porque o projeto está sob NDA.",
        role: "Fractory · trabalho de cliente",
        image: "/images/KinesisHero.png",
        gallery: ["/images/KinesisHero.png", "/images/KinesisLogin.png"],
        note: "Não há demonstração pública nem ligação para o código."
      },
      {
        id: "project-ecotrecko",
        title: "EcoTrecko",
        summary:
          "Uma aplicação móvel para acompanhar hábitos mais ecológicos, feita como projeto de equipa no 3.º ano — o último ano da fase de licenciatura. A imagem é o póster do projeto.",
        stack: ["Flutter", "Dart", "Firebase", "Figma"],
        impact: "Classificado como o 2.º melhor projeto desse ano, entre mais de 20.",
        role: "Projeto de equipa, 3.º ano",
        image: "/images/ecotrecko_poster.jpeg",
        imageFit: "contain",
        note: "Não há demonstração nem ligação para o código. A aplicação está offline, o repositório está noutra conta, e dependia de serviços Google Cloud que já não existem."
      }
    ],
    publicProjects: [
      {
        id: "project-polski-od-zera",
        title: "PolskiOdZera",
        summary:
          "Uma aplicação web para aprender polaco a partir do zero. Inclui um currículo A1, seis tipos de exercício, repetição espaçada SM-2, um caderno de erros, páginas de gramática, listas de vocabulário e uma PWA que funciona offline.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB"],
        github: "https://github.com/yarosfct/Language_School_PL"
      },
      {
        id: "project-goal-tracker",
        title: "GoalTracker",
        summary:
          "Uma aplicação web de acompanhamento de objetivos, feita como projeto de grupo de uma cadeira de UX, com painel, objetivos, horário semanal, análise e definições.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        role: "Projeto de grupo, cadeira de UX",
        github: "https://github.com/yarosfct/GoalTracker_UX_PWR"
      },
      {
        id: "project-sudoku-3d",
        title: "Sudoku3D",
        summary: "Um projeto pessoal de Sudoku em 3D, com um menu de dificuldade e um temporizador.",
        stack: ["React", "Three.js", "Spline", "Vite"],
        role: "Projeto pessoal",
        github: "https://github.com/yarosfct/Sudoku3D"
      }
    ],
    moreProjects: [
      {
        id: "project-census-ml",
        title: "census_ml_project",
        summary:
          "Um estudo em Python sobre o conjunto de dados UCI Adult Census Income. Avalia como o pré-processamento e o ajuste de hiperparâmetros afetam modelos clássicos que preveem se o rendimento ultrapassa 50 000 dólares.",
        stack: ["Python", "scikit-learn", "pandas"],
        github: "https://github.com/yarosfct/census_ml_project"
      },
      {
        id: "project-market-dashboard",
        title: "MarketDashboard",
        summary:
          "Um painel de vendas em Flutter, com gráficos de linha, barras e donut, filtro por categoria, intervalo de tempo e um layout responsivo.",
        stack: ["Flutter", "Dart"],
        image: "/images/market-dashboard.png",
        imageAlt: "Gráficos de vendas do MarketDashboard",
        github: "https://github.com/yarosfct/MarketDashboard"
      }
    ],
    clientProjects: [
      {
        id: "project-soregi",
        title: "Soregi",
        summary:
          "Uma landing page com animação no scroll para a SOREGI – Frutas e Legumes, Lda., uma exploração agrícola portuguesa de cenoura e batata em Alcochete. Inclui um hero com scroll bloqueado, da semente à cenoura, a revelação de uma caixa de produto e uma animação de tapete rolante da colheita à embalagem.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
        role: "CrestPoint Tech · trabalho de cliente",
        note: "Sem código público nem ligação ao vivo."
      },
      {
        id: "project-nato-interpret",
        title: "Nato·Interpret",
        summary: "Um site profissional de interpretação e tradução alemão–georgiano, multilingue (i18n).",
        stack: ["React", "TypeScript"],
        role: "CrestPoint Tech · trabalho de cliente",
        note: "Sem código público nem ligação ao vivo."
      }
    ],
    techGroups: [
      {
        title: "Web",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Framer Motion"]
      },
      {
        title: "Telemóvel",
        items: ["Flutter", "Dart", "Firebase", "Figma"]
      },
      {
        title: "3D e ML",
        items: ["Three.js", "Spline", "Python"]
      }
    ],
    about: {
      leadBefore:
        "Nasci na Ucrânia e cresci em Portugal. Estou a terminar o Mestrado Integrado em Engenharia Informática na NOVA FCT, onde entrei em 2021, e cofundei a ",
      leadAfter: " com dois colegas.",
      companyName: "CrestPoint Tech",
      companyHref: crestPointHref,
      paragraphs: [
        "Sou descontraído e gosto que as pessoas se sintam à vontade comigo. O humor faz parte da forma como trabalho com os outros, e sou sério quando o trabalho o pede. A criatividade é a força em que mais confio: gosto de encontrar respostas para problemas do dia a dia, e foi assim que comecei com a impressão 3D e a eletrónica.",
        "Mantenho-me ativo e gosto de experimentar coisas novas. Neste momento é o desporto de combate, sobretudo o kickboxing, que me tem dado confiança, contenção e respeito pelos outros. Antes do kickboxing andei de skate, e aprendi a falar com desconhecidos e a aprender sozinho, à força de praticar.",
        "Um Erasmus em Wrocław, na Polónia, de outubro de 2025 a fevereiro de 2026, na Wrocław University of Science and Technology (Politechnika Wrocławska), tirou-me da zona de conforto enquanto escrevia a tese e fazia cadeiras. Tive de ser mais autónomo e de manter várias coisas ao mesmo tempo, num país que não era o meu. Fiz amizades fortes e voltei com mais apreço pela minha herança ucraniana. Já falava ucraniano; na Polónia aprendi a lê-lo e a escrevê-lo, e aprendi bastante polaco."
      ],
      languagesLabel: "Línguas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Nativo" },
        { name: "Ucraniano", level: "Fluente" },
        { name: "Polaco", level: "Conversacional" }
      ],
      strengthsLabel: "Como trabalho",
      strengths: [
        {
          title: "Criatividade",
          detail: "Gosto de encontrar soluções para problemas do dia a dia. A impressão 3D e a eletrónica vieram daí, como passatempos."
        },
        {
          title: "Autonomia",
          detail: "O Erasmus em Wrocław, de outubro de 2025 a fevereiro de 2026, significou gerir a tese e as cadeiras ao mesmo tempo, longe de casa."
        },
        {
          title: "Contenção e respeito",
          detail: "O kickboxing tem-me ensinado confiança, contenção e respeito pelos outros."
        }
      ]
    },
    experience: [
      {
        period: "Abril 2026 — Presente",
        title: "Cofundador",
        subtitle: "CrestPoint Tech",
        description:
          "Entrega websites, aplicações e automação para PME como serviço de software gerido, com mensalidade.",
        link: { href: crestPointHref, label: "crestpoint.pt" }
      },
      {
        period: "2026 — Defesa por marcar",
        title: "Tese de mestrado",
        subtitle: "NOVA FCT",
        description:
          "The Challenges in Learning and Teaching Software Modelling. Entregue e aceite; defesa por marcar.",
        link: { href: thesisHref, label: "Repositório da tese" }
      },
      {
        period: "Outubro 2025 — Fevereiro 2026",
        title: "Intercâmbio Erasmus · Wrocław, Polónia",
        subtitle: "Politechnika Wrocławska",
        description: "Intercâmbio a gerir a tese e as cadeiras."
      },
      {
        period: "Maio 2025 — Janeiro 2026",
        title: "Programador web",
        subtitle: "Fractory",
        description: "Programador web num estúdio fundado por colegas da universidade."
      },
      {
        period: "2021 — 2026",
        title: "Mestrado Integrado em Engenharia Informática",
        subtitle: "NOVA FCT",
        description: "Engenharia Informática na Faculdade de Ciências e Tecnologia da Universidade NOVA de Lisboa."
      }
    ],
    achievements: [
      {
        title: "2.º melhor projeto do ano — EcoTrecko",
        detail:
          "Projeto de equipa no 3.º ano, o último ano da fase de licenciatura do Mestrado Integrado. Ficou em 2.º lugar entre mais de 20 projetos desse ano."
      },
      {
        title: "Connecting Humanity Award — Hive Control",
        detail:
          "Projeto de equipa na cadeira de empreendedorismo, no 1.º ano de mestrado (4.º ano). A cadeira é comum a todos os cursos da FCT e teve mais de 50 equipas. O Hive Control, um conector open-source para sistemas IoT distribuídos, recebeu o Connecting Humanity Award da NOS — um de cinco prémios atribuídos."
      }
    ],
    contact: {
      email: "yaroslav.hayduk8@gmail.com",
      linkedin: "https://www.linkedin.com/in/yaroslav-hayduk-a1a563206/",
      github: "https://github.com/yarosfct",
      location: "Aveiro, Portugal"
    },
    footer: "© 2026 Yaroslav Hayduk. Feito com Next.js e Tailwind CSS."
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
