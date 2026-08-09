/**
 * 1. Napravi event listener za klik unutar canvasa
 * 2. Pratiti dali je prvi klik ili drugi klik, na treci klik restartujemo
 * 3. Uzeti poziciju na ekranu na kliku
 * 4. Napraviti liniju
 */

let clickPoints = []; // [x,y] , [x,y]


let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext("2d");
let history = document.getElementById("history");

let drawButton = document.getElementById("draw");
let resetButton = document.getElementById("resetDrawing");
let drawWithColorbutton = document.getElementById("drawWithColor");

let drawCounter = 0;

canvasElement.addEventListener("click", function(event)
{

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoints.push({x: x, y: y});
    console.log(clickPoints);


});

drawButton.addEventListener("click", function()
{
    /**
     * POTREBNO 1. Iscrtaj path - drawPath()
     * NEPOTREBNO 2. Povecaj drawCounter - incrementDrawCounter()?
     * NEPOTREBNO 3. resetuj clickPoint - resetClickPoints()?
     * NEPOTREBNO 4. Ispisi poruku - sendDrawMassage()?
     */

    let randomColor = generateRandomColor();
    drawPath(randomColor);

    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);
    for(let i in clickPoints) {
        if(i == 0) {
            continue;
        }
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }

    ctx.strokeStyle = randomColor;
    ctx.stroke();

    incrementDrawCounter();
    resetClickPoints();
    sendDrawMassage(randomColor);


});

drawWithColorbutton.addEventListener("click", function() {
    let color = prompt("Unesite boju koju zelite?");

    drawPath(color);
    incrementDrawCounter();
    resetClickPoints();
    sendDrawMassage(color);
});


resetButton.addEventListener("click", function()
{
    ctx.clearRect(0,0, canvasElement.width, canvasElement.height );
})

function incrementDrawCounter()
{
    drawCounter++;
}

function resetClickPoints()
{
    clickPoints = [];
}

function sendDrawMassage(color)
{
    history.innerHTML += "Nacrtana"+drawCounter+"linija #"+color;
}

function  generateRandomColor()
{
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function drawPath (color)
{
    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);
    for(let i in clickPoints) {
        if(i == 0) {
            continue;
        }
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }
    ctx.strokeStyle = color;
    ctx.stroke();
}

