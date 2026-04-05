//1
let main = document.querySelector("#main");
let paragraph = document.createElement("p");
paragraph.textContent = "Dobrodosao!"
paragraph.style.fontSize = "18px";
main.appendChild(paragraph);

//2
let imena = ["Petar","Luka","Maja"];

for (let ime of imena) {
    if (ime.indexOf("a")) {
        let p = document.createElement("p");
        p.textContent = ime;
        main.appendChild(p);
    }
}

//3
let score = 88;

let para = document.createElement("p");

para.textContent = (score >= 50) ? "Pass" : "Fail"

main.appendChild(para);

//4
let  brojevi = [3,6,9,12,15];

for (let broj of brojevi) {
    if (broj % 3 ===0) {
        let lista = document.createElement("li");
        lista.textContent = `Broj ${broj} je deljiv sa 3`;
        main.appendChild(lista);
    }
}

//5
let container = document.querySelector(".container");

let colors = ["red", "green", "blue", "purple"];

for (let i = 0; i < 5; i++) {
    let span = document.createElement("span");

    span.textContent = `Element ${i + 1}`;

    span.style.color = colors[i];

    container.appendChild(span);
}

//6
let proizvodi = ["Mleko","Hleb","Sir"];

for (let proizvod of proizvodi) {
    let li = document.createElement("li");
    li.textContent = `Na lageru: ${proizvod}`;
    container.appendChild(li);
}

//7

let string = "Hello World";
let naslov = document.querySelector("#naslov");

if (string.length > 5)
{
    naslov.textContent = "Dug naslov";
}
else
{
    naslov.textContent = "Kratak naslov";
}

//8

let ocene = [1,3,5,2,4];

let zbir = 0;

for (let i = 0; i < ocene.length; i++) {
    zbir += ocene[i];
}
    let prosek = zbir / ocene.length;

    let par = document.querySelector("#prosek");
    par.textContent = `Prosecna ocena: ${prosek}`;

//9
let gradovi = ["Beograd","Novi Sad","Nis","Kragujevac"];

let list = document.querySelector("#listaGradova");

for (let i = 0; i < gradovi.length; i++) {
    if (gradovi[i] === "Nis") {
        continue;
    }

    let Li = document.createElement("li");
    Li.innerText = gradovi[i];
    list.appendChild(Li);
}

//10
let boxes = document.querySelector("#boxes");

let color = ["black","orange","gold","silver"];

for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = color[i];
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.margin = "5px";
    div.style.display = "inline-block";
    boxes.appendChild(div);
}

//11
let  uloge = ["admin","user","guest"];

for (uloga of uloge) {
    let li = document.createElement("li");
    let tekst;

    switch (uloga) {
        case "admin":
            tekst = "Pun pristup"
            break;
            case "user":
                tekst = "Ogranicen pristup";
                break;
                case "guest":
                    tekst = "Nepoznata uloga";
    }
    li.textContent = tekst;
    boxes.appendChild(li);
}

//12
let input = document.querySelector("#textInput");
let charCount = document.querySelector("#charCount");

input.addEventListener("input", function () {
    charCount.textContent = "Broj karaktera: " + input.value.length;
});

//13
let toggleBtn = document.querySelector("#toggleBtn");
let info = document.querySelector("#info");

toggleBtn.addEventListener("click", function () {
    if (info.style.display === "none")
    {
        info.style.display = "block";
    }
    else
    {
        info.style.display = "none";
    }
});

//14
let  cifre = [0,1,2,3,4,5,6,7,8,9];
let parni = document.querySelector("#parni");

for (let i = 0; i < cifre.length; i++) {
    if (cifre[i] % 2 === 0)
    {
        let Li = document.createElement("li");
        Li.textContent = cifre[i];
        parni.appendChild(Li);
    }
}

//15
let colorBox = document.querySelector("#colorBox");
colorBox.style.width = "150px";
colorBox.style.height = "150px";

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = randomColor();
});

colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = randomColor();
})

//16
let flexContainer = document.querySelector("#flexContainer");
flexContainer.style.display = "flex";
flexContainer.style.gap = "10px";

for (let i = 1; i <= 5; i++) {
    let P = document.createElement("p");
    P.textContent = "Red" + i;

    if (i % 2 === 0) {
        P.style.fontWeight = "bold";
    }
    flexContainer.appendChild(P);

}

//17
let Ocene = [5,4,3,2,1];
let rezultat = document.querySelector("#rezultat");

