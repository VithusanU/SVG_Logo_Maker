const Circle = require('./Circle');
const Square = require('./Square');
const Text = require('./Text');
const Triangle = require('./Triangle');

function svGenerator(data) {
    const { text, textCol, shapeForm, shapeCol } = data;
    var svgSetup = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    var svgShape = "";
    var svgContent = "";
    var answer = "";

    const svgText = new Text()
    svgText.setColor(textCol);
    svgContent = svgText.render();

    if (shapeForm === 'triangle') {
        const shape = new Triangle();
        shape.setColor(shapeCol);
        svgShape = shape.render();
    } else if (shapeForm === 'square') {
        const shape = new Square();
        shape.setColor(shapeCol);
        svgShape = shape.render();
    } else if (shapeForm === 'circle') {
        const shape = new Circle();
        shape.setColor(shapeCol);
        svgShape = shape.render();
    }

    return `${svgSetup}\n
    ${svgShape}\n
    ${svgContent}${text}</text>\n
</svg>`;
}

module.exports = svGenerator;