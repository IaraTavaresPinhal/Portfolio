const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  const isActive = sidebar.classList.toggle('active');
  overlay.classList.toggle('active');

  // Toggle visual do botão
  if (isActive) {
    hamburger.classList.add('active');
  } else {
    hamburger.classList.remove('active');
  }
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  hamburger.classList.remove('active'); // também fecha o X
});