for (let i = 0; i < Ocene.length; i++) {
    let Para = document.createElement("p");

    if (Ocene[i] === 5)
    {
        Para.textContent = "Odlican";
    }
    else if (Ocene[i] === 4 || Ocene[i] === 3)
    {
        Para.textContent = "Dobar";
    }
    else
    {
        Para.textContent = "Nedovoljan"
    }

    rezultat.appendChild(Para);
};

//18
let addCard = document.querySelector("#addCard");
let cards = document.querySelector("#cards");

addCard.addEventListener("click", () => {
    let card = document.createElement("div");
    card.style.border ="1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px";

    let h2 = document.createElement("h2");
    h2.textContent = "Kartica";

    let p = document.createElement("p");
    p.textContent = "Ovo je sadrzaj kartice.";

    card.appendChild(h2);
    card.appendChild(p);

    cards.appendChild(card);
});

//19
let  voce = ["Jabuka","Banana","Kruška","Ananas"];
let Lista = document.querySelector("#lista");

for (let i = 0; i < voce.length; i++) {
    if (voce[i].length > 5)
    {
        let li = document.createElement("li");
        li.textContent = "Voce:" + voce[i];
        Lista.appendChild(li);
    }
}

//20
let niz = [2,4,6,8];
let numbers = document.querySelector("#numbers");

for (let i = 0; i < niz.length; i++) {
    let pa = document.createElement("p");
    pa.textContent = niz[i] * niz[i];

    numbers.appendChild(pa);
}

//21
let focus = document.querySelector("#focusInput");

focus.addEventListener("focus",  function() {
    focus.style.backgroundColor = "lightgreen";
});

//22
let blur = document.querySelector("#blurInput");

blur.addEventListener("focus", () => {
    blur.style.backgroundColor = "lightgreen";
});

blur.addEventListener("blur", () => {
    blur.style.backgroundColor = "white";
});

//23
let dbClick = document.querySelector("#doubleClick");
dbClick.addEventListener("dblclick", function() {
    dbClick.textContent = "Dvaput kliknuto";
});

//24
let ocene1 = [3,4,5,2];
let veciOdTri = 0;

 for (let i = 0; i < ocene1.length; i++) {
     if (ocene1[i] > 3){
         veciOdTri++;
     }
 }

let count = document.querySelector("#count");
 count.textContent = "Broj ocena vecih od tri:"  + veciOdTri;

//25
let hover = document.querySelector("#hoverEffect");
hover.style.width = "150px";
hover.style.height = "150px";
hover.style.border = "1px solid black";

hover.addEventListener("mouseenter", () => {
    hover.style.backgroundColor = "lightgreen";
});

hover.addEventListener("mouseleave", () => {
    hover.style.backgroundColor = "white";
});

//26
let addItemBtn = document.querySelector("#addItemBtn");
addItemBtn.style.marginTop = "10px";
let items = document.querySelector("#items");

addItemBtn.addEventListener("click", () => {
    items.innerHTML = "<li>Nova stavka</li>";
});

//27
let Imena = ["Ana","Maja","Ivan","Luka"];
let names = document.querySelector("#names");

for (let i = 0; i < Imena.length; i++) {
    if (names[i] === "Ivan")
    {
        continue;
    }

    let paragraph = document.createElement("p");
    paragraph.textContent = "Ime: " + Imena[i];
    names.appendChild(paragraph);
}

//28
let Boxes = document.querySelector("#boxesContainer");
Boxes.style.display = "flex";
Boxes.style.gap = "10px";
let boje = ["lightcoral", "lightblue", "lightgreen"];

for (let i = 0; i < 3; i++) {
    let Box = document.createElement("div");
    Box.textContent = "Box " + (i + 1);
    Box.style.backgroundColor = boje[i];

    Boxes.appendChild(Box);
}

//29
let  Brojevi = [5,10,15,20,25];
let result = document.querySelector("#result");

for (let i = 0; i < Brojevi.length; i++) {
    let parag = document.createElement("p");

    switch (Brojevi[i] % 5 === 0) {
        case true:
            parag.textContent = Brojevi[i] + " - Deljiv sa 5";
            break;
        default:
            parag.textContent = Brojevi[i] + " - Nije deljiv";
    }

    result.appendChild(parag);
}

//30
let loop = document.querySelector("#loopText");

for (let i = 0; i <= 5; i++) {
    let Pa = document.createElement("p");
    Pa.textContent = "Paragraf" +" "+ i;

    if (i % 2 === 0) {
        Pa.style.color = "blue";
    }

    loop.appendChild(Pa);
}












