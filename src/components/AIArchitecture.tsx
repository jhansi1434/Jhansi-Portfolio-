import { Fragment } from "react";
import { ArrowRight, Code2, Database, GitBranch, MessageSquare, User, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const architectureNodes = [
  { label: "User", detail: "Intent & context", icon: User },
  { label: "AI chat", detail: "Conversational interface", icon: MessageSquare },
  { label: "LangGraph agents", detail: "Reasoning & orchestration", icon: GitBranch },
  { label: "Tools / MCP", detail: "Tools & integrations", icon: Wrench },
  { label: "APIs", detail: "Services & enterprise systems", icon: Code2 },
  { label: "Database", detail: "Application data", icon: Database },
];

const AIArchitecture = () => (
  <section
    id="ai-system"
    className="section architecture-section"
    aria-labelledby="architecture-heading"
  >
    <div className="site-container">
      <ScrollReveal>
        <SectionHeading
          id="architecture-heading"
          eyebrow="AI engineering"
          title="From intent to action"
          description="A conceptual view of how human input, agent workflows, tools, APIs, and application data work together."
        />
      </ScrollReveal>

      <ScrollReveal className="architecture-reveal">
        <div className="architecture-panel">
          <p className="architecture-panel__label">
            <span className="status-dot" aria-hidden="true" />
            A connected system, designed with people in the loop
          </p>
          <div className="architecture-flow" role="list" aria-label="Conceptual AI system flow">
            {architectureNodes.map((node, index) => {
              const Icon = node.icon;

              return (
                <Fragment key={node.label}>
                  <article className="architecture-node" role="listitem">
                    <span className="architecture-node__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="architecture-node__copy">
                      <strong>{node.label}</strong>
                      <small>{node.detail}</small>
                    </span>
                  </article>
                  {index < architectureNodes.length - 1 && (
                    <span className="architecture-connector" aria-hidden="true">
                      <ArrowRight />
                    </span>
                  )}
                </Fragment>
              );
            })}
          </div>
          <div className="architecture-panel__footer">
            <span>Human-in-the-loop workflows</span>
            <span>Tools & MCP integrations</span>
            <span>Enterprise APIs & data</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AIArchitecture;

