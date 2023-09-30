const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(fill) {
        super(fill);
    }
}

Triangle.prototype.setColor = (color) => {
    this.fill = color;
}

Triangle.prototype.render = () => { 
    // console.log(`<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`);
    return `<polygon points="50, 50 250, 50 150, 200" fill="${this.fill}" />`;
};

module.exports = Triangle;