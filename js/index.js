// Your code goes here
//Starting

//Mouse event
//Home button only
const navLink = document.querySelector('.nav-link');
navLink.addEventListener('click', function( stop ) {
    console.log('I was clicked')
    stop.preventDefault();
});

const rightClick = document.querySelector('h1'); 
rightClick.addEventListener('contextmenu', function() {
    rightClick.style.display = 'none'
    console.log('Right Mouse Button Clicked!')
});

const targetDblClick = document.querySelector('body'); 
targetDblClick.addEventListener('dblclick', function( event ) {
    event.target.style.color = 'blue';
});

document.addEventListener('mousemove', function() {
    console.log('The Mouse is Moving!');
});

//first button
const btnHover = document.querySelector('.btn'); 
btnHover.addEventListener('mouseover', function() {
 btnHover.style.color = 'orange';
});

//first text content section
const mouseEnter = document.querySelector('.text-content'); 
mouseEnter.addEventListener('mouseenter', function() {
 mouseEnter.style.color = 'purple';
});

//first h4
const mouseExit = document.querySelector('.intro'); 
mouseExit.addEventListener('mouseleave', function(prop) {
 mouseExit.style.backgroundColor = 'green';
});

//stop Propagation
const clickChange = document.querySelector('p'); 
clickChange.addEventListener('click', function( event ) {
 click.style.fontSize = '80px';
 prop.stopPropagation();
});

//first div only
const divChange = document.querySelector('.text-content'); 
divChange.addEventListener('click', function( event ) {
 divChange.style.background = 'red';
});



//Keyboard event
const keyRecord = document.querySelector('html')
keyRecord.addEventListener('keydown', function() {
 console.log('You pressed the keyboard');
});

const keyRelease = document.querySelector('html')
keyRecord.addEventListener('keyup', function() {
 console.log('You let up on the keyboard');
});



//other events
window.addEventListener('scroll', function() {
    console.log('You Scrolled!');
});

window.addEventListener('resize', function(){
console.log('The Screen is Moving!');
  });