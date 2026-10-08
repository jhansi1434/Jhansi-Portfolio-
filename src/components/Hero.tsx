import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

const heroTechnologies = [
  "React",
  "Next.js",
  "Python",
  "LangGraph",
  "OpenAI",
  "FastAPI",
];

const Hero = () => (
  <section id="home" className="hero-section" aria-labelledby="hero-title">
    <div className="hero-container">
      <div className="hero-copy">
        <p className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          AI · Full Stack · Product engineering
        </p>

        <h1 id="hero-title" className="hero-title">
          AI Full Stack
          <br />
          <span className="hero-title__accent">Developer.</span>
        </h1>

        <p className="hero-summary">
          I&apos;m Naga Jhansi, an AI Full Stack Developer with 4 years of experience
          building modern web and mobile products. I bring thoughtful interfaces,
          dependable backends, and generative AI together to solve real product
          problems.
        </p>

        <ul className="hero-technology-list" aria-label="Core technologies">
          {heroTechnologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="hero-actions">
          <button
            type="button"
            className="button button--primary"
            onClick={() => scrollToSection("projects")}
          >
            <span>View projects</span>
            <ArrowRight aria-hidden="true" />
          </button>
          <button
            type="button"
            className="button button--secondary"
            onClick={() => scrollToSection("contact")}
          >
            <Mail aria-hidden="true" />
            <span>Contact me</span>
          </button>
          <a
            className="button button--quiet"
            href={`${import.meta.env.BASE_URL}resume/Naga_Jhansi_AI_FullStack_Developer.pdf`}
            download="Naga_Jhansi_AI_FullStack_Developer.pdf"
          >
            <Download aria-hidden="true" />
            <span>Download resume</span>
          </a>
        </div>

        <p className="hero-current-role">
          Currently building at <strong>Zelarsoft Private Limited</strong>
          <span aria-hidden="true"> · </span>Hyderabad
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}Images/ai-neural-field.png`}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-visual__wash" />
        <div className="hero-visual__topline">
          <span className="hero-visual__live"><span /> SYSTEMS IN MOTION</span>
          <span className="hero-visual__index">01 / 06</span>
        </div>
        <div className="hero-visual__caption">
          <span className="hero-visual__caption-icon">NJ</span>
          <span>
            <strong>Intelligent systems</strong>
            <small>Agents · APIs · Applications</small>
          </span>
          <span className="hero-visual__signal" />
        </div>
      </div>
    </div>

    <button
      type="button"
      className="hero-scroll-cue"
      onClick={() => scrollToSection("about")}
      aria-label="Scroll to the about section"
    >
      <span>Scroll to explore</span>
      <ArrowDown aria-hidden="true" />
    </button>
  </section>
);

export default Hero;

