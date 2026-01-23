"use strict";

const accordionItem = document.querySelectorAll('.accordion_item');

accordionItem.forEach(item => {
    const toggle = item.querySelector('.accordion_toggle');
    const content = item.querySelector('.accordion_content');
    toggle.addEventListener('click', function () {
        content.classList.toggle('open');
    });
});