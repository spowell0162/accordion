"use strict";

// Manually open and close
document.querySelector('.accordion_component').addEventListener('click', function (e) {
    const toggle = e.target.closest('.accordion_toggle'); // goes up the dom tree until it finds this class
    if (!toggle) return; // exits of it can't find the class
    const item = toggle.closest('.accordion_item');
    const isOpen = item.classList.toggle('open'); // .toggle returns boolean - true if added, false if removed
    toggle.setAttribute('aria-expanded', isOpen); //setAttribute takes the attribute and its value
});