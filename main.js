// ============ SCROLL ANIMATIONS ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============ NAV SCROLL SHADOW ============
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ============ MOBILE NAV ============
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ============ LIGHTBOX ============
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => openLightbox(el.dataset.lightbox));
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

// ============ FORM ============
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
  // TODO: Add EmailJS or Formspree integration here
});

// ============ MODEL TOGGLE ============
function toggleModel() {
  document.body.classList.toggle('model-mode');
  const btn = document.querySelector('.dev-btn.model');
  btn.textContent = document.body.classList.contains('model-mode') ? '✅ Exit Model' : '⬜ Model';
}

// ============ FEATURE MODAL ============
function toggleFeature() {
  document.getElementById('featureOverlay').classList.toggle('active');
}
document.getElementById('featureOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) toggleFeature();
});
