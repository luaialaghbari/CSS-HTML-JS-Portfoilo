
const fs = require('fs');
const path = require('path');

const filePath = 'd:/CSS-HTML-JS-Portfoilo-main/styles/style.css';
let content = fs.readFileSync(filePath, 'utf8');

// The replacement depends on exact line endings (LF vs CRLF)
// We'll use a regex to be more flexible with whitespace and line endings

// Match .hero-name-bg { ... top: 0; ... }
content = content.replace(
    /(\.hero-name-bg\s*\{\s*position:\s*absolute;\s*)top:\s*0;/g,
    '$1top: -2vh;'
);

// Match transform: scaleY(1.3) translateX(30px); ... padding-top: 20px;
content = content.replace(
    /(transform:\s*scaleY\(1\.3\)\s*translateX\(30px\);\s*)padding-top:\s*20px;/g,
    '$1padding-top: 35px;'
);

// Also change the translateX(30px) to translateX(15px)
content = content.replace(
    /transform:\s*scaleY\(1\.3\)\s*translateX\(30px\);/g,
    'transform: scaleY(1.3) translateX(15px);'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated style.css');
