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
    codeProjectLabel: string;
  };
  nav: NavItem[];
  hero: {
    name: string;
    title: string;
    pitch: string;
    ctas: {
      projects: string;
      contact: string;
      github: string;
    };
    highlights: Array<{ value: string; label: string; href?: string }>;
  };
  sectionHeadings: Record<"projects" | "stack" | "about" | "experience" | "achievements" | "contact", SectionHeading>;
  projects: Project[];
  techGroups: TechGroup[];
  /** Skills used most across recent CrestPoint, portfolio, and selected work. */
  dailyDrivers: string[];
  dailyDriversLabel: string;
  about: {
    intro: string[];
    companyName: string;
    companyHref: string;
    quote: {
      text: string;
      latin?: string;
      note: string;
    };
    languagesLabel: string;
    languages: Language[];
    highlights: Strength[];
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
      codeProjectLabel: "Code project"
    },
    nav: [
      { id: "hero", label: "Home" },
      { id: "projects", label: "Selected work" },
      { id: "experience", label: "Experience" },
      { id: "achievements", label: "Achievements" },
      { id: "about", label: "About me" },
      { id: "stack", label: "Skills" },
      { id: "contact", label: "Contact" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "I build clean web products with a creative edge.",
      pitch:
        "Computer engineer from NOVA FCT and co-founder of CrestPoint Tech. Based in Aveiro, open to roles (remote preferred).",
      ctas: {
        projects: "View projects",
        contact: "Get in touch",
        github: "GitHub"
      },
      highlights: [
        { value: "2021 – 2026", label: "Integrated Master's, NOVA FCT" },
        { value: "CrestPoint", label: "Co-founder", href: crestPointHref }
      ]
    },
    sectionHeadings: {
      projects: {
        eyebrow: "Selected work",
        title: "Projects I've built",
        description: "Client work and public repositories."
      },
      stack: {
        eyebrow: "Skills",
        title: "What I've worked with so far",
        description: "A broad toolkit from school, client work, and side projects. Highlighted chips are my daily drivers."
      },
      about: {
        eyebrow: "About me",
        title: "A bit about who I am",
        description: "Born in Ukraine, raised in Portugal. Based in Aveiro."
      },
      experience: {
        eyebrow: "Experience",
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
        id: "project-soregi",
        title: "Soregi",
        summary:
          "A scroll-animated landing page for SOREGI – Frutas e Legumes, Lda., a Portuguese carrot and potato farm in Alcochete.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
        role: "CrestPoint Tech · client work",
        image: "/images/soregi-hero.webp",
        imageAlt: "Soregi landing page hero",
        gallery: ["/images/soregi-hero.webp", "/images/soregi-products.webp"],
        note: "No public code or live link."
      },
      {
        id: "project-nato-interpret",
        title: "Nato·Interpret",
        summary:
          "A website for a German-Georgian interpreting and translation service, available in German and English. It helps courts, authorities, clinics, and families learn about the interpreter and get in touch.",
        stack: ["React", "TypeScript"],
        role: "CrestPoint Tech · client work",
        image: "/images/nato-hero.webp",
        imageAlt: "Nato·Interpret homepage hero",
        gallery: ["/images/nato-hero.webp", "/images/nato-about.webp"],
        note: "No public code or live link."
      },
      {
        id: "project-safetyscope",
        title: "SafetyScope",
        summary:
          "Web development at Fractory for SafetyScope, a safety product. Screenshots show the OMNI marketing site: See what matters. Act when it counts.",
        stack: [],
        role: "Fractory · client work",
        image: "/images/SafetyMain.png",
        gallery: ["/images/SafetyMain.png", "/images/SafetyAbout.png", "/images/SafetyContact.png"],
        note: "Client work under NDA, shown as screenshots."
      },
      {
        id: "project-kinesis",
        title: "Kinesis",
        summary:
          "Web development at Fractory for Kinesis, a platform for discovering events, artists, and venues.",
        stack: [],
        role: "Fractory · client work",
        image: "/images/KinesisHero.png",
        gallery: ["/images/KinesisHero.png", "/images/KinesisLogin.png"],
        note: "Client work under NDA, shown as screenshots."
      },
      {
        id: "project-ecotrecko",
        title: "EcoTrecko",
        summary:
          "A mobile app for tracking more eco-friendly habits, built as a 3rd-year team project at NOVA FCT. The image is the project poster.",
        stack: ["Flutter", "Dart", "Firebase", "Figma"],
        role: "3rd-year team project",
        image: "/images/ecotrecko_poster.jpeg",
        imageAlt: "EcoTrecko project poster",
        imageFit: "contain",
        note: "Ranked 2nd of more than 20 projects that year. Offline now: no demo, the repository is on another account, and it depended on Google Cloud services that are no longer available."
      },
      {
        id: "project-goal-tracker",
        title: "GoalTracker",
        summary:
          "A goal-tracking web app for a UX course group project, with a dashboard, goals, weekly schedule, and analytics.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        role: "UX course group project",
        image: "/images/goaltracker-dashboard.webp",
        imageAlt: "GoalTracker dashboard",
        github: "https://github.com/yarosfct/GoalTracker_UX_PWR"
      },
      {
        id: "project-census-ml",
        title: "Census ML",
        summary:
          "A university course team project: we train classical ML models on the UCI Adult Census Income dataset to predict whether income exceeds $50,000, comparing preprocessing and hyperparameter tuning.",
        stack: ["Python", "scikit-learn", "pandas"],
        role: "University course · team project",
        github: "https://github.com/yarosfct/census_ml_project"
      },
      {
        id: "project-polski-od-zera",
        title: "PolskiOdZera",
        summary:
          "A web app for learning Polish from zero, with an A1 curriculum, spaced repetition, and an offline-first PWA.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB"],
        role: "Personal project",
        github: "https://github.com/yarosfct/Language_School_PL"
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
    techGroups: [
      {
        title: "Languages",
        items: ["JavaScript", "TypeScript", "Java", "OCaml", "C", "C#", "Python", "SQL", "HTML", "Dart"]
      },
      {
        title: "Frontend & Graphics",
        items: ["React", "Next.js", "Tailwind CSS", "AngularJS", "Flutter", "Three.js", "WebGL", "OpenGL", "Spline"]
      },
      {
        title: "Backend & Data",
        items: ["Node.js", "PostgreSQL", "Redis", "Firebase"]
      },
      {
        title: "ML & Data Science",
        items: ["PyTorch", "scikit-learn", "pandas", "NumPy"]
      },
      {
        title: "Cloud & DevOps",
        items: ["Git", "AWS", "Google Cloud", "Docker", "Kubernetes"]
      },
      {
        title: "Tools",
        items: ["Cursor", "Figma", "VS Code", "Android Studio", "Postman", "LaTeX"]
      },
      {
        title: "Software Engineering",
        items: ["Software Modelling", "UML", "Requirements Engineering"]
      },
      {
        title: "Practices",
        items: ["UI/UX", "Responsive Design", "Performance Optimization"]
      }
    ],
    dailyDrivers: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "Figma",
      "Cursor",
      "UI/UX",
      "Responsive Design"
    ],
    dailyDriversLabel: "Daily drivers",
    about: {
      intro: [
        "I was born in Ukraine (hence the name) and raised in Portugal. I'm based in Aveiro, finishing an Integrated Master's in Computer Engineering at NOVA FCT, and I co-founded CrestPoint Tech with two colleagues.",
        "I'm easy to work with: easygoing, sociable, and I bring energy and good humor to a team. Creativity is my biggest strength, and I like approaching problems from that angle."
      ],
      companyName: "CrestPoint Tech",
      companyHref: crestPointHref,
      quote: {
        text: "A healthy mind starts with a healthy body.",
        latin: "Mens sana in corpore sano",
        note: "I love staying active: the gym, running, team sports with friends, whatever gets me moving. Right now I'm invested in kickboxing, and it has taught me a lot."
      },
      languagesLabel: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Native" },
        { name: "Ukrainian", level: "Fluent" },
        { name: "Polish", level: "Conversational" }
      ],
      highlights: [
        {
          title: "Creativity",
          detail: "I like picking up random side projects. I took a 3D modelling course in parametric modelling because I enjoyed the topic, and that fits with my hobbies in 3D printing and electronics."
        },
        {
          title: "Erasmus · Wrocław",
          detail: "Politechnika Wrocławska, Oct 2025 – Feb 2026. Learned to read and write Ukrainian, and picked up a lot of Polish."
        },
        {
          title: "Open to roles",
          detail: "Based in Aveiro. Remote preferred."
        }
      ]
    },
    experience: [
      {
        period: "April 2026 – Present",
        title: "Co-founder",
        subtitle: "CrestPoint Tech",
        description:
          "Delivers custom websites, apps, and automation for SMEs as a managed monthly software service.",
        link: { href: crestPointHref, label: "crestpoint.pt" }
      },
      {
        period: "2026 – Defense pending",
        title: "Master's thesis",
        subtitle: "NOVA FCT",
        description:
          "The Challenges in Learning and Teaching Software Modelling. Submitted and accepted; defense to be scheduled.",
        link: { href: thesisHref, label: "Thesis repository" }
      },
      {
        period: "October 2025 – February 2026",
        title: "Erasmus exchange · Wrocław, Poland",
        subtitle: "Politechnika Wrocławska",
        description: "Exchange while managing my thesis and courses."
      },
      {
        period: "May 2025 – January 2026",
        title: "Web Developer",
        subtitle: "Fractory",
        description: "Web developer at a studio founded by university colleagues."
      },
      {
        period: "2021 – 2026",
        title: "Integrated Master's in Computer Engineering",
        subtitle: "NOVA FCT",
        description: "Engenharia Informática at Faculdade de Ciências e Tecnologia, Universidade NOVA de Lisboa."
      }
    ],
    achievements: [
      {
        title: "2nd best project of the year: EcoTrecko",
        detail:
          "Team project in the 3rd year, the last year of the bachelor's phase of my Integrated Master's. Ranked 2nd out of more than 20 projects that year."
      },
      {
        title: "Connecting Humanity Award: Hive Control",
        detail:
          "Team project in the entrepreneurship course in my 1st master's year (4th year). The course is common to all degrees at FCT and had more than 50 teams. Hive Control, an open-source distributed IoT system connector, received the Connecting Humanity Award from NOS, one of five awards given."
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
      codeProjectLabel: "Projeto de código"
    },
    nav: [
      { id: "hero", label: "Início" },
      { id: "projects", label: "Trabalho selecionado" },
      { id: "experience", label: "Percurso" },
      { id: "achievements", label: "Prémios" },
      { id: "about", label: "Sobre mim" },
      { id: "stack", label: "Competências" },
      { id: "contact", label: "Contacto" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "Construo produtos web limpos, com um toque criativo.",
      pitch:
        "Engenheiro informático da NOVA FCT e cofundador da CrestPoint Tech. Em Aveiro, aberto a oportunidades (remoto de preferência).",
      ctas: {
        projects: "Ver projetos",
        contact: "Falar comigo",
        github: "GitHub"
      },
      highlights: [
        { value: "2021 – 2026", label: "Mestrado Integrado, NOVA FCT" },
        { value: "CrestPoint", label: "Cofundador", href: crestPointHref }
      ]
    },
    sectionHeadings: {
      projects: {
        eyebrow: "Trabalho selecionado",
        title: "Projetos que construí",
        description: "Trabalho de cliente e repositórios públicos."
      },
      stack: {
        eyebrow: "Competências",
        title: "Com o que já trabalhei até agora",
        description: "Um conjunto alargado da faculdade, de trabalho com clientes e de projetos pessoais. Os chips destacados são as minhas ferramentas do dia a dia."
      },
      about: {
        eyebrow: "Sobre mim",
        title: "Um pouco de quem sou",
        description: "Nascido na Ucrânia, crescido em Portugal. Base em Aveiro."
      },
      experience: {
        eyebrow: "Percurso",
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
        id: "project-soregi",
        title: "Soregi",
        summary:
          "Uma landing page com animação no scroll para a SOREGI – Frutas e Legumes, Lda., uma exploração agrícola portuguesa de cenoura e batata em Alcochete.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
        role: "CrestPoint Tech · trabalho de cliente",
        image: "/images/soregi-hero.webp",
        imageAlt: "Hero da landing page da Soregi",
        gallery: ["/images/soregi-hero.webp", "/images/soregi-products.webp"],
        note: "Sem código público nem ligação ao vivo."
      },
      {
        id: "project-nato-interpret",
        title: "Nato·Interpret",
        summary:
          "Um site para um serviço de interpretação e tradução alemão-georgiano, disponível em alemão e inglês. Ajuda tribunais, autoridades, clínicas e famílias a conhecer a intérprete e a entrar em contacto.",
        stack: ["React", "TypeScript"],
        role: "CrestPoint Tech · trabalho de cliente",
        image: "/images/nato-hero.webp",
        imageAlt: "Hero da página inicial da Nato·Interpret",
        gallery: ["/images/nato-hero.webp", "/images/nato-about.webp"],
        note: "Sem código público nem ligação ao vivo."
      },
      {
        id: "project-safetyscope",
        title: "SafetyScope",
        summary:
          "Desenvolvimento web na Fractory para a SafetyScope, um produto de segurança. As capturas mostram o site da OMNI: See what matters. Act when it counts.",
        stack: [],
        role: "Fractory · trabalho de cliente",
        image: "/images/SafetyMain.png",
        gallery: ["/images/SafetyMain.png", "/images/SafetyAbout.png", "/images/SafetyContact.png"],
        note: "Trabalho de cliente sob NDA, mostrado em capturas de ecrã."
      },
      {
        id: "project-kinesis",
        title: "Kinesis",
        summary:
          "Desenvolvimento web na Fractory para a Kinesis, uma plataforma para descobrir eventos, artistas e espaços.",
        stack: [],
        role: "Fractory · trabalho de cliente",
        image: "/images/KinesisHero.png",
        gallery: ["/images/KinesisHero.png", "/images/KinesisLogin.png"],
        note: "Trabalho de cliente sob NDA, mostrado em capturas de ecrã."
      },
      {
        id: "project-ecotrecko",
        title: "EcoTrecko",
        summary:
          "Uma aplicação móvel para acompanhar hábitos mais ecológicos, feita como projeto de equipa do 3.º ano na NOVA FCT. A imagem é o póster do projeto.",
        stack: ["Flutter", "Dart", "Firebase", "Figma"],
        role: "Projeto de equipa, 3.º ano",
        image: "/images/ecotrecko_poster.jpeg",
        imageAlt: "Póster do projeto EcoTrecko",
        imageFit: "contain",
        note: "Classificado em 2.º lugar entre mais de 20 projetos desse ano. Está offline: sem demonstração, o repositório está noutra conta, e dependia de serviços Google Cloud que já não existem."
      },
      {
        id: "project-goal-tracker",
        title: "GoalTracker",
        summary:
          "Uma aplicação web de acompanhamento de objetivos, feita como projeto de grupo de uma cadeira de UX, com painel, objetivos, horário semanal e análise.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        role: "Projeto de grupo, cadeira de UX",
        image: "/images/goaltracker-dashboard.webp",
        imageAlt: "Painel do GoalTracker",
        github: "https://github.com/yarosfct/GoalTracker_UX_PWR"
      },
      {
        id: "project-census-ml",
        title: "Census ML",
        summary:
          "Um projeto de equipa de uma cadeira universitária: treinamos modelos clássicos de ML no conjunto UCI Adult Census Income para prever se o rendimento ultrapassa 50 000 dólares, comparando pré-processamento e ajuste de hiperparâmetros.",
        stack: ["Python", "scikit-learn", "pandas"],
        role: "Cadeira universitária · projeto de equipa",
        github: "https://github.com/yarosfct/census_ml_project"
      },
      {
        id: "project-polski-od-zera",
        title: "PolskiOdZera",
        summary:
          "Uma aplicação web para aprender polaco a partir do zero, com currículo A1, repetição espaçada e uma PWA que funciona offline.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "IndexedDB"],
        role: "Projeto pessoal",
        github: "https://github.com/yarosfct/Language_School_PL"
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
    techGroups: [
      {
        title: "Linguagens",
        items: ["JavaScript", "TypeScript", "Java", "OCaml", "C", "C#", "Python", "SQL", "HTML", "Dart"]
      },
      {
        title: "Frontend e gráficos",
        items: ["React", "Next.js", "Tailwind CSS", "AngularJS", "Flutter", "Three.js", "WebGL", "OpenGL", "Spline"]
      },
      {
        title: "Backend e dados",
        items: ["Node.js", "PostgreSQL", "Redis", "Firebase"]
      },
      {
        title: "ML e ciência de dados",
        items: ["PyTorch", "scikit-learn", "pandas", "NumPy"]
      },
      {
        title: "Cloud e DevOps",
        items: ["Git", "AWS", "Google Cloud", "Docker", "Kubernetes"]
      },
      {
        title: "Ferramentas",
        items: ["Cursor", "Figma", "VS Code", "Android Studio", "Postman", "LaTeX"]
      },
      {
        title: "Engenharia de Software",
        items: ["Modelação de Software", "UML", "Engenharia de Requisitos"]
      },
      {
        title: "Práticas",
        items: ["UI/UX", "Responsive Design", "Performance Optimization"]
      }
    ],
    dailyDrivers: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "Figma",
      "Cursor",
      "UI/UX",
      "Responsive Design"
    ],
    dailyDriversLabel: "Do dia a dia",
    about: {
      intro: [
        "Nasci na Ucrânia (daí o nome) e cresci em Portugal. Estou em Aveiro, a terminar o Mestrado Integrado em Engenharia Informática na NOVA FCT, e cofundei a CrestPoint Tech com dois colegas.",
        "Sou fácil de trabalhar: descontraído, sociável, e trago energia e bom humor a uma equipa. A criatividade é a minha maior força, e gosto de olhar para os problemas por esse lado."
      ],
      companyName: "CrestPoint Tech",
      companyHref: crestPointHref,
      quote: {
        text: "Mente sã, corpo são.",
        latin: "Mens sana in corpore sano",
        note: "Gosto de manter-me ativo: ginásio, corrida, desporto de equipa com amigos, o que for. Neste momento estou investido no kickboxing, e tem-me ensinado muito."
      },
      languagesLabel: "Línguas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Nativo" },
        { name: "Ucraniano", level: "Fluente" },
        { name: "Polaco", level: "Conversacional" }
      ],
      highlights: [
        {
          title: "Criatividade",
          detail: "Gosto de pegar em projetos paralelos ao calhas. Fiz um curso de modelação 3D (modelação paramétrica) porque gostava do tema, e isso liga-se aos meus passatempos de impressão 3D e eletrónica."
        },
        {
          title: "Erasmus · Wrocław",
          detail: "Politechnika Wrocławska, out. 2025 – fev. 2026. Aprendi a ler e a escrever ucraniano, e apanhei bastante polaco."
        },
        {
          title: "Aberto a oportunidades",
          detail: "Baseado em Aveiro. Remoto de preferência."
        }
      ]
    },
    experience: [
      {
        period: "Abril 2026 – Presente",
        title: "Cofundador",
        subtitle: "CrestPoint Tech",
        description:
          "Entrega websites, aplicações e automação para PME como serviço de software gerido, com mensalidade.",
        link: { href: crestPointHref, label: "crestpoint.pt" }
      },
      {
        period: "2026 – Defesa por marcar",
        title: "Tese de mestrado",
        subtitle: "NOVA FCT",
        description:
          "The Challenges in Learning and Teaching Software Modelling. Entregue e aceite; defesa por marcar.",
        link: { href: thesisHref, label: "Repositório da tese" }
      },
      {
        period: "Outubro 2025 – Fevereiro 2026",
        title: "Intercâmbio Erasmus · Wrocław, Polónia",
        subtitle: "Politechnika Wrocławska",
        description: "Intercâmbio a gerir a tese e as cadeiras."
      },
      {
        period: "Maio 2025 – Janeiro 2026",
        title: "Programador web",
        subtitle: "Fractory",
        description: "Programador web num estúdio fundado por colegas da universidade."
      },
      {
        period: "2021 – 2026",
        title: "Mestrado Integrado em Engenharia Informática",
        subtitle: "NOVA FCT",
        description: "Engenharia Informática na Faculdade de Ciências e Tecnologia da Universidade NOVA de Lisboa."
      }
    ],
    achievements: [
      {
        title: "2.º melhor projeto do ano: EcoTrecko",
        detail:
          "Projeto de equipa no 3.º ano, o último ano da fase de licenciatura do Mestrado Integrado. Ficou em 2.º lugar entre mais de 20 projetos desse ano."
      },
      {
        title: "Connecting Humanity Award: Hive Control",
        detail:
          "Projeto de equipa na cadeira de empreendedorismo, no 1.º ano de mestrado (4.º ano). A cadeira é comum a todos os cursos da FCT e teve mais de 50 equipas. O Hive Control, um conector open-source para sistemas IoT distribuídos, recebeu o Connecting Humanity Award da NOS, um de cinco prémios atribuídos."
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
