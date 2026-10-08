import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container">
      <div className="footer-main">
        <div className="footer-brand-block">
          <button
            type="button"
            className="brand footer-brand"
            onClick={() => scrollToSection("home")}
            aria-label="Naga Jhansi — back to home"
          >
            <span className="brand-mark" aria-hidden="true">NJ</span>
            <span className="brand-copy">
              <span className="brand-name">Naga Jhansi</span>
              <span className="brand-role">AI Full Stack Developer</span>
            </span>
          </button>
          <p>Building thoughtful applications across AI and the full stack.</p>
        </div>

        <div className="footer-actions">
          <div className="footer-socials" aria-label="Social links">
            <a href="mailto:jhansipasupaleti48@gmail.com" aria-label="Email Naga Jhansi">
              <Mail aria-hidden="true" />
            </a>
            <a
              href="https://github.com/jhansi1434"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github aria-hidden="true" />
            </a>
            <span
              className="footer-socials__pending"
              aria-label="LinkedIn profile link not provided"
              title="LinkedIn profile link not provided"
              aria-disabled="true"
            >
              <Linkedin aria-hidden="true" />
            </span>
          </div>
          <button type="button" className="back-to-top" onClick={() => scrollToSection("home")}>
            Back to top <ArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Naga Jhansi</span>
        <span>React · TypeScript · Tailwind CSS</span>
      </div>
    </div>
  </footer>
);

export default Footer;

