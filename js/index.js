// Your code goes here
 

// MOUSE OVER

const logo = document.querySelector('.logo-heading');


logo.addEventListener('mouseover', function(e){
    logo.style.color = '#D4673F';
});

// CLICK

const nav = document.querySelectorAll('.nav-link');
console.log(nav);

Array.from(document.links).forEach(function(link){
    link.addEventListener('click', function(evn){
        link.style.color ='green';
    })
})