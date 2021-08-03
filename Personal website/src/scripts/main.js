const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
let body = document.querySelector('body');

//function myFunction() {
  //  var x = document.getElementsByClassName("nav__links");
    //if (x[0].style.display === "block") {

      
      //for (var i=0;i<x.length;i+=1){
        //x[i].style.display = 'none';
      //}
    //} else {
      
      //for (var i=0;i<x.length;i+=1){
      //  x[i].style.display = 'block';
      //}
    //}
  //}

window.addEventListener('scroll', () => {
    const sideNav = document.getElementById('up-button');

    if(window.pageYOffset < 500){
        sideNav.style.visibility = 'visible';
        sideNav.style.opacity = '0';

    } else {
        sideNav.style.visibility = 'visible';
        sideNav.style.opacity = '1'; //up-arrow fade
    }
});

let lastScrollTop = 0;
    navbar = document.getElementById('header');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-70px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
})

AOS.init(); //block appearance animation init
