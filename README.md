# Accessible Accordion Component

A lightweight, accessible accordion component built with vanilla JavaScript, HTML, and CSS.

## Features

- Smooth expand/collapse animations with auto-height transitions
- Fully accessible with ARIA attributes
- Keyboard navigation support
- Dark theme with customizable CSS variables
- No dependencies - pure vanilla JavaScript
- Lightweight and performant using event delegation

## Demo

The accordion allows users to expand and collapse content sections. Multiple sections can be open simultaneously.

## Installation

1. Clone or download this repository
2. Include the files in your project:
```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

## Usage

Add the accordion HTML structure to your page:
```html
<div class="accordion">
    <div class="accordion_item">
        <button class="accordion_toggle" aria-expanded="false" aria-controls="content-1">
            <div>Your Title</div>
            <img class="accordion_icon" src="icons/arrow-down-white.svg" alt="" aria-hidden="true">
        </button>
        <div class="accordion_content" id="content-1">
            <div class="accordion_content-inner">
                Your content here
            </div>
        </div>
    </div>
</div>
```

**Important:** 
- Each `accordion_toggle` needs a unique `aria-controls` ID
- Each `accordion_content` needs a matching `id`
- Add the `open` class to any `accordion_item` to have it start expanded

## Customization

Customize colors by modifying the CSS variables in `style.css`:
```css
:root {
    --background-color: black;
    --secondary-background-color: rgb(18, 18, 18);
    --text-color: white;
    --secondary-text-color: rgb(203, 203, 203);
    --border-color: rgb(65, 65, 65);
}
```

## Accessibility Features

- Semantic `<button>` elements for toggles
- `aria-expanded` attribute updates dynamically
- `aria-controls` links buttons to their content panels
- Keyboard navigation (Tab, Enter, Space)
- Focus indicators for keyboard users only

## Browser Support

Requires browsers that support CSS `interpolate-size` for smooth height animations.

For older browsers, the accordion will still function but without smooth height transitions.

## File Structure
```
├── index.html          # Main HTML file
├── style.css           # Accordion styles
├── script.js           # Accordion functionality
└── icons/
    └── arrow-down-white.svg
```