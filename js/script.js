/* =========================================================================
   سواعد الأمل — ENSAM Casablanca
   Linktree + language switcher (AR / FR / EN)
   Edit ONLY the CONFIG section below.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) SOCIALS — small row of star badges under the hero.
   ------------------------------------------------------------------------- */
const SOCIALS = [
  { key: "instagram", url: "https://www.instagram.com/sawaidalamal" },
  { key: "linkedin",  url: "https://ma.linkedin.com/company/sawaid-al-amal-ensam-casablanca" },
  { key: "whatsapp",  url: "#" },
  { key: "facebook",  url: "https://www.facebook.com/SawaidAlAmal/" },
];

/* -------------------------------------------------------------------------
   2) LINKS — main list. `id` maps to translations in I18N below.
   ------------------------------------------------------------------------- */
const LINKS = [
  { id: "join",         key: "form",      url: "#", gold: true },
  { id: "instagram",    key: "instagram", url: "https://www.instagram.com/sawaidalamal" },
  { id: "linkedin",     key: "linkedin",  url: "https://ma.linkedin.com/company/sawaid-al-amal-ensam-casablanca" },
  { id: "whatsapp",     key: "whatsapp",  url: "https://api.whatsapp.com/send/?phone=212674000581&text&type=phone_number&app_absent=0" },
  { id: "events",       key: "calendar",  url: "#" },
  { id: "library",      key: "book",      url: "https://sawaidlamal-ensamc.github.io/sawaidlamal-ensamc/Tinirt%20Library.html" },
  { id: "sponsorship",  key: "pdf",       url: "#" },
  { id: "website",      key: "csa",      url: "https://sawaidlamal-ensamc.github.io/sawaidlamal-ensamc/index.html" },
];

/* -------------------------------------------------------------------------
   3) I18N — translations per language.
   ------------------------------------------------------------------------- */
const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    title: "سواعد الأمل | ENSAM Casablanca",
    description: "سواعد الأمل  نادي اجتماعي بمدرسة ENSAM الدار البيضاء. التغيير يبدأ منا.",
    tagline: "التغيير يبدأ مِنّا",
    taglineEn: "",
    pillars: '<span>تواصل</span><span class="dot">•</span><span>تطوع</span><span class="dot">•</span><span>أثر</span>',
    footerSlogan: "#التغيير_يبدأ_مِنّا",
    links: {
      join:        { title: "انضم إلى النادي",      subtitle: "Registration form" },
      instagram:   { title: "إنستغرام",              subtitle: "Instagram" },
      linkedin:    { title: "لينكدإن",               subtitle: "LinkedIn" },
      whatsapp:    { title: "تواصل معنا",            subtitle: "WhatsApp Contact" },
      events:      { title: "فعالياتنا القادمة",     subtitle: "Upcoming Events" },
      library:     { title: "مكتبة النادي",           subtitle: "Club Library" },
      sponsorship: { title: "ملف الرعاية",           subtitle: "Sponsorship Deck (PDF)" },
      website:     { title: "الموقع الرسمي",         subtitle: "Official Website" },
    }
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    title: "Sawaid Al-Amal | ENSAM Casablanca",
    description: "Sawaid Al-Amal club social de l'ENSAM Casablanca. Le changement commence par nous.",
    tagline: "Le changement commence par nous",
    taglineEn: "",
    pillars: '<span>Contact</span><span class="dot">•</span><span>Bénévolat</span><span class="dot">•</span><span>Impact</span>',
    footerSlogan: "#LeChangementCommenceParNous",
    links: {
      join:        { title: "Rejoindre le club",   subtitle: "Formulaire d'inscription" },
      instagram:   { title: "Instagram",            subtitle: "Suivez nos actualités" },
      linkedin:    { title: "LinkedIn",             subtitle: "Connectez-vous avec nous" },
      whatsapp:    { title: "Contact WhatsApp",      subtitle: "Contactez-nous" },
      events:      { title: "Nos prochains événements", subtitle: "Upcoming Events" },
      library:     { title: "Bibliothèque du club", subtitle: "Club Library" },
      sponsorship: { title: "Dossier de sponsoring", subtitle: "Sponsorship Deck (PDF)" },
      website:     { title: "Site officiel",        subtitle: "Official Website" },
    }
  },
  en: {
    dir: "ltr",
    lang: "en",
    title: "Sawaid Al-Amal | ENSAM Casablanca",
    description: "Sawaid Al-Amal  social club at ENSAM Casablanca. Change starts with us.",
    tagline: "Change Starts With Us",
    taglineEn: "",
    pillars: '<span>Connect</span><span class="dot">•</span><span>Volunteer</span><span class="dot">•</span><span>Impact</span>',
    footerSlogan: "#ChangeStartsWithUs",
    links: {
      join:        { title: "Join the club",        subtitle: "Registration form" },
      instagram:   { title: "Instagram",             subtitle: "Follow our updates" },
      linkedin:    { title: "LinkedIn",              subtitle: "Connect with us" },
      whatsapp:    { title: "WhatsApp Contact",        subtitle: "Contact us" },
      events:      { title: "Upcoming events",       subtitle: "Upcoming Events" },
      library:     { title: "Club library",          subtitle: "Club Library" },
      sponsorship: { title: "Sponsorship deck",      subtitle: "Sponsorship Deck (PDF)" },
      website:     { title: "Official website",      subtitle: "Official Website" },
    }
  }
};

