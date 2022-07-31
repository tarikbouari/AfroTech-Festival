let menu = document.querySelectorAll('.bar');


const navList = document.getElementById('nav-list');
const closeBtn = document.getElementById('close');

menu.forEach( (menuBtn) => {
  
  menuBtn.addEventListener('click', () => {
    navList.classList.add('active-navlist');
    closeBtn.classList.add('close-active');
    closeBtn.style.visibility = 'visible';
  });
});


closeBtn.addEventListener('click', () => {
  closeBtn.style.visibility = 'hidden';
  closeBtn.classList.remove('close-active');
  window.location.reload()

});
