
const fs = require('fs');
const filePath = 'd:/CSS-HTML-JS-Portfoilo-main/styles/style.css';
let content = fs.readFileSync(filePath, 'utf8');

// Increase bio text size
content = content.replace(
    /(\.hero-bio-box\s*p\s*\{[^}]*?font-size:\s*)[^;]+?;/g,
    '$1 1.2rem;'
);

// Revert hero-col-right position and alignment
content = content.replace(
    /(\.hero-col-right\s*\{[^}]*?justify-content:\s*)[^;]+?;/g,
    '$1 flex-end;'
);
content = content.replace(
    /(\.hero-col-right\s*\{[^}]*?padding:\s*)[^;]+?;/g,
    '$1 0 4rem 12vh 0;'
);

// Update cta-blurb size and left alignment
content = content.replace(
    /(\.cta-blurb\s*\{[^}]*?font-size:\s*)[^;]+?;/g,
    '$1 1.2rem;'
);
content = content.replace(
    /(\.cta-blurb\s*\{[^}]*?text-align:\s*right;)/g,
    '$1\n    text-align: left;'
).replace(/text-align:\s*right;\s*text-align:\s*left;/g, 'text-align: left;');

// Add decorative dot class
if (!content.includes('.text-dot')) {
    const dotStyles = `
.text-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--title-accent);
  border-radius: 50%;
  margin-right: 12px;
  margin-bottom: 2px;
  vertical-align: middle;
}
`;
    content += dotStyles;
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated text sizes, alignment, and reverted column position.');
