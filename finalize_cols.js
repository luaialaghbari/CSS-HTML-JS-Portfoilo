
const fs = require('fs');
const filePath = 'd:/CSS-HTML-JS-Portfoilo-main/styles/style.css';
let content = fs.readFileSync(filePath, 'utf8');

// Ensure hero-col-right has align-items: flex-end
content = content.replace(
    /(\.hero-col-right\s*\{[^}]*?)(text-align:\s*right;)/g,
    '$1align-items: flex-end;\n    $2'
);

// Update cta-blurb max-width
content = content.replace(
    /(\.cta-blurb\s*\{[^}]*?max-width:\s*)[^;]+?;/g,
    '$1 280px;'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finalized hero column alignments in style.css');
