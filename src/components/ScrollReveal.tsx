import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["scroll-reveal", isVisible && "is-visible", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={elementRef}
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

