import { ArrowRight, Atom, Brain, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { scrollToSection } from "@/lib/scroll-to-section";

const journey = [
  {
    icon: Atom,
    label: "A foundation in physics",
    detail: "M.Sc. in Physics · analytical thinking",
  },
  {
    icon: Code2,
    label: "Building across the stack",
    detail: "React · Next.js · Node.js · Python",
  },
  {
    icon: Brain,
    label: "Engineering with AI",
    detail: "LangGraph · CopilotKit · RAG · MCP",
  },
];

const About = () => (
  <section id="about" className="section about-section" aria-labelledby="about-heading">
    <div className="site-container">
      <ScrollReveal>
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="From physics to full-stack AI engineering"
          description="A career transition shaped by analytical thinking, curiosity, and a drive to build useful software."
        />
      </ScrollReveal>

      <div className="about-grid">
        <ScrollReveal className="about-copy">
          <p>
            After completing my <strong>M.Sc. in Physics</strong>, I moved into
            software development with the same curiosity and analytical mindset I
            had built through years of study. Since then, I have gained
            <strong> 4 years of professional experience</strong> building modern,
            scalable web and mobile applications.
          </p>
          <p>
            I work across <strong>React, Next.js, React Native, Node.js, and
            Python</strong>, and develop AI-powered enterprise applications using
            <strong> LangGraph, LangChain, CopilotKit, OpenAI APIs, and RAG</strong>.
            My project experience spans healthcare, e-commerce, utility billing,
            and DevOps automation.
          </p>
          <p>
            I enjoy solving real-world problems through technology, learning new
            frameworks, and keeping up with the latest developments in AI and
            modern web development. I&apos;m currently an
            <strong> AI Full Stack Developer at Zelarsoft Private Limited</strong>.
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => scrollToSection("projects")}
          >
            Explore selected work <ArrowRight aria-hidden="true" />
          </button>
        </ScrollReveal>

        <ScrollReveal className="about-journey" delay={100}>
          <div className="journey-card">
            <div className="journey-card__header">
              <span className="journey-card__eyebrow">THE JOURNEY</span>
              <span className="journey-card__count">01 — 03</span>
            </div>
            <ol className="journey-list">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <li className="journey-step" key={step.label}>
                    <span className="journey-step__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="journey-step__copy">
                      <span className="journey-step__number">0{index + 1}</span>
                      <strong>{step.label}</strong>
                      <small>{step.detail}</small>
                    </span>
                  </li>
                );
              })}
            </ol>
            <div className="journey-card__footer">
              <span className="journey-stat">
                <strong>4 years</strong>
                <small>professional experience</small>
              </span>
              <span className="journey-stat__divider" aria-hidden="true" />
              <span className="journey-stat">
                <strong>4 domains</strong>
                <small>real-world applications</small>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;

