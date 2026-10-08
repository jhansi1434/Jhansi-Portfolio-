import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";

type Project = (typeof projectsData)[number];

const projectCategories: Record<string, string> = {
  Cokpit: "AI · Enterprise",
  Mindly: "Healthcare",
  "Inside-View": "Utility billing",
  "Review Deals": "E-commerce",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject && !dialog.open) dialog.showModal();
    if (!selectedProject && dialog.open) dialog.close();
  }, [selectedProject]);

  const closeProjectDetails = () => setSelectedProject(null);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="site-container">
        <ScrollReveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected work"
            title="Products built around real problems"
            description="A selection of web, mobile, healthcare, utility, and AI-powered enterprise work."
          />
        </ScrollReveal>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const isFeatured = project.title === "Cokpit";

            return (
              <ScrollReveal
                key={project.title}
                className={`project-reveal${isFeatured ? " project-reveal--featured" : ""}`}
                delay={Math.min(index * 55, 220)}
              >
                <article className={`project-card${isFeatured ? " project-card--featured" : ""}`}>
                  <div className="project-media">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} project preview`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <span className="project-category">
                      {isFeatured && <Sparkles aria-hidden="true" />}
                      {projectCategories[project.title]}
                    </span>
                    <span className="project-media__shade" aria-hidden="true" />
                  </div>

                  <div className="project-content">
                    <div className="project-heading-row">
                      <span className="project-number">0{index + 1}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tags" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <div className="project-actions">
                      <button
                        type="button"
                        className="project-view-button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View ${project.title} project details`}
                      >
                        View project <ArrowUpRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onCancel={closeProjectDetails}
        onClose={closeProjectDetails}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProjectDetails();
        }}
      >
        <div className="project-dialog__content">
          <button
            type="button"
            className="icon-button project-dialog__close"
            onClick={closeProjectDetails}
            aria-label="Close project details"
          >
            <X aria-hidden="true" />
          </button>
          <p className="section-heading__eyebrow">Project overview</p>
          <h2 id="project-dialog-title">{selectedProject?.title ?? "Project details"}</h2>
          {selectedProject && (
            <>
              <p className="project-dialog__description">{selectedProject.description}</p>
              <ul className="project-tags" aria-label={`${selectedProject.title} technologies`}>
                {selectedProject.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Projects;