/* =========================================================================
   ICON LIBRARY — inline SVG. Brand icons keep official colors.
   ========================================================================= */
const ICONS = {
  // ---- generic outline icons (inherit currentColor) ----
  calendar: `<svg viewBox="0 0 24 24" fill="#FFB51D><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10zm2 3h4v4H7v-4z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="#FFB51D><path d="M10.6 13.4a1 1 0 0 0 1.4 1.4l4-4a3 3 0 1 0-4.2-4.2l-1.1 1.1a1 1 0 0 0 1.4 1.4l1.1-1.1a1 1 0 1 1 1.4 1.4l-4 4zm2.8-2.8a1 1 0 0 0-1.4-1.4l-4 4a3 3 0 1 0 4.2 4.2l1.1-1.1a1 1 0 0 0-1.4-1.4l-1.1 1.1a1 1 0 1 1-1.4-1.4l4-4z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="#FFB51D><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm0 3.4V18h16V9.4l-8 6.99-8-6.99z"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="#FFB51D"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.2 2.2z"/></svg>`,

  //csa 

  csa : `<img  class="logo-image" src="./assets/logo_sw.png" alt="Image">`,
 // ---- book (library) — inherits currentColor ----

  book: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#FFB51D"/><g transform="translate(12 12) scale(0.78) translate(-12 -12)"><path d="M12 6.5C10.5 5.3 8.6 4.7 6.5 4.7c-1 0-2 .15-2.9.45v13.2c.9-.3 1.9-.45 2.9-.45 2.1 0 4 .6 5.5 1.8 1.5-1.2 3.4-1.8 5.5-1.8 1 0 2 .15 2.9.45V5.15c-.9-.3-1.9-.45-2.9-.45-2.1 0-4 .6-5.5 1.8z" fill="#000"/><path d="M12 7.9v11.1c1.1-.85 2.5-1.3 4.1-1.3.7 0 1.4.08 2 .25V6.5c-.6-.17-1.3-.25-2-.25-1.6 0-3 .45-4.1 1.3zm-1 0c-1.1-.85-2.5-1.3-4.1-1.3-.7 0-1.4.08-2 .25v11.45c.6-.17 1.3-.25 2-.25 1.6 0 3 .45 4.1 1.3V7.9z" fill="#FFB51D"/><path d="M12 7.9v11.1" stroke="#000" stroke-width="0.6" fill="none"/></g></svg>`,

  // ---- PDF document — gold badge with brown glyph ----
  pdf: `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="3" fill="#FFB51D"/><path d="M8 5h6l4 4v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm5.5 1v3h3l-3-3zM9 13h1v3H9v-3zm2 0h1.5c.8 0 1.3.5 1.3 1.3v.4c0 .8-.5 1.3-1.3 1.3H11v-.9h1.3c.2 0 .3-.1.3-.3v-.6c0-.2-.1-.3-.3-.3H11v-.9zm3 0h1.7v.9H14v.4h1v.9h-1V16h-.9v-3z" fill="#2E2013"/></svg>`,

  // ---- Instagram — gold badge, brown camera ----
  instagram: `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="6" fill="#FFB51D"/><rect x="4.5" y="4.5" width="15" height="15" rx="4.5" fill="none" stroke="#2E2013" stroke-width="1.6"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="#2E2013" stroke-width="1.6"/><circle cx="17" cy="7" r="1.1" fill="#2E2013"/></svg>`,

  // ---- LinkedIn — gold badge, brown glyph ----
  linkedin: `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="3" 
  fill="#FFB51D"/><path d="M6.5 9.5h2.5v9H6.5v-9zm1.25-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9.5h2.4v1.3h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.67 3 3.84v5.16h-2.5v-4.57c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42v4.65H11v-9z" fill="#2E2013"/></svg>`,

  // ---- WhatsApp — gold circle, brown glyph ----
  whatsapp: 
  `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor"/><g transform="translate(12 12) scale(0.7) translate(-12 -12)"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.2 2.2z" fill="#000"/></g></svg>`,
  // ---- Facebook — gold circle, brown glyph ----
  facebook: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" 
  fill="#FFB51D"/><path d="M13.5 21v-7h2.4l.4-3H13.5V9.2c0-.9.25-1.5 1.6-1.5H16V5.1C15.6 5 14.7 5 13.7 5c-2.5 0-4.2 1.5-4.2 4.4V11H7v3h2.5v7h4z" fill="#2E2013"/></svg>`,

  // ---- TikTok — gold circle, brown glyph ----
  tiktok: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" 
  fill="#FFB51D"/><path d="M16.5 6h-2.2v9.2a2 2 0 1 1-1.6-1.96V10.9a4.3 4.3 0 1 0 3.8 4.27V9.9a5 5 0 0 0 2.5.7V8.4a3.2 3.2 0 0 1-2.5-2.4z" fill="#2E2013"/></svg>`,

  // ---- X (Twitter) — gold circle, brown glyph ----
  x: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" 
  fill="#FFB51D"/><path d="M17.2 5h1.9l-4.4 5 5.1 9h-4l-3.2-4.2L8.9 19H7l4.7-5.4L6.8 5h4.1l2.9 3.9L17.2 5zm-.7 12.4h1L9.6 6.5H8.5l8 10.9z" fill="#2E2013"/></svg>`,

  // ---- YouTube — gold rect, brown play triangle ----
  youtube: `<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="4" 
  fill="#FFB51D"/><path d="M10 8.5v7l5.5-3.5L10 8.5z" fill="#2E2013"/></svg>`,

  // ---- Google Form — gold circle, brown document ----
  form: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" 
  fill="#FFB51D"/><path d="M14 4H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8l-4-4zm0 1.5L17.5 9H14V5.5zM8 11h8v1.4H8V11zm0 2.8h8v1.4H8v-1.4zm0 2.8h5v1.4H8v-1.4z" fill="#2E2013"/></svg>`,
};

