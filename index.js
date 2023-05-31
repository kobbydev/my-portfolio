const openIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const smNav = document.querySelector('.sm-screen-nav');
const lgNav = document.querySelector('.lg-screen-nav');
const contactBtn = document.querySelector('#contact')


openIcon.addEventListener('click', function(){
    smNav.style.display = "block";
    lgNav.style.display = "none";
});

closeIcon.addEventListener('click', function(){
    smNav.style.display = "none";
    lgNav.style.display = "flex";
});

contactBtn.addEventListener('click', function(){
    window.location = 'mailto:agyapongantwi@yahoo.com';
})
