// Your code goes here
 

// MOUSE OVER

const logo = document.querySelector('.logo-heading');


logo.addEventListener('mouseover', function(e){
    logo.style.color = '#D4673F';
});

// CLICK

const nav = document.querySelectorAll('.nav-link');


Array.from(document.links).forEach(function(link){
    link.addEventListener('click', function(evn){
        link.style.color ='green';
    })
});

// AUXCLICK

const footer = document.querySelector('.footer');

footer.addEventListener('auxclick', function(e){
    e.target.textContent = 'Who said you could do that?';
})

// DOUBLE CLICK

const button = document.querySelector('.btn');

button.addEventListener('dbclick', function(e){
    button.style.color = '#17A2B8';
});

// KEYDOWN

document.addEventListener('keydown', function(e){
    e.target.style.backgroundColor= '#17A2B8';
});

// MOUSE ENTER

const image = document.querySelector('.img-content');

image.addEventListener('mouseenter', function(e){
    image.style.border = '5px dotted red';
});

// MOUSE LEAVE

image.addEventListener('mouseleave', function(e){
    image.style.border ='2px solid black';
});
