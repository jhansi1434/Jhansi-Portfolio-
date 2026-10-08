import { Brain, Cloud, Code2, Database, LayoutGrid, Server, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/lib/data";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces & applications",
    icon: LayoutGrid,
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    description: "Services & real-time systems",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Webhooks",
    ],
  },
  {
    title: "AI & GenAI",
    description: "Agents, retrieval & orchestration",
    icon: Brain,
    skills: [
      "LangGraph",
      "LangChain",
      "CopilotKit",
      "OpenAI API",
      "RAG",
      "LLMs",
      "Human-in-the-Loop",
      "MCP",
    ],
  },
  {
    title: "Database",
    description: "Data models & persistence",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure & delivery",
    icon: Cloud,
    skills: ["GCP", "Docker", "Kubernetes"],
  },
] as const;

const categorizedSkills = new Set<string>(skillGroups.flatMap((group) => [...group.skills]));
const additionalSkills = skillsData.filter((skill) => !categorizedSkills.has(skill));
const displayGroups = [
  ...skillGroups,
  ...(additionalSkills.length > 0
    ? [
        {
          title: "Integrations & tooling",
          description: "Connected services & developer tools",
          icon: Wrench,
          skills: additionalSkills,
        },
      ]
    : []),
];

const Skills = () => (
  <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
    <div className="site-container">
      <ScrollReveal>
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="A foundation across the stack"
          description="A practical toolkit for shaping interfaces, services, AI workflows, data, and cloud applications."
        />
      </ScrollReveal>

      <div className="skills-grid">
        {displayGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <ScrollReveal
              key={group.title}
              className="skill-group-reveal"
              delay={Math.min(index * 55, 220)}
            >
              <article className="skill-group">
                <div className="skill-group__header">
                  <span className="skill-group__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="skill-group__heading">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </span>
                </div>
                <ul className="skill-pills" aria-label={`${group.title} technologies`}>
                  {group.skills.map((skill) => (
                    <li className="skill-pill" key={skill}>
                      <Code2 className="skill-pill__icon" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

