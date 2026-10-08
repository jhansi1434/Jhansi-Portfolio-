import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { links } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll-to-section";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const activeLine = window.scrollY + window.innerHeight * 0.34;
        let currentSection = "home";

        for (const link of links) {
          const id = link.hash.slice(1);
          const section = document.getElementById(id);
          if (section && section.offsetTop <= activeLine) currentSection = id;
        }

        setActiveSection((current) =>
          current === currentSection ? current : currentSection,
        );
        frame = 0;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const handleSectionClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const renderNavigation = (mobile = false) => (
    <div className={mobile ? "mobile-nav-list" : "nav-list"}>
      {links.map((link) => {
        const id = link.hash.slice(1);
        const isActive = activeSection === id;

        return (
          <button
            key={link.hash}
            type="button"
            onClick={() => handleSectionClick(id)}
            className={`${mobile ? "mobile-nav-link" : "nav-link"}${isActive ? " is-active" : ""}`}
            aria-current={isActive ? "location" : undefined}
          >
            {link.name}
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="site-header">
      <nav className="site-container header-inner" aria-label="Primary navigation">
        <button
          type="button"
          className="brand"
          onClick={() => handleSectionClick("home")}
          aria-label="Naga Jhansi — back to home"
        >
          <span className="brand-mark" aria-hidden="true">NJ</span>
          <span className="brand-copy">
            <span className="brand-name">Naga Jhansi</span>
            <span className="brand-role">AI Full Stack Developer</span>
          </span>
        </button>

        <div className="desktop-navigation">{renderNavigation()}</div>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="icon-button mobile-menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav-panel" id="mobile-navigation">
            {renderNavigation(true)}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

