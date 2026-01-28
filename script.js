"use strict";

// HTML Elements
const accordionItem = document.querySelectorAll('.accordion_item');

// Event Handlers
accordionItem.forEach(item => {
    const toggle = item.querySelector('.accordion_toggle');
    const content = item.querySelector('.accordion_content');
    const icon = item.querySelector('.accordion_icon');
    toggle.addEventListener('click', function () {
        content.classList.toggle('open');
        icon.classList.toggle('open');
    });
});