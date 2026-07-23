// ============================================
// Kritik Modi — Portfolio interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initTypedStatus();
  initMobileNav();
  initScrollSpy();
  initRevealOnScroll();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- typed status line in hero editor ---------- */
function initTypedStatus() {
  const el = document.getElementById('typedStatus');
  if (!el) return;
  const phrases = ['"available for hire"', '"shipping side projects"', '"probably debugging something"'];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}

/* ---------- mobile nav toggle ---------- */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- scroll spy: highlight nav link + update status bar ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  const statusSection = document.getElementById('statusSection');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');

        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });

        if (statusSection) statusSection.textContent = `~/${id}`;
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------- reveal-on-scroll for cards ---------- */
function initRevealOnScroll() {
  const targets = document.querySelectorAll(
    '.fact-card, .skill-block, .project-card, .contact__form, .contact__intro'
  );
  targets.forEach((el) => el.setAttribute('data-reveal', ''));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------- contact form (front-end only — wire up to a backend/service) ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();

    // NOTE: This is a placeholder. Hook this up to a real endpoint
    // (e.g. Formspree, Netlify Forms, EmailJS, or your own API) to
    // actually deliver messages.
    status.textContent = `thanks${name ? ', ' + name : ''} — message logged locally (connect a form service to send it for real).`;
    form.reset();
  });
}
