const menu = document.querySelectorAll('.bar');

const navList = document.getElementById('nav-list');
const closeBtn = document.getElementById('close');

menu.forEach((menuBtn) => {
  menuBtn.addEventListener('click', () => {
    navList.classList.add('active-navlist');
    closeBtn.classList.add('close-active');
    closeBtn.style.visibility = 'visible';
  });
});

closeBtn.addEventListener('click', () => {
  navList.style.transform = 'translateX(-100%)';
  closeBtn.style.visibility = 'hidden';
  closeBtn.classList.remove('close-active');
  window.location.reload();
});
