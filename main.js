//const { defaultConfiguration } = require("express/lib/application");

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*---------Scroll section active link----*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };       
    });
/*------------sticky navbar-------------*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*----------remove toggle icon ---------*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};
/*----------scroll reveal ---------*/
ScrollReveal({
    distance:'80px',
    duration:2000, 
    delay:200,

 });
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

/*----------Typed js ---------*/
const typed= new Typed('.multiple-text',{
    strings:['Backend Developer','App Developer','Data Analyst'],
    typeSpeed:70,
    backSpeed:70,
    loopDelay:1000,
    loop:true,
});
const typed1= new Typed('.multiple-text1',{
    strings:['Backend Developer','App Developer','Data Analyst'],
    typeSpeed:70,
    backSpeed:70,
    loopDelay:1000,
    loop:true,
});
