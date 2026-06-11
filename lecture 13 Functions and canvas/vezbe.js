//2
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function  crtajKrug(ctx, x, y, r, boja)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);

    ctx.fillStyle = boja;
    ctx.fill();

    ctx.closePath();

}

crtajKrug(ctx, 100, 150 ,40, "blue");

//3
function crtajPravougaonik(ctx, x, y, width, height, boja)
{
ctx.beginPath();
ctx.rect(x, y, width, height);
ctx.fillStyle = boja;
ctx.fill();
ctx.stroke();
}

crtajPravougaonik(ctx, 300, 300 ,150, 100, "red");

//4
function povecajBroj(broj)
{
    return broj +1;
}

let broj = 7;

let noviBroj = povecajBroj(broj);

ctx.font = "20px Arial";

ctx.fillText(noviBroj ,50, 50);

//5
function nasumicnaBoja()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

let boja =nasumicnaBoja();

console.log(boja);

//6
function  crtajLiniju(ctx, x1, y1, x2, y2, boja)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = boja;
    ctx.stroke();
    ctx.closePath();
}

crtajLiniju(ctx, 600,600,600,300,"green");

//7
function  prosekNiza(niz)
{
    let suma = 0;

    for(let broj of niz)
    {
        suma += broj;
    }

    return suma / niz.length;
}

let brojevi = [5, 10, 15 ,20 ,25 ,30];

let prosek = prosekNiza(brojevi);

ctx.font = "40px Arial";
ctx.fillStyle = "orange";

ctx.fillText("Prosek: " + prosek, 300, 50);

//8
function crtajKombinaciju(ctx)
{
    crtajKrug(ctx, 250, 150 ,50, nasumicnaBoja());

    crtajKrug(ctx, 400, 150 ,60, nasumicnaBoja());

    crtajKrug(ctx, 600, 150 ,70, nasumicnaBoja());
}

crtajKombinaciju(ctx);

//9
function maksBroj(niz)
{
    let max = niz[0];

    for (let broj of niz)
    {
        if(broj > max)
        {
            max = broj;
        }
    }

    return max;
}

let najveci = maksBroj(brojevi);

console.log(najveci);

ctx.beginPath();

ctx.rect(100, 500, najveci, najveci);

ctx.fillStyle = "black";
ctx.fill();

ctx.stroke();

ctx.closePath();

//10
function ispisiTekst(ctx, tekst, x, y, boja)
{
    ctx.fillStyle = boja;

    ctx.font = "30px Arial";

    ctx.fillText(tekst, x, y,);

    return tekst;
}

let string = ispisiTekst(ctx, "Pa to je Sjajno!", 300,600, "gold");

console.log(string);