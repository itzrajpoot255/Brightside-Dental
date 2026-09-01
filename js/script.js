/* =========================================================
   BRIGHTSIDE DENTAL — script.js
   Beginner-friendly, commented JavaScript.
   ========================================================= */

/* ---------------------------------------------------------
   1. SIGNATURE FEATURE — ANIMATED STATS COUNTER
   (Exact approach given in the project guide)
   --------------------------------------------------------- */
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.dataset.target;
      let count = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        count += step;
        entry.target.textContent = Math.min(count, target) + '+';
        if (count >= target) clearInterval(timer);
      }, 30);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(el => statsObserver.observe(el));


/* ---------------------------------------------------------
   2. APPOINTMENT MODAL — FORM VALIDATION
   (Exact approach given in the project guide)
   --------------------------------------------------------- */
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('patientName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('apptDate').value;
  const time = document.getElementById('apptTime').value;

  const phoneOK = /^[0-9+\-\s]{7,15}$/.test(phone);

  if (!name || !phoneOK || !date || !time) {
    document.getElementById('formError').classList.remove('d-none');
    document.getElementById('formSuccess').classList.add('d-none');
    return;
  }

  // Show success message — no backend yet, this is a static frontend project
  document.getElementById('formError').classList.add('d-none');
  document.getElementById('formSuccess').classList.remove('d-none');
  this.reset();
});


/* ---------------------------------------------------------
   3. BONUS — SMOOTH SCROLL + ACTIVE NAV LINK HIGHLIGHT
   --------------------------------------------------------- */

// Close the mobile menu automatically after a link is clicked
const navMenu = document.getElementById('navMenu');
const bsCollapse = navMenu ? new bootstrap.Collapse(navMenu, { toggle: false }) : null;

document.querySelectorAll('.nav-scroll').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu && navMenu.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});

// Highlight the nav link for the section currently in view
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link.nav-scroll');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => navObserver.observe(section));


/* ---------------------------------------------------------
   4. BONUS — BEFORE & AFTER DRAGGABLE SLIDER
   (Second Signature Feature)
   --------------------------------------------------------- */
const slider = document.getElementById('baSlider');
const afterImg = document.getElementById('baAfter');
const handle = document.getElementById('baHandle');

let isDragging = false;

function moveSlider(clientX) {
  const rect = slider.getBoundingClientRect();
  let position = clientX - rect.left;

  // Keep the handle inside the slider boundaries
  if (position < 0) position = 0;
  if (position > rect.width) position = rect.width;

  const percent = (position / rect.width) * 100;
  afterImg.style.width = percent + '%';
  handle.style.left = percent + '%';
}

handle.addEventListener('mousedown', () => { isDragging = true; });
window.addEventListener('mouseup', () => { isDragging = false; });
window.addEventListener('mousemove', (e) => {
  if (isDragging) moveSlider(e.clientX);
});

// Touch support for mobile
handle.addEventListener('touchstart', () => { isDragging = true; });
window.addEventListener('touchend', () => { isDragging = false; });
window.addEventListener('touchmove', (e) => {
  if (isDragging) moveSlider(e.touches[0].clientX);
});

// Also allow clicking anywhere on the image to jump the slider
slider.addEventListener('click', (e) => moveSlider(e.clientX));


/* ---------------------------------------------------------
   5. BONUS — DARK / LIGHT MODE TOGGLE (saved to localStorage)
   --------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    themeIcon.classList.remove('bi-moon-stars-fill');
    themeIcon.classList.add('bi-sun-fill');
  } else {
    themeIcon.classList.remove('bi-sun-fill');
    themeIcon.classList.add('bi-moon-stars-fill');
  }
}

// Load saved preference on page load (defaults to light)
const savedTheme = localStorage.getItem('brightside-theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('brightside-theme', next);
});
