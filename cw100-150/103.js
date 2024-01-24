console.clear();

function rgb(r, g, b) {

const rgb = [r, g, b];

return rgb.map(color => {
    color = color < 0 ? 0 : color > 255 ? 255: color;
    color = color.toString(16).toUpperCase().padStart(2, 0);
    return color;
    })
    .join('');
}

console.log(rgb(  0,   0,   0), '000000');
console.log(rgb(  0,   0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255,  47), 'ADFF2F');