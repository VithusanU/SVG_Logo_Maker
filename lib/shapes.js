class Shape {
    fill;
    constructor(fill) {
        this.fill = fill;
    }
}

Shape.prototype.render = () => { };
Shape.prototype.setColor = () => { };

module.exports = Shape;