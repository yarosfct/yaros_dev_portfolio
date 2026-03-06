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
};

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
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

export type PortfolioDictionary = {
  ui: {
    languageLabel: string;
    themeLabel: string;
    availability: string;
    projectContributionLabel: string;
    demoLabel: string;
    navGitHub: string;
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
  sectionHeadings: Record<"projects" | "stack" | "about" | "experience" | "education" | "achievements" | "contact", SectionHeading>;
  projects: Project[];
  techGroups: TechGroup[];
  about: string[];
  experience: TimelineItem[];
  education: TimelineItem[];
  achievements: string[];
  contact: Contact;
  footer: string;
};

export const dictionaries: Record<Locale, PortfolioDictionary> = {
  en: {
    ui: {
      languageLabel: "Language",
      themeLabel: "Toggle theme",
      availability: "Open to frontend and full-stack opportunities",
      projectContributionLabel: "My contribution",
      demoLabel: "Demo",
      navGitHub: "GitHub"
    },
    nav: [
      { id: "hero", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "stack", label: "Stack" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "Full stack developer focused on modern frontend experiences",
      pitch: "I design and ship performant, accessible products that feel polished from first click to final interaction.",
      ctas: {
        projects: "View Projects",
        contact: "Get in Touch",
        experience: "See Experience",
        github: "GitHub"
      },
      highlights: [
        { value: "2+", label: "Years building real-world web apps" },
        { value: "100%", label: "Focus on UX quality, accessibility, and performance" }
      ]
    },
    sectionHeadings: {
      projects: {
        eyebrow: "Featured Work",
        title: "Projects that blend engineering and product thinking",
        description: "A curated set of recent builds with emphasis on usability, architecture, and delivery impact."
      },
      stack: {
        eyebrow: "Tech Stack",
        title: "Tools I rely on to build production-ready products",
        description: "Curated around frontend impact and full-stack delivery, with supporting tools I use in production."
      },
      about: {
        eyebrow: "About Me",
        title: "Developer with a frontend-first product mindset",
        description: "I enjoy turning complex requirements into clean interfaces backed by reliable architecture."
      },
      experience: {
        eyebrow: "Experience",
        title: "Professional highlights",
        description: "A quick timeline of roles, ownership areas, and outcomes."
      },
      education: {
        eyebrow: "Education",
        title: "Academic foundation",
        description: "Formal education and continuous learning milestones."
      },
      achievements: {
        eyebrow: "Achievements",
        title: "Certifications and milestones",
        description: "Selected accomplishments that reflect consistency and growth."
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s build something meaningful",
        description: "Open to frontend and full-stack opportunities, remote or hybrid."
      }
    },
    projects: [
      {
        id: "project-safetyscope",
        title: "SafetyScope Platform",
        summary: "Full-stack safety management platform with incident tracking, role-based dashboards, and clear reporting flows.",
        stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
        impact: "Built end-to-end features with stronger ownership on frontend architecture, UX flows, and component implementation.",
        role: "Full stack (Frontend-focused)",
        image: "/images/SafetyMain.png",
        gallery: ["/images/SafetyMain.png", "/images/SafetyAbout.png", "/images/SafetyContact.png"]
      },
      {
        id: "project-kinesis",
        title: "Kinesis Event Platform",
        summary: "Event management platform that supports ticket buying, ticket reselling, event hosting, and attendee management.",
        stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        impact: "Contributed across the full stack with bigger ownership on frontend implementation, UX flows, and interactive pages.",
        role: "Full stack (Frontend-focused)",
        image: "/images/KinesisHero.png",
        gallery: ["/images/KinesisHero.png", "/images/KinesisLogin.png"]
      },
      {
        id: "project-ecotrecko",
        title: "EcoTrecko Mobile App",
        summary: "Mobile app concept focused on helping users track eco-friendly habits and reduce their daily environmental footprint.",
        stack: ["Flutter", "Dart", "Firebase", "Figma"],
        impact: "Designed and built the app experience from concept to poster-ready prototype, including UI flow and sustainability features.",
        role: "Mobile App Developer",
        image: "/images/ecotrecko_poster.jpeg",
        imageFit: "contain"
      }
    ],
    techGroups: [
      {
        title: "Frontend Engineering",
        items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
      },
      {
        title: "Full stack Delivery",
        items: ["Node.js", "PostgreSQL", "Supabase", "API Design", "Microservices", "SQL"]
      },
      {
        title: "Platform & DevOps",
        items: ["Docker", "AWS", "Vercel", "GCP", "Kubernetes", "MongoDB"]
      },
      {
        title: "Workflow & Product Craft",
        items: ["Git", "GitHub", "Figma", "Three.js", "Flutter", "Firebase"]
      }
    ],
    about: [
      "I am a full stack developer with strong frontend depth, focused on crafting user-centric interfaces with clean architecture.",
      "I care deeply about details: typography, spacing, accessibility, and performance are all part of how I define quality.",
      "My preferred environment combines product collaboration, rapid iteration, and high engineering standards."
    ],
    experience: [
      {
        period: "2023 — Present",
        title: "Senior Frontend Engineer",
        subtitle: "Product Studio (Placeholder)",
        description: "Led frontend initiatives for SaaS clients, introduced design-system standards, and improved release velocity."
      },
      {
        period: "2021 — 2023",
        title: "Full stack Developer",
        subtitle: "Scale-up Team (Placeholder)",
        description: "Delivered customer-facing product modules end-to-end and improved API-to-UI integration consistency."
      }
    ],
    education: [
      {
        period: "2017 — 2021",
        title: "B.Sc. in Computer Science",
        subtitle: "University Placeholder",
        description: "Focused on software engineering, human-computer interaction, and distributed systems."
      }
    ],
    achievements: [
      "AWS Certified Developer – Associate (Placeholder)",
      "Top 5% engineering contributor in internal performance review (Placeholder)",
      "Speaker at local frontend meetup: Designing for perceived performance"
    ],
    contact: {
      email: "slavikcp@gmail.com",
      linkedin: "https://www.linkedin.com/in/yaroslav-hayduk-a1a563206/",
      github: "https://github.com/yarosfct",
      location: "Europe · Open to remote/hybrid"
    },
    footer: "© 2026 Yaroslav Hayduk. Built with Next.js and Tailwind CSS."
  },
  pt: {
    ui: {
      languageLabel: "Idioma",
      themeLabel: "Alternar tema",
      availability: "Disponível para oportunidades frontend e full stack",
      projectContributionLabel: "Minha contribuição",
      demoLabel: "Demo",
      navGitHub: "GitHub"
    },
    nav: [
      { id: "hero", label: "Início" },
      { id: "projects", label: "Projetos" },
      { id: "stack", label: "Stack" },
      { id: "about", label: "Sobre" },
      { id: "contact", label: "Contato" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "Desenvolvedor full stack focado em experiências frontend modernas",
      pitch: "Desenvolvo e entrego produtos de alto desempenho e acessiveis, com atencao aos detalhes em cada interacao.",
      ctas: {
        projects: "Ver Projetos",
        contact: "Entrar em Contato",
        experience: "Ver Experiência",
        github: "GitHub"
      },
      highlights: [
        { value: "2+", label: "Anos a desenvolver apps web reais" },
        { value: "100%", label: "Foco em UX, acessibilidade e performance" }
      ]
    },
    sectionHeadings: {
      projects: {
        eyebrow: "Projetos em Destaque",
        title: "Projetos que unem engenharia e visão de produto",
        description: "Uma seleção de trabalhos recentes com foco em usabilidade, arquitetura e impacto real."
      },
      stack: {
        eyebrow: "Tecnologias",
        title: "Ferramentas que uso para construir produtos prontos para produção",
        description: "Curado para destacar impacto em frontend, entrega full stack e ferramentas que uso em producao."
      },
      about: {
        eyebrow: "Sobre Mim",
        title: "Desenvolvedor com mentalidade de produto e foco em frontend",
        description: "Gosto de transformar requisitos complexos em interfaces limpas e arquitetura confiável."
      },
      experience: {
        eyebrow: "Experiência",
        title: "Destaques profissionais",
        description: "Resumo das funções, responsabilidades e resultados alcançados."
      },
      education: {
        eyebrow: "Formação",
        title: "Base acadêmica",
        description: "Educação formal e marcos de aprendizado contínuo."
      },
      achievements: {
        eyebrow: "Conquistas",
        title: "Certificações e marcos",
        description: "Principais conquistas que refletem consistência e evolução profissional."
      },
      contact: {
        eyebrow: "Contato",
        title: "Vamos construir algo relevante",
        description: "Disponível para oportunidades frontend e full stack, remotas ou híbridas."
      }
    },
    projects: [
      {
        id: "project-safetyscope",
        title: "Plataforma SafetyScope",
        summary: "Plataforma full stack para gestao de seguranca com registro de incidentes, dashboards por perfil e fluxos de relatorios.",
        stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
        impact: "Implementei funcionalidades end-to-end com maior foco em frontend, arquitetura de interface e UX.",
        role: "Full stack (foco em frontend)",
        image: "/images/SafetyMain.png",
        gallery: ["/images/SafetyMain.png", "/images/SafetyAbout.png", "/images/SafetyContact.png"]
      },
      {
        id: "project-kinesis",
        title: "Plataforma de Eventos Kinesis",
        summary: "Plataforma de eventos que permite compra de ingressos, revenda de ingressos, criacao de eventos e gestao de participantes.",
        stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        impact: "Contribui no full stack com maior foco em frontend, fluxos de UX e implementacao de telas interativas.",
        role: "Full stack (foco em frontend)",
        image: "/images/KinesisHero.png",
        gallery: ["/images/KinesisHero.png", "/images/KinesisLogin.png"]
      },
      {
        id: "project-ecotrecko",
        title: "Aplicativo Mobile EcoTrecko",
        summary: "Conceito de app mobile focado em ajudar pessoas a acompanhar habitos sustentaveis e reduzir o impacto ambiental no dia a dia.",
        stack: ["Flutter", "Dart", "Firebase", "Figma"],
        impact: "Desenhei e desenvolvi a experiencia do app do conceito ao prototipo com poster, incluindo fluxo de UI e funcionalidades de sustentabilidade.",
        role: "Desenvolvedor Mobile",
        image: "/images/ecotrecko_poster.jpeg",
        imageFit: "contain"
      }
    ],
    techGroups: [
      {
        title: "Engenharia Frontend",
        items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
      },
      {
        title: "Entrega Full stack",
        items: ["Node.js", "PostgreSQL", "Supabase", "API Design", "Microservices", "SQL"]
      },
      {
        title: "Plataforma e DevOps",
        items: ["Docker", "AWS", "Vercel", "GCP", "Kubernetes", "MongoDB"]
      },
      {
        title: "Workflow e Produto",
        items: ["Git", "GitHub", "Figma", "Three.js", "Flutter", "Firebase"]
      }
    ],
    about: [
      "Sou desenvolvedor full stack com forte profundidade em frontend, focado em interfaces centradas no usuário com arquitetura limpa.",
      "Valorizo detalhes: tipografia, espaçamento, acessibilidade e performance fazem parte da minha definição de qualidade.",
      "Prefiro ambientes com colaboração próxima ao produto, iteração rápida e alto padrão de engenharia."
    ],
    experience: [
      {
        period: "2023 — Atual",
        title: "Engenheiro Frontend Sênior",
        subtitle: "Estúdio de Produto (Placeholder)",
        description: "Liderei iniciativas frontend para clientes SaaS, introduzi padrões de design system e acelerei entregas."
      },
      {
        period: "2021 — 2023",
        title: "Desenvolvedor Full stack",
        subtitle: "Equipe de Scale-up (Placeholder)",
        description: "Entreguei módulos de produto ponta a ponta e melhorei a consistência de integração entre API e UI."
      }
    ],
    education: [
      {
        period: "2017 — 2021",
        title: "Bacharelado em Ciência da Computação",
        subtitle: "Universidade Placeholder",
        description: "Foco em engenharia de software, interação humano-computador e sistemas distribuídos."
      }
    ],
    achievements: [
      "AWS Certified Developer – Associate (Placeholder)",
      "Top 5% de contribuição de engenharia em avaliação interna (Placeholder)",
      "Palestrante em meetup de frontend: Design para performance percebida"
    ],
    contact: {
      email: "slavikcp@gmail.com",
      linkedin: "https://www.linkedin.com/in/yaroslav-hayduk-a1a563206/",
      github: "https://github.com/yarosfct",
      location: "Europa · Aberto a remoto/híbrido"
    },
    footer: "© 2026 Yaroslav Hayduk. Construído com Next.js e Tailwind CSS."
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
