
import os

file_path = r'd:\CSS-HTML-JS-Portfoilo-main\styles\style.css'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix top: 0;
content = content.replace(
    '.hero-name-bg {\n    position: absolute;\n    top: 0;',
    '.hero-name-bg {\n    position: absolute;\n    top: -2vh;'
)

# Fix translateX and padding-top
content = content.replace(
    'transform: scaleY(1.3) translateX(30px);\n   padding-top: 20px;',
    'transform: scaleY(1.3) translateX(15px);\n   padding-top: 35px;'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
