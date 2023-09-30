const Shape = require('./shapes');

class Text extends Shape {
    constructor(fill) {
        super(fill);
    }
}

Text.prototype.setColor = (color) => {
    this.fill = color;
}

Text.prototype.render = () => { 
    // console.log(`<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.fill}" />`);
    return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.fill}" >`;
};

module.exports = Text;