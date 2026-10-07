export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type NavItem = { id: string; label: string };
type SectionHeading = { eyebrow: string; title: string; description: string };

type Project = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  role: string;
  image: string;
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
};

type Achievement = {
  title: string;
  detail: string;
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
      availability: "Co-founder at CrestPoint Tech · Lisbon",
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
      enlargedAlt: "enlarged screenshot"
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
        "I co-founded CrestPoint Tech with two colleagues. I also build web and mobile products, including client work at Fractory and university projects at NOVA FCT in Lisbon.",
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
        title: "Client screenshots and a university project",
        description:
          "SafetyScope and Kinesis are client work from Fractory, shown as screenshots under NDA. EcoTrecko is a 3rd-year team project."
      },
      stack: {
        eyebrow: "Tech stack",
        title: "Tools behind the work on this page",
        description: "What this site is built with, and what EcoTrecko was built with. I leave off tools I cannot point to here."
      },
      about: {
        eyebrow: "About me",
        title: "How I work, and what I care about",
        description: "A short background, the things I keep practicing, and the languages I use."
      },
      experience: {
        eyebrow: "Experience",
        title: "CrestPoint, Fractory, and NOVA FCT",
        description: "The company I co-founded, client work, my thesis, Erasmus, and the degree."
      },
      achievements: {
        eyebrow: "Achievements",
        title: "Two projects that were recognized",
        description: "A ranking from the bachelor's phase, and an award from a course shared across FCT."
      },
      contact: {
        eyebrow: "Contact",
        title: "Say hello",
        description: "Email is the most direct way to reach me. CrestPoint Tech has a public site."
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
    techGroups: [
      {
        title: "Web",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git", "GitHub"]
      },
      {
        title: "Mobile",
        items: ["Flutter", "Dart", "Firebase", "Figma"]
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
        "An Erasmus exchange in Poland, while I was writing my thesis and taking courses, took me out of my comfort zone. I had to be more autonomous and keep several things going in a country that was not mine. I made close friendships there, and I came home with a deeper appreciation of my Ukrainian heritage. I already spoke Ukrainian; in Poland I learned to read and write it, and I learned a lot of Polish."
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
          detail: "Erasmus in Poland meant handling the thesis and coursework at the same time, away from home."
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
          "I founded CrestPoint Tech with two colleagues. The company was previously named Infinitech. The work includes Soregi and Nato-Interpret, both private client projects, with no public links.",
        link: { href: crestPointHref, label: "crestpoint.pt" }
      },
      {
        period: "May 2025 — January 2026",
        title: "Web Developer",
        subtitle: "Fractory",
        description:
          "Fractory was founded by several of my university colleagues. I worked on SafetyScope, Kinesis, and SeekData. The work is under NDA, so I can show screenshots only, with no public demos or code. SafetyScope's company has since closed, so its product dashboards cannot be shown."
      },
      {
        period: "During the Integrated Master's",
        title: "Erasmus exchange",
        subtitle: "Poland",
        description: "I spent part of my studies on exchange in Poland, while managing my thesis and my courses abroad."
      },
      {
        period: "Submitted — defense to be scheduled",
        title: "Master's thesis",
        subtitle: "NOVA FCT",
        description:
          "The Challenges in Learning and Teaching Software Modelling. The thesis is submitted and accepted. I am waiting for the defense date to be set, after which my studies are complete.",
        link: { href: thesisHref, label: "Thesis repository" }
      },
      {
        period: "2021 — 2026",
        title: "Integrated Master's in Computer Engineering",
        subtitle: "NOVA FCT, Lisbon",
        description:
          "Engenharia Informática at Faculdade de Ciências e Tecnologia, Universidade NOVA de Lisboa. I chose not to split the degree into a separate bachelor's and master's."
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
      location: "Lisbon, Portugal"
    },
    footer: "© 2026 Yaroslav Hayduk. Built with Next.js and Tailwind CSS."
  },
  pt: {
    ui: {
      languageLabel: "Idioma",
      themeLabel: "Alternar tema",
      availability: "Cofundador na CrestPoint Tech · Lisboa",
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
      enlargedAlt: "captura ampliada"
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
        "Cofundei a CrestPoint Tech com dois colegas. Também desenvolvo produtos para a web e para telemóvel, incluindo trabalho de cliente na Fractory e projetos na NOVA FCT, em Lisboa.",
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
        title: "Capturas de cliente e um projeto de universidade",
        description:
          "A SafetyScope e a Kinesis são trabalho de cliente na Fractory, mostrado em capturas sob NDA. O EcoTrecko é um projeto de equipa do 3.º ano."
      },
      stack: {
        eyebrow: "Tecnologias",
        title: "Ferramentas por trás do que está nesta página",
        description: "O que este site usa, e o que o EcoTrecko usou. Deixo de fora ferramentas que não consigo apontar aqui."
      },
      about: {
        eyebrow: "Sobre mim",
        title: "Como trabalho, e o que me importa",
        description: "Um pouco de percurso, o que continuo a praticar, e as línguas que uso."
      },
      experience: {
        eyebrow: "Percurso",
        title: "CrestPoint, Fractory e NOVA FCT",
        description: "A empresa que cofundei, o trabalho de cliente, a tese, o Erasmus e o curso."
      },
      achievements: {
        eyebrow: "Prémios",
        title: "Dois projetos que foram reconhecidos",
        description: "Uma classificação da fase de licenciatura, e um prémio de uma cadeira comum na FCT."
      },
      contact: {
        eyebrow: "Contacto",
        title: "Olá",
        description: "O email é a forma mais direta de falar comigo. A CrestPoint Tech tem um site público."
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
    techGroups: [
      {
        title: "Web",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git", "GitHub"]
      },
      {
        title: "Telemóvel",
        items: ["Flutter", "Dart", "Firebase", "Figma"]
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
        "Um Erasmus na Polónia, enquanto escrevia a tese e fazia cadeiras, tirou-me da zona de conforto. Tive de ser mais autónomo e de manter várias coisas ao mesmo tempo, num país que não era o meu. Fiz amizades fortes e voltei com mais apreço pela minha herança ucraniana. Já falava ucraniano; na Polónia aprendi a lê-lo e a escrevê-lo, e aprendi bastante polaco."
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
          detail: "O Erasmus na Polónia significou gerir a tese e as cadeiras ao mesmo tempo, longe de casa."
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
          "Fundei a CrestPoint Tech com dois colegas. A empresa chamava-se antes Infinitech. O trabalho inclui a Soregi e o Nato-Interpret, ambos projetos privados de clientes, sem ligações públicas.",
        link: { href: crestPointHref, label: "crestpoint.pt" }
      },
      {
        period: "Maio 2025 — Janeiro 2026",
        title: "Programador web",
        subtitle: "Fractory",
        description:
          "A Fractory foi fundada por vários colegas da universidade. Trabalhei na SafetyScope, na Kinesis e na SeekData. O trabalho está sob NDA, por isso só posso mostrar capturas de ecrã, sem demonstrações públicas nem código. A empresa da SafetyScope entretanto encerrou, pelo que os painéis do produto não podem ser mostrados."
      },
      {
        period: "Durante o Mestrado Integrado",
        title: "Intercâmbio Erasmus",
        subtitle: "Polónia",
        description: "Passei parte do curso em Erasmus na Polónia, a gerir a tese e as cadeiras no estrangeiro."
      },
      {
        period: "Entregue — defesa por marcar",
        title: "Tese de mestrado",
        subtitle: "NOVA FCT",
        description:
          "The Challenges in Learning and Teaching Software Modelling. A tese foi entregue e aceite. Estou à espera que seja marcada a defesa; depois disso, o curso fica concluído.",
        link: { href: thesisHref, label: "Repositório da tese" }
      },
      {
        period: "2021 — 2026",
        title: "Mestrado Integrado em Engenharia Informática",
        subtitle: "NOVA FCT, Lisboa",
        description:
          "Engenharia Informática na Faculdade de Ciências e Tecnologia da Universidade NOVA de Lisboa. Optei por não dividir o curso num bacharelato e num mestrado separados."
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
      location: "Lisboa, Portugal"
    },
    footer: "© 2026 Yaroslav Hayduk. Feito com Next.js e Tailwind CSS."
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
