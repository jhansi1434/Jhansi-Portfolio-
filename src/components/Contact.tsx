import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const emailAddress = "jhansipasupaleti48@gmail.com";

const Contact = () => {
  const [isPrepared, setIsPrepared] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const sender = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${sender}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${sender}`);

    setIsPrepared(true);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="site-container">
        <ScrollReveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let&apos;s build something useful"
            description="Have a project, a role, or an interesting engineering problem in mind? I&apos;d be glad to hear from you."
          />
        </ScrollReveal>

        <ScrollReveal className="contact-panel-reveal">
          <div className="contact-panel">
            <div className="contact-intro">
              <span className="contact-intro__label">GET IN TOUCH</span>
              <h3>Start with a conversation.</h3>
              <p>
                Reach out directly or send a note. The form prepares a message in
                your default email app; it does not send data to a server.
              </p>

              <div className="contact-methods">
                <a className="contact-method" href={`mailto:${emailAddress}`}>
                  <span className="contact-method__icon" aria-hidden="true">
                    <Mail />
                  </span>
                  <span className="contact-method__copy">
                    <small>Email</small>
                    <strong>{emailAddress}</strong>
                  </span>
                  <ArrowUpRight className="contact-method__arrow" aria-hidden="true" />
                </a>

                <a
                  className="contact-method"
                  href="https://github.com/jhansi1434"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-method__icon" aria-hidden="true">
                    <Github />
                  </span>
                  <span className="contact-method__copy">
                    <small>GitHub</small>
                    <strong>github.com/jhansi1434</strong>
                  </span>
                  <ArrowUpRight className="contact-method__arrow" aria-hidden="true" />
                </a>

                <div className="contact-method contact-method--pending" aria-disabled="true">
                  <span className="contact-method__icon" aria-hidden="true">
                    <Linkedin />
                  </span>
                  <span className="contact-method__copy">
                    <small>LinkedIn</small>
                    <strong>Profile URL needed</strong>
                  </span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__heading">
                <h3>Send a message</h3>
                <p>Fields marked with * are required.</p>
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Your email <span>*</span></label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={500}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Your message <span>*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about what you have in mind..."
                  maxLength={5000}
                  required
                />
              </div>

              <button className="button button--primary contact-submit" type="submit">
                <Send aria-hidden="true" />
                <span>{isPrepared ? "Open your email app" : "Prepare email"}</span>
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;

