
const fs = require('fs');
const filePath = 'd:/CSS-HTML-JS-Portfoilo-main/styles/style.css';
let content = fs.readFileSync(filePath, 'utf8');

// Update bio box p max-width
content = content.replace(
    /(\.hero-bio-box\s*p\s*\{[^}]*?max-width:\s*)[^;]+?;/g,
    '$1 450px;'
);

// Update cta-blurb max-width
content = content.replace(
    /(\.cta-blurb\s*\{[^}]*?max-width:\s*)[^;]+?;/g,
    '$1 450px;'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Increased max-width for side text blurbs in style.css');
