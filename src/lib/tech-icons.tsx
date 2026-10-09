import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons";
import { DiAngularSimple, DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiDart,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLatex,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOcaml,
  SiOpengl,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiWebgl
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Braces,
  ClipboardList,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layers,
  Layout,
  MonitorSmartphone,
  Palette,
  Paintbrush,
  Server,
  Sparkles,
  Spline,
  Waypoints,
  Workflow,
  Wrench,
  type LucideIcon
} from "lucide-react";

type TechIcon = IconType | LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

/** Hexagon C language mark (monochrome), matching the C# badge style. */
function IconClang(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden fill="currentColor" stroke="none" {...props}>
      <path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Z" />
    </svg>
  );
}

/** Official-style C# hexagon mark from Simple Icons (currentColor). */
function IconCsharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden fill="currentColor" stroke="none" {...props}>
      <path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" />
    </svg>
  );
}

/** Official Cursor editor mark (Simple Icons), fill-only so it stays crisp at chip size. */
function IconCursor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden fill="currentColor" stroke="none" {...props}>
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  );
}

const techIconMap: Record<string, TechIcon> = {
  Java: DiJava,
  OCaml: SiOcaml,
  C: IconClang,
  "C#": IconCsharp,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: Database,
  HTML: SiHtml5,
  Dart: SiDart,
  React: SiReact,
  "Next.js": SiNextdotjs,
  AngularJS: DiAngularSimple,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,
  "Three.js": SiThreedotjs,
  WebGL: SiWebgl,
  OpenGL: SiOpengl,
  Spline: Spline,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Firebase: SiFirebase,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  pandas: SiPandas,
  NumPy: SiNumpy,
  AWS: FaAws,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  "VS Code": VscVscode,
  Cursor: IconCursor,
  "Android Studio": SiAndroidstudio,
  Figma: SiFigma,
  Postman: SiPostman,
  LaTeX: SiLatex,
  "UI/UX": Paintbrush,
  "Responsive Design": MonitorSmartphone,
  "Performance Optimization": Gauge,
  "Software Modelling": Workflow,
  "Modelação de Software": Workflow,
  UML: Waypoints,
  "Requirements Engineering": ClipboardList,
  "Engenharia de Requisitos": ClipboardList
};

export const groupHeaderIcons: LucideIcon[] = [
  Braces,
  Layout,
  Server,
  Cpu,
  Cloud,
  Wrench,
  Layers,
  Palette
];

export const DailyDriversLegendIcon = Sparkles;

export function getTechIcon(name: string): TechIcon {
  return techIconMap[name] ?? Braces;
}

export function sortGroupItems(items: string[], dailyDrivers: ReadonlySet<string>): string[] {
  const drivers = items.filter((item) => dailyDrivers.has(item));
  const rest = items.filter((item) => !dailyDrivers.has(item));
  return [...drivers, ...rest];
}
