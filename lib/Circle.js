const Shape = require('./shapes');

class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }
}

Circle.prototype.setColor = (color) => {
    this.fill = color;
}

Circle.prototype.render = () => { 
    // console.log(`<circle cx="150" cy="100" r="80" fill="${this.fill}" />`);
    return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
};

module.exports = Circle;