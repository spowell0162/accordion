"use strict";

const accordion = document.querySelector('.accordion');

if (accordion) {
    document.querySelector('.accordion').addEventListener('click', function (e) {
        // go up the dom tree until it finds this accordion_toggle
        const toggle = e.target.closest('.accordion_toggle');
        // exit if it can't find the class
        if (!toggle) return;
        const item = toggle.closest('.accordion_item');
        if (!item) return;
        // .toggle() returns true if added, false if removed
        const isOpen = item.classList.toggle('open');
        // .setAttribute takes the attribute and its value
        toggle.setAttribute('aria-expanded', isOpen);
    });
} else console.warn('Accordion not found');