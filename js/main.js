(function () {
  const P = window.PORTFOLIO;
  if (!P) {
    console.error("PORTFOLIO data missing. Load js/content.js before main.js.");
    return;
  }

  const year = new Date().getFullYear();

  function esc(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function setMeta() {
    document.title = P.meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", P.meta.description);
  }

  function navHrefToPath(href) {
    if (!href || href.startsWith("#") || /^[a-z]+:\/\//i.test(href)) return null;
    return href.split("#")[0].split("?")[0] || "index.html";
  }

  function currentPagePath() {
    const p = window.location.pathname.split("/").pop();
    return p || "index.html";
  }

  function renderNav() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;
    const pagePath = currentPagePath();
    const links = P.nav.links
      .map((l) => {
        const target = navHrefToPath(l.href);
        const hasHash = typeof l.href === "string" && l.href.includes("#");
        const active =
          target && target === pagePath && !hasHash ? " nav-link-active" : "";
        return `<a class="nav-link${active}" href="${esc(l.href)}">${esc(l.label)}</a>`;
      })
      .join("");
    const brandHref = esc(P.nav.brandHref || "index.html");
    nav.innerHTML = `
      <a class="nav-brand" href="${brandHref}">${esc(P.nav.brand)}</a>
      <div class="nav-links">${links}</div>
      <button type="button" class="theme-toggle" aria-label="Toggle theme" title="Toggle theme">
        <span class="theme-icon theme-icon-sun" aria-hidden="true"></span>
        <span class="theme-icon theme-icon-moon" aria-hidden="true"></span>
      </button>
    `;
  }

  function renderHero() {
    const el = document.getElementById("hero");
    if (!el) return;
    const h = P.hero;
    const resume =
      h.resumeUrl &&
      `<a class="btn btn-ghost" href="${esc(h.resumeUrl)}" target="_blank" rel="noopener noreferrer">Resume</a>`;
    const secondary =
      h.secondaryCta &&
      `<a class="btn btn-secondary" href="${esc(h.secondaryCta.href)}">${esc(h.secondaryCta.label)}</a>`;
    const primary =
      h.primaryCta &&
      `<a class="btn btn-primary" href="${esc(h.primaryCta.href)}">${esc(h.primaryCta.label)}</a>`;
    const actions = [primary, secondary, resume].filter(Boolean).join("\n");
    el.innerHTML = `
      ${h.greeting ? `<p class="hero-greeting">${esc(h.greeting)}</p>` : ""}
      <h1 class="hero-name" id="hero-heading">${esc(h.name)}</h1>
      <p class="hero-tagline">${esc(h.tagline)}</p>
      ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
    `;
  }

  function renderAbout() {
    const el = document.getElementById("about");
    if (!el) return;
    const paras = P.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
    const photo = P.about.photo;
    const photoMarkup =
      photo && photo.src
        ? `
      <figure class="about-photo-wrap">
        <img class="about-photo" src="${esc(photo.src)}" alt="${esc(photo.alt || `${P.nav.brand} portrait`)}" loading="lazy" />
      </figure>
      `
        : "";
    el.innerHTML = `
      <h2 class="section-title" id="about-heading">${esc(P.about.heading)}</h2>
      <div class="about-layout">
        <div class="about-body prose">${paras}</div>
        ${photoMarkup}
      </div>
    `;
  }

  function renderExperience() {
    const el = document.getElementById("experience");
    const E = P.experience;
    if (!el || !E) return;
    const cards = (E.items || [])
      .map((job, i) => {
        const bullets =
          job.bullets && job.bullets.length
            ? `<ul class="exp-bullets">${job.bullets
                .map((b) => `<li>${esc(b)}</li>`)
                .join("")}</ul>`
            : "";
        const tags =
          job.tech && job.tech.length
            ? `<div class="project-tech">${job.tech
                .map((t) => `<span class="tag">${esc(t)}</span>`)
                .join("")}</div>`
            : "";
        const links = (job.links || [])
          .map(
            (link) =>
              `<a class="project-link" href="${esc(link.href)}" ${
                link.external ? 'target="_blank" rel="noopener noreferrer"' : ""
              }>${esc(link.label)}</a>`
          )
          .join("");
        const isLast = i === (E.items || []).length - 1;
        return `
          <div class="tl-item${isLast ? " tl-item-last" : ""}">
            <div class="tl-side">
              <span class="tl-date">${esc(job.dateRange || "")}</span>
            </div>
            <div class="tl-marker">
              <span class="tl-dot"></span>
              ${!isLast ? '<span class="tl-line"></span>' : ""}
            </div>
            <article class="tl-card" data-date="${esc(job.dateRange || "")}">
              <h3 class="tl-org">${
                job.orgUrl
                  ? `<a href="${esc(job.orgUrl)}" target="_blank" rel="noopener noreferrer">${esc(job.org || "")}</a>`
                  : esc(job.org || "")
              }</h3>
              <p class="tl-role">${esc(job.role)}</p>
              ${job.summary ? `<p class="tl-summary">${esc(job.summary)}</p>` : ""}
              ${tags}
              ${bullets}
              ${links ? `<div class="project-links">${links}</div>` : ""}
            </article>
          </div>
        `;
      })
      .join("");
    const liBtn = E.linkedInUrl
      ? `<p class="experience-linkedin"><a class="btn btn-secondary" href="${esc(E.linkedInUrl)}" target="_blank" rel="noopener noreferrer">Full work history on LinkedIn</a></p>`
      : "";
    el.innerHTML = `
      <h2 class="section-title" id="experience-heading">${esc(E.heading)}</h2>
      ${E.intro ? `<p class="section-intro">${esc(E.intro)}</p>` : ""}
      ${liBtn}
      <div class="tl-list">${cards}</div>
    `;
  }

  function renderResearch() {
    const el = document.getElementById("research");
    const R = P.research;
    if (!el || !R) return;

    const pubs = R.publications
      .map((pub, i) => {
        const authors = Array.isArray(pub.authors) ? pub.authors : [pub.authors];
        const authorHtml = authors
          .map((a) =>
            pub.highlightAuthor && a === pub.highlightAuthor
              ? `<span class="pub-author-highlight">${esc(a)}</span>`
              : esc(a)
          )
          .join(", ");

        const venueHtml = pub.venueUrl
          ? `<a href="${esc(pub.venueUrl)}" target="_blank" rel="noopener noreferrer">${esc(pub.venue)}</a>`
          : esc(pub.venue);

        const tags = (pub.tags || [])
          .map((t) => `<span class="tag">${esc(t)}</span>`)
          .join("");

        const titleLink = pub.links && pub.links.length
          ? `<a href="${esc(pub.links[0].href)}" target="_blank" rel="noopener noreferrer">${esc(pub.title)}</a>`
          : esc(pub.title);

        const scholarHref = pub.links && pub.links.length ? esc(pub.links[0].href) : "";

        return `
          <article class="pub-card" ${scholarHref ? `data-href="${scholarHref}"` : ""}>
            <div class="pub-number">${i + 1}</div>
            <div class="pub-body">
              <div class="pub-meta-row">
                <span class="pub-year-badge">${esc(String(pub.year))}</span>
                <span class="pub-venue">${venueHtml}</span>
              </div>
              <h3 class="pub-title">${esc(pub.title)}</h3>
              <p class="pub-authors">${authorHtml}</p>
              ${pub.pages ? `<p class="pub-pages">pp. ${esc(pub.pages)}</p>` : ""}
              ${tags ? `<div class="pub-tags">${tags}</div>` : ""}
            </div>
          </article>
        `;
      })
      .join("");

    const scholarBtn = R.scholarUrl
      ? `<a class="btn btn-secondary pub-scholar-btn" href="${esc(R.scholarUrl)}" target="_blank" rel="noopener noreferrer">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:6px"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>Google Scholar
         </a>`
      : "";

    el.innerHTML = `
      <h2 class="section-title" id="research-heading">${esc(R.heading)}</h2>
      ${R.intro ? `<p class="section-intro">${esc(R.intro)}</p>` : ""}
      <div class="pub-header-row">${scholarBtn}</div>
      <div class="pub-list">${pubs}</div>
    `;

    el.querySelectorAll(".pub-card[data-href]").forEach((card) => {
      card.style.cursor = "pointer";
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        window.open(card.dataset.href, "_blank", "noopener,noreferrer");
      });
    });
  }

  function renderProjects() {
    const el = document.getElementById("projects");
    if (!el) return;
    const { heading, intro, items } = P.projects;
    const cards = items
      .map((proj) => {
        const tech = proj.tech
          .map((t) => `<span class="tag">${esc(t)}</span>`)
          .join("");
        const codeLink = proj.links.find((l) => l.label === "Code");
        const href = codeLink ? esc(codeLink.href) : "";
        const descHtml = proj.descriptionHtml ? proj.description : esc(proj.description);
        return `
          <article class="project-card" ${href ? `data-href="${href}"` : ""}>
            <div class="project-card-head">
              <h3 class="project-title">${esc(proj.title)}</h3>
              <div class="project-tech">${tech}</div>
            </div>
            <p class="project-desc">${descHtml}</p>
          </article>
        `;
      })
      .join("");
    el.innerHTML = `
      <h2 class="section-title" id="projects-heading">${esc(heading)}</h2>
      ${intro ? `<p class="section-intro">${esc(intro)}</p>` : ""}
      <div class="project-grid">${cards}</div>
    `;
    el.querySelectorAll(".project-card[data-href]").forEach((card) => {
      card.style.cursor = "pointer";
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        window.open(card.dataset.href, "_blank", "noopener,noreferrer");
      });
    });
  }

  function renderSkills() {
    const el = document.getElementById("skills");
    if (!el) return;
    const groups = P.skills.groups
      .map(
        (g) => `
        <div class="skill-group">
          <h3 class="skill-group-title">${esc(g.name)}</h3>
          <ul class="skill-list">
            ${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}
          </ul>
        </div>
      `
      )
      .join("");
    el.innerHTML = `
      <h2 class="section-title" id="skills-heading">${esc(P.skills.heading)}</h2>
      <div class="skills-grid">${groups}</div>
    `;
  }

  const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  };

  function renderContact() {
    const el = document.getElementById("contact");
    if (!el) return;
    const c = P.contact;
    const social = c.social
      .map((s) => {
        const icon = ICONS[s.icon] || "";
        return `<a class="social-link" href="${esc(s.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}">${icon}<span>${esc(s.label)}</span></a>`;
      })
      .join("");
    const emailHref = `mailto:${encodeURIComponent(c.email)}`;
    const emailBtn = `<a class="social-link" href="${emailHref}" aria-label="Email">${ICONS.mail}<span>Email</span></a>`;
    el.innerHTML = `
      <h2 class="section-title" id="contact-heading">${esc(c.heading)}</h2>
      <p class="section-intro">${esc(c.intro)}</p>
      <div class="contact-block">
        <div class="social-row">${emailBtn}${social}</div>
      </div>
    `;
  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const text = P.footer.text.replace("YEAR", String(year));
    el.innerHTML = `<p>${esc(text)}</p>`;
  }

  function initTheme() {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    root.classList.toggle("theme-dark", dark);
    root.classList.toggle("theme-light", !dark);
  }

  function bindThemeToggle() {
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".theme-toggle");
      if (!btn) return;
      const root = document.documentElement;
      const isDark = root.classList.toggle("theme-dark");
      root.classList.toggle("theme-light", !isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  function initNavScroll() {
    const nav = document.getElementById("site-header");
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("header-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  setMeta();
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderResearch();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();
  initTheme();
  bindThemeToggle();
  initNavScroll();
})();
