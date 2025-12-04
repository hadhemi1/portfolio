// script.js : injection des données & animations

document.addEventListener("DOMContentLoaded", () => {
  // Support both patterns: `window.profileData` (explicit) or top-level `profileData`.
  const data = window.profileData || (typeof profileData !== "undefined" ? profileData : null);
  if (!data) return;

  // Helper to safely set text/href
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el && typeof text !== "undefined" && text !== null) el.textContent = text;
  };
  const setHref = (id, href) => {
    const el = document.getElementById(id);
    if (el && href) el.href = href;
  };

  // HERO
  setText("hero-name", data.name || "");
  setHref("hero-cv-btn", "resume_khadhrawi_hadhemi.pdf");

  // Typewriter pour le paragraphe descriptif
  const taglineEl = document.getElementById("hero-tagline");
  const taglineText = data.tagline || "";

  if (taglineEl && taglineText) {
    taglineEl.textContent = "";  // on part de vide

    let i = 0;
    const speed = 35; // ms entre chaque lettre (tu peux mettre 20 ou 50 si tu veux)

    const interval = setInterval(() => {
      taglineEl.textContent = taglineText.slice(0, i);
      i++;

      if (i > taglineText.length) {
        clearInterval(interval);
        // Si tu veux enlever le curseur après l’écriture :
        // taglineEl.style.borderRight = "none";
      }
    }, speed);
  }


  // CONTACT INFOS
  setText("contact-name", data.name || "");

  const email = data.contact && data.contact.email;
  if (email) {
    setText("contact-email", email);
    setHref("contact-email", `mailto:${email}`);
  }

  const phone = data.contact && data.contact.phone;
  if (phone) {
    setText("contact-phone", phone);
    setHref("contact-phone", `tel:${phone.replace(/\s+/g, "")}`);
  }

  const linkedin = data.contact && data.contact.linkedin;
  if (linkedin) {
    setText("contact-linkedin", linkedin);
    setHref("contact-linkedin", linkedin);
    const socialLinkedin = document.getElementById("social-linkedin");
    if (socialLinkedin) socialLinkedin.href = linkedin;
  }

  // SKILLS
  const skillsLangEl = document.getElementById("skills-languages");
  const skillsMlEl = document.getElementById("skills-ml");
  const skillsToolsEl = document.getElementById("skills-tools");

  function addChips(container, items) {
    if (!container || !Array.isArray(items)) return;
    items.forEach((txt) => {
      if (!txt) return;
      const chip = document.createElement("span");
      chip.className = "skill-chip";
      chip.textContent = txt;
      container.appendChild(chip);
    });
  }

  addChips(skillsLangEl, [
    ...(data.skills && data.skills.languages ? data.skills.languages : []),
    ...(data.skills && data.skills.databases ? data.skills.databases : []),
  ]);

  addChips(skillsMlEl, data.skills && data.skills.mlFrameworks ? data.skills.mlFrameworks : []);

  addChips(skillsToolsEl, [
    ...(data.skills && data.skills.devTools ? data.skills.devTools : []),
    ...(data.skills && data.skills.web ? data.skills.web : []),
  ]);

  // EXPERIENCE
  const expList = document.getElementById("experience-list");
  if (expList && Array.isArray(data.experiences)) {
    data.experiences.forEach((exp) => {
      const item = document.createElement("div");
      item.className = "timeline-item reveal-on-scroll";

      const date = document.createElement("div");
      date.className = "timeline-date";
      date.textContent = exp.period || "";

      const card = document.createElement("div");
      card.className = "timeline-card glass-card";

      const h3 = document.createElement("h3");
      h3.textContent = exp.title || "";

      const meta = document.createElement("div");
      meta.className = "timeline-meta";
      meta.textContent = exp.company || "";

      const ul = document.createElement("ul");
      ul.className = "bullet-list";
      (exp.bullets || []).forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
      });

      const tags = document.createElement("div");
      tags.className = "tag-list";
      (exp.tags || []).forEach((t) => {
        const span = document.createElement("span");
        span.className = "skill-chip";
        span.textContent = t;
        tags.appendChild(span);
      });

      card.appendChild(h3);
      card.appendChild(meta);
      card.appendChild(ul);
      card.appendChild(tags);

      item.appendChild(date);
      item.appendChild(card);
      expList.appendChild(item);
    });
  }

  // PROJECTS
  const projList = document.getElementById("projects-list");
  if (projList && Array.isArray(data.projects)) {
    data.projects.forEach((p) => {
      const card = document.createElement("article");
      card.className = "glass-card reveal-on-scroll";

      const head = document.createElement("div");
      head.style.display = "flex";
      head.style.justifyContent = "space-between";
      head.style.alignItems = "center";
      head.style.marginBottom = "0.4rem";

      const title = document.createElement("h3");
      title.textContent = p.title || "";

      const badge = document.createElement("span");
      badge.className = "skill-chip";
      badge.textContent = p.period || "";

      head.appendChild(title);
      head.appendChild(badge);

      const desc = document.createElement("p");
      desc.textContent = p.description || "";

      const tags = document.createElement("div");
      tags.className = "tag-list";
      (p.tags || []).forEach((t) => {
        const span = document.createElement("span");
        span.className = "skill-chip";
        span.textContent = t;
        tags.appendChild(span);
      });

      card.appendChild(head);
      card.appendChild(desc);
      card.appendChild(tags);

      projList.appendChild(card);
    });
  }

  // EDUCATION
  const eduList = document.getElementById("education-list");
  if (eduList && Array.isArray(data.education)) {
    data.education.forEach((e) => {
      const item = document.createElement("div");
      item.className = "timeline-item";

      const date = document.createElement("div");
      date.className = "timeline-date";
      date.textContent = e.period || "";

      const card = document.createElement("div");
      card.className = "timeline-card glass-card";

      const h3 = document.createElement("h3");
      h3.textContent = e.school || "";

      const p = document.createElement("p");
      p.className = "timeline-meta";
      p.textContent = e.details || "";

      card.appendChild(h3);
      card.appendChild(p);

      item.appendChild(date);
      item.appendChild(card);
      eduList.appendChild(item);
    });
  }

  // CERTIFICATIONS
  const certList = document.getElementById("certifications-list");
  if (certList && Array.isArray(data.certifications)) {
    data.certifications.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      certList.appendChild(li);
    });
  }

  // CONTACT FORM : envoi via mailto:
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-form-name")?.value || "";
      const email = document.getElementById("contact-form-email")?.value || "";
      const message =
        document.getElementById("contact-form-message")?.value || "";

      const dest = "khadhrawi.hadhemi@gmail.com";
      const subject = "Nouveau message depuis le portfolio";
      const body = `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`;

      const mailtoLink =
        "mailto:" +
        encodeURIComponent(dest) +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      // Ouvre le client mail de l'utilisateur
      window.location.href = mailtoLink;

      // petit toast de confirmation visuelle
      const toast = document.createElement("div");
      toast.textContent = "Ouverture de votre client mail…";
      toast.style.position = "fixed";
      toast.style.right = "1rem";
      toast.style.bottom = "1rem";
      toast.style.padding = "0.6rem 1rem";
      toast.style.background = "linear-gradient(90deg,#10b981,#06b6d4)";
      toast.style.color = "#021";
      toast.style.borderRadius = "8px";
      toast.style.boxShadow = "0 8px 24px rgba(2,6,23,0.6)";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3200);
    });
  }


  // ANIMATION SCROLL (IntersectionObserver)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".reveal-on-scroll")
    .forEach((el) => observer.observe(el));
});
