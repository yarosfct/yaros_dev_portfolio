import type { IconType } from "react-icons";
import { DiAngularSimple, DiDotnet, DiJava } from "react-icons/di";
import {
  SiAmazonwebservices,
  SiAndroidstudio,
  SiC,
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
  SiNvidia,
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
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layout,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  Paintbrush,
  Server,
  Spline,
  Wrench,
  type LucideIcon
} from "lucide-react";

type TechIcon = IconType | LucideIcon;

const techIconMap: Record<string, TechIcon> = {
  Java: DiJava,
  OCaml: SiOcaml,
  C: SiC,
  "C#": DiDotnet,
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
  CUDA: SiNvidia,
  AWS: SiAmazonwebservices,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  "VS Code": VscVscode,
  Cursor: MousePointer2,
  "Android Studio": SiAndroidstudio,
  Figma: SiFigma,
  Postman: SiPostman,
  LaTeX: SiLatex,
  "UI/UX": Paintbrush,
  "Responsive Design": MonitorSmartphone,
  "Performance Optimization": Gauge
};

export const groupHeaderIcons: LucideIcon[] = [Braces, Layout, Server, Cpu, Cloud, Wrench, Palette];

export function getTechIcon(name: string): TechIcon {
  return techIconMap[name] ?? Braces;
}
