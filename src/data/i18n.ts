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
      { id: "experience", label: "Experience" },
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
        { value: "4+", label: "Years building production web products" },
        { value: "20+", label: "Delivered features across SaaS and marketplaces" },
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
        description: "Grouped by domain for clarity and quick updates when your stack evolves."
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
        id: "project-1",
        title: "SaaS Analytics Dashboard",
        summary: "Built a responsive analytics platform with role-based views, chart-heavy screens, and excellent performance metrics.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        impact: "Designed UI architecture and implemented reusable data visualization patterns.",
        role: "Frontend / Full stack",
        image: "/projects/project-1.svg",
        github: "https://github.com/",
        demo: "https://example.com"
      },
      {
        id: "project-2",
        title: "Developer Hiring Platform",
        summary: "Created a job marketplace with advanced filtering, profile pages, and streamlined recruiter workflows.",
        stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
        impact: "Owned onboarding funnel UX and delivered major conversion improvements.",
        role: "Product-focused Full stack",
        image: "/projects/project-2.svg",
        github: "https://github.com/"
      },
      {
        id: "project-3",
        title: "Real-time Collaboration App",
        summary: "Implemented collaborative document editing with real-time updates, comments, and permission management.",
        stack: ["TypeScript", "WebSockets", "Redis", "Docker"],
        impact: "Led frontend architecture and collaborated on real-time reliability strategy.",
        role: "Frontend Lead",
        image: "/projects/project-3.svg",
        demo: "https://example.com"
      }
    ],
    techGroups: [
      {
        title: "Languages",
        items: ["C", "Java", "Python", "JavaScript", "TypeScript", "Dart", "Kotlin", "SQL"]
      },
      {
        title: "Web Frontend",
        items: ["React.js", "Next.js", "Vue.js", "Angular", "Three.js", "Tailwind CSS", "HTML", "CSS"]
      },
      {
        title: "Backend & APIs",
        items: ["Node.js", "Supabase", "Web3.js", "API Design", "Microservices"]
      },
      {
        title: "Mobile & Cross‑platform",
        items: ["Flutter", "React Native", "Android SDK"]
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "MongoDB", "Firebase"]
      },
      {
        title: "Cloud & DevOps",
        items: ["AWS", "GCP", "Docker", "Kubernetes", "Vercel"]
      },
      {
        title: "Tools & Collaboration",
        items: ["Git", "GitHub", "Figma"]
      },
      {
        title: "Core Concepts",
        items: ["System Design", "Data Structures & Algorithms", "Distributed Systems"]
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
      email: "yaroslav@example.com",
      linkedin: "https://linkedin.com/in/your-profile",
      github: "https://github.com/your-profile",
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
      { id: "experience", label: "Experiência" },
      { id: "contact", label: "Contato" }
    ],
    hero: {
      name: "Yaroslav Hayduk",
      title: "Desenvolvedor full stack focado em experiências frontend modernas",
      pitch: "Projeto e entrego produtos performáticos e acessíveis, com acabamento cuidadoso em cada interação.",
      ctas: {
        projects: "Ver Projetos",
        contact: "Entrar em Contato",
        experience: "Ver Experiência",
        github: "GitHub"
      },
      highlights: [
        { value: "4+", label: "Anos construindo produtos web em produção" },
        { value: "20+", label: "Features entregues em SaaS e marketplaces" },
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
        description: "Organizadas por domínio para facilitar manutenção e futuras atualizações."
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
        id: "project-1",
        title: "Dashboard de Analytics SaaS",
        summary: "Plataforma responsiva de análise com visão por perfil, telas orientadas a gráficos e alta performance.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        impact: "Defini a arquitetura de interface e implementei padrões reutilizáveis de visualização de dados.",
        role: "Frontend / Full stack",
        image: "/projects/project-1.svg",
        github: "https://github.com/",
        demo: "https://example.com"
      },
      {
        id: "project-2",
        title: "Plataforma de Contratação de Devs",
        summary: "Marketplace de vagas com filtros avançados, páginas de perfil e fluxo otimizado para recrutadores.",
        stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
        impact: "Conduzi o UX do funil de onboarding e melhorei significativamente a conversão.",
        role: "Full stack com foco em produto",
        image: "/projects/project-2.svg",
        github: "https://github.com/"
      },
      {
        id: "project-3",
        title: "App de Colaboração em Tempo Real",
        summary: "Edição colaborativa de documentos com atualizações em tempo real, comentários e gestão de permissões.",
        stack: ["TypeScript", "WebSockets", "Redis", "Docker"],
        impact: "Liderei a arquitetura frontend e colaborei na estratégia de confiabilidade em tempo real.",
        role: "Líder de Frontend",
        image: "/projects/project-3.svg",
        demo: "https://example.com"
      }
    ],
    techGroups: [
      {
        title: "Linguagens",
        items: ["C", "Java", "Python", "JavaScript", "TypeScript", "Dart", "Kotlin", "SQL"]
      },
      {
        title: "Web Frontend",
        items: ["React.js", "Next.js", "Vue.js", "Angular", "Three.js", "Tailwind CSS", "HTML", "CSS"]
      },
      {
        title: "Backend & APIs",
        items: ["Node.js", "Supabase", "Web3.js", "API Design", "Microservices"]
      },
      {
        title: "Mobile & Cross‑platform",
        items: ["Flutter", "React Native", "Android SDK"]
      },
      {
        title: "Bancos de dados",
        items: ["PostgreSQL", "MongoDB", "Firebase"]
      },
      {
        title: "Cloud & DevOps",
        items: ["AWS", "GCP", "Docker", "Kubernetes", "Vercel"]
      },
      {
        title: "Ferramentas & Colaboração",
        items: ["Git", "GitHub", "Figma"]
      },
      {
        title: "Conceitos centrais",
        items: ["System Design", "Data Structures & Algorithms", "Distributed Systems"]
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
      email: "yaroslav@example.com",
      linkedin: "https://linkedin.com/in/your-profile",
      github: "https://github.com/your-profile",
      location: "Europa · Aberto a remoto/híbrido"
    },
    footer: "© 2026 Yaroslav Hayduk. Construído com Next.js e Tailwind CSS."
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
