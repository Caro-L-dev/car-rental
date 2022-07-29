"use strict";

/* BURGER MENU */

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}


// 1 : PSEUDO-CODE ---------------------------------
// Objectif : 
// L'image doit changer toutes les 15 secondes.


// 2 : CODE ----------------------------------------

// Cibler les élèments
let carousel = document.querySelector('.carousel');
let timer;

let images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
];

// Ajouter l'écouteur d'event
carousel.addEventListener('click', changeUrl );

let slideIndex = 1;

function changeUrl() {
    index++;
    if ( index == images.length ) {
        index = 0;
    }
    console.log(images[index]);
    carousel.style.backgroundImage = "url('./images/" + images[index] + "')";
};

// Il y a surement une histoire de settimeout qqpart