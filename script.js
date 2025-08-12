document.addEventListener('DOMContentLoaded', () => {
  // --- Logo fade (progressive enhancement)
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.classList.add('fade');
    requestAnimationFrame(() => logo.classList.add('show'));
  }

  // --- Mark current nav item
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('current');
  });

  // --- Lightbox
  const images = document.querySelectorAll('.gallery img');
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const imgEl = document.createElement('img');
  imgEl.addEventListener('click', e => e.stopPropagation()); // don't close when clicking image
  lightbox.appendChild(imgEl);

  images.forEach(img => {
    img.addEventListener('click', () => {
      imgEl.src = img.src;
      imgEl.alt = img.alt || '';
      lightbox.classList.add('active');
    });
  });

  // Close on backdrop click
  lightbox.addEventListener('click', () => lightbox.classList.remove('active'));

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('active');
  });
});
