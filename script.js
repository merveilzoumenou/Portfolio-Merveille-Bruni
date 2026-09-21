@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
  --ink: #171717;
  --muted: #6c665f;
  --paper: #f4efe8;
  --accent: #e65c35;
  --line: rgba(23, 23, 23, 0.14);
  --surface: #fffaf4;
  --danger: #b52d2d;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.site-header {
  padding: 28px clamp(24px, 6vw, 96px);
  border-bottom: 1px solid var(--line);
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  gap: 24px;
}

.logo {
  color: var(--ink);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(18px, 3vw, 42px);
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-links a {
  position: relative;
  color: var(--muted);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 180ms ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--ink);
}

.nav-links a.active::after {
  position: absolute;
  right: 0;
  bottom: -8px;
  left: 0;
  height: 2px;
  background: var(--accent);
  content: '';
}

.hero,
.about-page,
.projects-page,
.contact-page {
  max-width: 1240px;
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);
  align-items: center;
  gap: clamp(48px, 10vw, 150px);
  min-height: calc(100vh - 175px);
  padding: clamp(72px, 10vw, 140px) clamp(24px, 6vw, 96px);
}

.eyebrow {
  margin: 0 0 24px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.04em;
}

h1 {
  max-width: 760px;
  font-size: clamp(3rem, 6.5vw, 6.5rem);
  line-height: 0.96;
}

h1 span {
  display: block;
  color: var(--muted);
}

.intro,
.about-intro,
.contact-intro {
  max-width: 510px;
  margin: 34px 0 38px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 15px 20px;
  color: var(--white);
  background: var(--ink);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 180ms ease, transform 180ms ease;
}

.button:hover {
  background: var(--accent);
  transform: translateY(-3px);
}

.portrait-frame {
  position: relative;
  padding: 14px 14px 52px;
  background: var(--accent);
  transform: rotate(2deg);
  box-shadow: 0 28px 45px rgba(23, 23, 23, 0.1);
}

.portrait-frame img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center top;
  filter: saturate(0.9);
}

.portrait-caption {
  position: absolute;
  right: 22px;
  bottom: 16px;
  margin: 0;
  color: var(--white);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(24px, 6vw, 96px) 28px;
  color: var(--muted);
  font-size: 0.78rem;
}

.about-page,
.projects-page,
.contact-page {
  padding: clamp(72px, 10vw, 140px) clamp(24px, 6vw, 96px) 100px;
}

.about {
  max-width: 820px;
  margin-bottom: clamp(76px, 10vw, 130px);
}

.about h1 {
  font-size: clamp(3rem, 7vw, 6.5rem);
}

.about-intro {
  max-width: 700px;
  margin-top: 38px;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
}

.section-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--line);
}

.section-heading h2 {
  margin: 0 0 16px;
  font-size: clamp(2rem, 4vw, 3.5rem);
}

.skills-grid,
.projects-grid {
  display: grid;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.skills-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.skill-card,
.project-card {
  min-height: 220px;
  padding: 24px;
  background: var(--paper);
  transition: background 180ms ease, transform 180ms ease;
}

.skill-card:hover,
.project-card:hover {
  background: var(--surface);
}

.skill-number,
.project-number {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
}

.skill-card h3 {
  margin-top: 72px;
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.skill-card p,
.project-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.projects h1 {
  margin: 0 0 54px;
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.96;
}

.projects-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
  display: flex;
  flex-direction: column;
  min-height: 390px;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h2 {
  margin-top: 76px;
  margin-bottom: 18px;
  font-size: clamp(1.35rem, 2.2vw, 2rem);
  line-height: 1.05;
}

.tag {
  align-self: flex-start;
  margin-top: auto;
  padding-top: 28px;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.design-projects {
  margin-top: clamp(86px, 12vw, 150px);
}

.design-projects > h2 {
  margin: 0 0 42px;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
}

.design-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 50px;
}

.design-grid .project-card {
  min-height: 0;
}

.design-grid .project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
}

.design-grid .project-card h3 {
  margin: 28px 0 14px;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  line-height: 1.1;
}

.contact h1 {
  font-size: clamp(3rem, 7vw, 6.5rem);
}

.contact-intro {
  margin: 28px 0 52px;
  font-size: 1.1rem;
}

#contact-form {
  max-width: 680px;
}

.form-group {
  margin-bottom: 26px;
}

.form-group label {
  display: block;
  margin-bottom: 9px;
  font-size: 0.85rem;
  font-weight: 700;
}

.form-group input,
.form-group textarea {
  display: block;
  width: 100%;
  padding: 14px 0;
  color: var(--ink);
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--line);
  border-radius: 0;
  font: inherit;
  outline: none;
  resize: vertical;
}

.form-group textarea {
  min-height: 130px;
}

.form-group input:focus,
.form-group textarea:focus {
  border-bottom-color: var(--accent);
}

.form-group input[aria-invalid='true'],
.form-group textarea[aria-invalid='true'] {
  border-bottom-color: var(--danger);
}

.error-message {
  display: block;
  min-height: 18px;
  margin-top: 6px;
  color: var(--danger);
  font-size: 0.78rem;
}

.form-feedback {
  min-height: 24px;
  margin: 22px 0 0;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 700;
}

@media (max-width: 700px) {
  .site-header {
    padding-top: 22px;
    padding-bottom: 22px;
  }

  .navigation {
    align-items: flex-start;
    gap: 24px;
  }

  .nav-links {
    justify-content: flex-end;
    gap: 10px 16px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 58px;
    min-height: auto;
    padding-top: 72px;
    padding-bottom: 70px;
  }

  h1 {
    font-size: clamp(2.7rem, 13vw, 4.5rem);
  }

  .portrait-frame {
    max-width: 360px;
    margin: 0 auto;
    transform: rotate(1deg);
  }

  .site-footer {
    flex-direction: column;
    gap: 6px;
  }

  .about-page,
  .projects-page,
  .contact-page {
    padding-top: 72px;
  }

  .section-heading {
    display: block;
  }

  .skills-grid,
  .projects-grid,
  .design-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    min-height: 180px;
  }

  .skill-card h3 {
    margin-top: 46px;
  }

  .project-card {
    min-height: 320px;
  }
}
