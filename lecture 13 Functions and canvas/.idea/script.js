/**
 * 1. Napravi event listener za klik unutar canvasa
 * 2. Pratiti dali je prvi klik ili drugi klik, na treci klik restartujemo
 * 3. Uzeti poziciju na ekranu na kliku
 * 4. Napraviti liniju
 */

let clickPoints = []; // [x,y] , [x,y]

let canvasElement = document.getElementById("drawArea");

canvasElement.addEventListener("click", function() {

    clickPoints.push("A");
    console.log(clickPoints);

    if (clickPoints < 2)
    {
        clickPoints = [];
    }


})

