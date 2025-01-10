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


/*----------Email js ---------*/

// Initialize EmailJS
emailjs.init('x1BZxbjsyf3eK-LB-'); // Replace with your EmailJS User ID

// Form submission event listener
document.getElementById('input-box').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send email using EmailJS
    const form = this;

    emailjs.sendForm('service_3vzd0l5', 'template_rubs1z7', form)
        .then(function(response) {
            console.log(response)
            form.reset();
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });

        
}).reset();

