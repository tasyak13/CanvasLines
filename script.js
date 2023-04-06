'use strict';

const canvas = document.getElementById("canv");
const context = canvas.getContext('2d');

class Line {
    constructor(startX, startY, endX, endY, color) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = color;
    }

    render(context, zoom) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX * zoom, this.endY * zoom);
        context.stroke();
    }
}

class CanvasManager {
    static zoom = 1; 
    static arrLines = [];
    static renderAll() {
        context.clearRect(0, 0, 1500, 700);
        CanvasManager.arrLines.forEach(arrLines => arrLines.render(context, CanvasManager.zoom));
    }
}

const lineOne = new Line(20, 20, 20, 50, "#8ED6FF");
const lineTwo = new Line(50, 20, 50, 100, "blue");
const lineThree = new Line(80, 80, 130, 130, "red");


CanvasManager.arrLines.push(lineOne, lineTwo, lineThree);

CanvasManager.renderAll();

function zoom(elem) {
    output.innerText = elem.value;
    CanvasManager.zoom = elem.value;
    context.clearRect(0, 0, 1500, 700);
    CanvasManager.arrLines.forEach(arrLines => arrLines.render(context, CanvasManager.zoom));
}


