
const fs = require('fs');
const filePath = 'd:/CSS-HTML-JS-Portfoilo-main/styles/style.css';
let content = fs.readFileSync(filePath, 'utf8');

// Fix hero-col-right
content = content.replace(
    /\.hero-col-right\s*\{[\s\S]*?\}/,
    `.hero-col-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: left;
    height: 100%;
    padding: 0 4rem 12vh 0;
    margin: 0;
  }`
);

// Fix cta-blurb
content = content.replace(
    /\.cta-blurb\s*\{[\s\S]*?\}/,
    `.cta-blurb {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    max-width: 280px;
    margin-bottom: 2rem;
    font-weight: 400;
    text-align: left;
  }`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed alignment and padding in style.css');
