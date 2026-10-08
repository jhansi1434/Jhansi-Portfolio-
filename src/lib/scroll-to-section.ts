export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  section.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
};

