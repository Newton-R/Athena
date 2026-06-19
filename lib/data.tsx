import {
  BarChart3Icon,
  BrainIcon,
  DatabaseIcon,
  FileTextIcon,
  GitBranchIcon,
  Rocket,
  WrenchIcon,
  ZapIcon,
} from "lucide-react";

export const learningTopics = [
  {
    icon: <BrainIcon size={36} />,
    heading: "Agent Architecture",
    description:
      "Learn how AI agents are structured, how responsibilities are divided between components, and how different agent patterns can be used to solve complex tasks.",
  },
  {
    icon: <WrenchIcon size={36} />,
    heading: "Tool Calling",
    description:
      "Understand how AI models interact with external APIs, databases, and services to perform actions and access information beyond their built-in knowledge.",
  },
  {
    icon: <FileTextIcon size={36} />,
    heading: "Prompt Engineering",
    description:
      "Explore techniques for designing effective prompts, instructions, and workflows that help AI systems produce reliable and consistent outputs.",
  },
  {
    icon: <BarChart3Icon size={36} />,
    heading: "Structured Outputs",
    description:
      "Learn how to generate predictable, machine-readable responses that can be validated, stored, and integrated into larger software systems.",
  },
  {
    icon: <DatabaseIcon size={36} />,
    heading: "Memory Systems",
    description:
      "Discover how AI agents manage context, retain important information, and use memory to provide more personalized and effective assistance.",
  },
  {
    icon: <GitBranchIcon size={36} />,
    heading: "Workflow Orchestration",
    description:
      "Understand how multiple AI tasks can be coordinated into structured workflows, enabling agents to reason through problems step by step.",
  },
  {
    icon: <ZapIcon size={36} />,
    heading: "Vercel AI SDK",
    description:
      "Learn how modern AI applications are built using the Vercel AI SDK, including streaming responses, provider integrations, and agent workflows.",
  },
  {
    icon: <Rocket size={36} />,
    heading: "AI Product Development",
    description:
      "Follow the process of transforming an AI concept into a real-world application, from planning and architecture to deployment and iteration.",
  },
];

export const tools = [
  {
    name: "Vercel AI SDK",
    image: "/vercel-icon.png",
    tags: ["AI Integration", "Streaming", "Agent Workflows"],
  },
  {
    name: "Next.js",
    image: "/next.svg",
    tags: ["Full Stack", "React Framework", "Server Components"],
  },
  {
    name: "TypeScript",
    image: "/typescript.svg",
    tags: ["Type Safety", "Scalable Code", "Developer Experience"],
  },
  // {
  //   name: "Tailwind CSS",
  //   image: "/tailwind.svg",
  //   tags: ["Styling", "Responsive UI", "Fast Development"],
  // },
  // {
  //   name: "Shadcn UI",
  //   image: "/shadcn.svg",
  //   tags: ["UI Components", "Accessible", "Customizable"],
  // },
  // {
  //   name: "PostgreSQL",
  //   image: "/postgres.svg",
  //   tags: ["Database", "Data Storage", "Scalable"],
  // },
  // {
  //   name: "Prisma",
  //   image: "/prisma.svg",
  //   tags: ["ORM", "Database Management", "Type Safe"],
  // },
];
