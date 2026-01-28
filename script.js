"use strict";

// Manually open and close
document.querySelector('.accordion_component').addEventListener('click', function (e) {
    const toggle = e.target.closest('.accordion_toggle');
    if (!toggle) return;
    const item = toggle.closest('.accordion_item');
    item.classList.toggle('open');
});