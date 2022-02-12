const HAMBURGER = document.getElementById('hamburger');

HAMBURGER.addEventListener('click', function (e) {
  this.classList.toggle('active');
  const DRAWER = document.getElementById('drawer');
  DRAWER.classList.toggle('open');
});