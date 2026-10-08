import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { experiencesData } from "@/lib/data";

const Experience = () => (
  <section
    id="experience"
    className="section experience-section"
    aria-labelledby="experience-heading"
  >
    <div className="site-container site-container--narrow">
      <ScrollReveal>
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="A path shaped by curiosity"
          description="From studying physics to building modern software and AI-powered applications."
        />
      </ScrollReveal>

      <ScrollReveal className="timeline-reveal">
        <ol className="experience-timeline">
          {experiencesData.map((item) => {
            const isCurrent = item.date.includes("Present");

            return (
              <li
                className={`timeline-item${isCurrent ? " timeline-item--current" : ""}`}
                key={`${item.title}-${item.date}`}
              >
                <span className="timeline-marker" aria-hidden="true" />
                <article className="timeline-card">
                  <div className="timeline-card__topline">
                    <span className="timeline-card__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <div className="timeline-card__body">
                    <div className="timeline-card__title-row">
                      <h3>{item.title}</h3>
                      {isCurrent && <span className="timeline-current">Current</span>}
                    </div>
                    <p className="timeline-location">{item.location}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </ScrollReveal>
    </div>
  </section>
);

export default Experience;