/* =========================================================================
   RENDERING
   ========================================================================= */
function iconOrFallback(key){ return ICONS[key] || ICONS.link; }

/* ---------- helper: is this a real link? ---------- */
function hasRealLink(url){
  return typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
}

function renderSocials(){
  const row = document.querySelector(".social-row");
  if (!row) return;

  // Only keep entries with a real URL
  const active = SOCIALS.filter(s => hasRealLink(s.url));

  // If nothing to show, hide the whole row (so no empty gap appears)
  if (active.length === 0){
    row.style.display = "none";
    row.innerHTML = "";
    return;
  }
  row.style.display = "";

  row.innerHTML = active.map(({ key, url }) => `
    <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${key}">
      <span class="star-badge">
        <span class="brand-plate">${iconOrFallback(key)}</span>
      </span>
    </a>
  `).join("");
}

function renderLinks(lang){
  const list = document.querySelector(".links");
  if (!list) return;

  // Only keep entries with a real URL
  const active = LINKS.filter(l => hasRealLink(l.url));

  if (active.length === 0){
    list.innerHTML = "";
    return;
  }

  const dict = I18N[lang].links;

  list.innerHTML = active.map(({ id, key, url, gold }, i) => {
    const t = dict[id] || { title: id, subtitle: "" };
    return `
      <a class="link-row" href="${url}" target="_blank" rel="noopener noreferrer" style="--delay:${(i * 0.06).toFixed(2)}s">
        <span class="star-badge${gold ? " is-gold" : ""}">
          <span class="brand-plate">${iconOrFallback(key)}</span>
        </span>
        <span class="link-text">
          <span class="link-title">${t.title}</span>
          ${t.subtitle ? `<span class="link-sub" dir="ltr">${t.subtitle}</span>` : ""}
        </span>
        <span class="link-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17 17 7M8 7h9v9"/>
          </svg>
        </span>
      </a>
    `;
  }).join("");
}

/* =========================================================================
   LANGUAGE HANDLING
   ========================================================================= */
function applyLanguage(lang){
  const cfg = I18N[lang] || I18N.ar;
  const html = document.documentElement;

  html.setAttribute("lang", cfg.lang);
  html.setAttribute("dir", cfg.dir);

  // head
  document.title = cfg.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", cfg.description);

  // hero
  const tagline = document.querySelector('[data-i18n="tagline"]');
  if (tagline) tagline.textContent = cfg.tagline;
  const taglineEn = document.querySelector('[data-i18n="taglineEn"]');
  if (taglineEn) taglineEn.textContent = cfg.taglineEn;
  const pillars = document.querySelector('[data-i18n="pillars"]');
  if (pillars) pillars.innerHTML = cfg.pillars;
  const slogan = document.querySelector('[data-i18n="footerSlogan"]');
  if (slogan) slogan.textContent = cfg.footerSlogan;

  // links
  renderLinks(lang);

  // active button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  // persist
  try { localStorage.setItem("sawaid-lang", lang); } catch(e) {}
}

function initLanguageSwitch(){
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  let saved = "ar";
  try { saved = localStorage.getItem("sawaid-lang") || "ar"; } catch(e) {}
  if (!I18N[saved]) saved = "ar";
  applyLanguage(saved);
}

/* =========================================================================
   BOOT
   ========================================================================= */
renderSocials();
initLanguageSwitch();