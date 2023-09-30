const Shape = require('./shapes');

class Square extends Shape {
    constructor(fill) {
        super(fill);
    }
}

Square.prototype.setColor = (color) => {
    this.fill = color;
}

Square.prototype.render = () => { 
    // console.log(`<rect x="50" y="50" width="160" height="160" fill="${this.fill}" />`);
    return `<rect x="80" y="40" width="130" height="130" fill="${this.fill}" />`;
};

module.exports = Square;