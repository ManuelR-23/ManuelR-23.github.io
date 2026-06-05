// Hamburger menu
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const btn = document.getElementById('hamburger');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
}
function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

// Cursor (skip on touch devices)
if (!window.matchMedia('(pointer: coarse)').matches) {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.transform = `translate(${mx-4}px, ${my-4}px)`;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx-16}px, ${ry-16}px)`;
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .skill-pill, .sobre-card, .form-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform += ' scale(2)';
      ring.style.width = '48px'; ring.style.height = '48px';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px'; ring.style.height = '32px';
    });
  });
}

// Favicon via canvas (compatible con Safari)
(function () {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0a0e0a';
  ctx.beginPath();
  ctx.roundRect(0, 0, 32, 32, 4);
  ctx.fill();
  ctx.strokeStyle = '#3ddc84';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(7, 10); ctx.lineTo(15, 16); ctx.lineTo(7, 22);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(17, 22); ctx.lineTo(26, 22);
  ctx.stroke();
  const link = document.querySelector("link[rel='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.href = c.toDataURL();
  document.head.appendChild(link);
})();

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
