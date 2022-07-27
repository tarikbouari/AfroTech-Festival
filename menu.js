
const menu = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const closeBtn = document.getElementById('close');


menu.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('hello');
    navList.classList.add('active-nav');
    closeBtn.classList.add('close-active');
     closeBtn.style.visibility = "visible";
    
})

closeBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('hello');
    navList.classList.remove('active-nav');
    closeBtn.style.visibility = "hidden"
    closeBtn.classList.remove('close-active');
    ;
})

