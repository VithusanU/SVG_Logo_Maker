const Circle = require('../Circle.js');

describe('Circle', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
});

const Square = require('../Square.js');

describe('Square', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="80" y="40" width="130" height="130" fill="blue" />');
        });
    });
});

const Text = require('../Text.js');

describe('Text', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Text();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<text x="150" y="120" font-size="60" text-anchor="middle" fill="blue" />');
        });
    });
});

const Triangle = require('../Triangle.js');

describe('Triangle', () => {
    describe('setColor', () => {
        it('should take input parameter "color" and render a svg string to represent user input', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="50, 50 250, 50 150, 200" fill="blue" />');
        });
    });
});