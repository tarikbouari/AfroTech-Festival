const menu = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const closeBtn = document.getElementById('close');

menu.addEventListener('click', () => {
  navList.classList.add('active-nav');
  closeBtn.classList.add('close-active');
  closeBtn.style.visibility = 'visible';
  navList.style.width = '100%';
});

closeBtn.addEventListener('click', () => {
  navList.classList.remove('active-nav');
  closeBtn.style.visibility = 'hidden';
  closeBtn.classList.remove('close-active');
  navList.style.width = '0';
  window.location.reload();
});
