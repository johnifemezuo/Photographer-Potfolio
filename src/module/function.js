
// Navigation for mobile menu

//hamburger icon
const hamburger = document.querySelector('.menu-btn');

//menu-wrapper 
const menuWrapper = document.querySelector('.mobile-nav');

let menuOpen = false;
console.log(hamburger)

hamburger.addEventListener('click', () => {
    if(!menuOpen) {
        menuWrapper.style.width = '0% ';
        hamburger.classList.remove('open');
       
        menuOpen = true;
    } else {
        hamburger.classList.add('open');
        menuWrapper.style.width = '80%'
        menuOpen = false;
    }
})



























