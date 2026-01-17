
const fs = require('fs');
const filePath = 'd:/CSS-HTML-JS-Portfoilo-main/styles/style.css';
let content = fs.readFileSync(filePath, 'utf8');

// Update hero-col-left padding
content = content.replace(
    /(\.hero-col-left\s*\{[^}]*?padding:\s*)[^;]+?;/g,
    '$1 0 0 0 6vw;'
);

// Update hero-col-right
content = content.replace(
    /(\.hero-col-right\s*\{[^}]*?justify-content:\s*)[^;]+?;/g,
    '$1 center;'
);
content = content.replace(
    /(\.hero-col-right\s*\{[^}]*?padding:\s*)[^;]+?;/g,
    '$1 0 6vw 0 0;'
);

// Update bio box p max-width
content = content.replace(
    /(\.hero-bio-box\s*p\s*\{[^}]*?max-width:\s*)[^;]+?;/g,
    '$1 280px;'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated side column positions in style.css');
