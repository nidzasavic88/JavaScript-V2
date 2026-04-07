//1
function pozdravi ()
{
    console.log("Zdravo");
}

pozdravi();

//2
function pozdraviIme(ime)
{
    console.log("Zdravo, " + ime + "!");
}

pozdraviIme("Nikola")

//3
function ispisiBroj(broj)
{
    console.log("Broj je, " + broj);
}

ispisiBroj("7")

//4
function ispisiNiz(niz)
{
    for (let i = 0; i <= niz.length; i++) {
        console.log(niz[i]);
    }
}

ispisiNiz([1,2,3]);

//5
function ispisiParne(niz)
{
    for (let i = 0; i <= niz.length; i++) {
        if (niz[i] % 2 === 0)
        {
           console.log(niz[i]);
        }
    }
}

ispisiParne([1,2,3,4,5,6]);

//6
function dodajParagraf(tekst)
{
    let p = document.createElement("p");
    p.textContent = tekst;

    let  container = document.querySelector('#container');
    container.appendChild(p);
}
dodajParagraf("Nikola");

//7
function  promeniBoju(boxId, boja)
{
    let box = document.querySelector("#boxId");
    box.style.backgroundColor = boja;
    box.style.width = "100px";
    box.style.height = "100px";
}

promeniBoju("box1","lightblue")

//8
function  ispisiPozdravImeGodine(ime, godine)
{
    console.log("Zdravo"+
        " " + ime + " " + "Imas" + " " + godine + " godina!");
}
ispisiPozdravImeGodine("Nikola", "37")

//9
function ispisiListe(niz)
{
    let ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        li.textContent = niz[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

ispisiListe(["Mleko", "Jogurt", "Hleb",]);

//10
function dodajNaslov(tekst)
{
    let h2 = document.createElement("h2");
    h2.textContent = tekst;

    let naslov = document.querySelector("#Naslov");
    naslov.appendChild(h2);
}

dodajNaslov("Naslov");

//11
function proveriParnost(broj)
{
    if (broj % 2 === 0)
    {
        console.log("Boj je paran");
    }
    else
    {
        console.log("Broj je neparan");
    }
}

proveriParnost(1);
proveriParnost(2);

//12
function  ispisiUloge(niz)
{
    for (let i = 0; i < niz.length; i++)
    {
        switch (niz[i]) {
            case "admin":
                console.log("Admin");
                break;
                case "user":
                    console.log("User");
                    break;
                    case "guest":
                        console.log("Guest");
                        break;
                        default:
                            console.log("Nepoznata uloga");
        }
    }
}
ispisiUloge(["admin", "user", "guest"]);

//13
function ispisiKvadrate(niz)
{
   for (let i = 0; i < niz.length; i++)
   {
       console.log(niz[i] * niz[i]);
   }
}

ispisiKvadrate([1,2,3,4,5,6]);

//14
function dodajBox(tekst, boja)
{
    let div = document.createElement("div");

    div.textContent = tekst;
    div.style.backgroundColor = boja;
    div.style.padding = "10px";
    div.style.margin = "5px";

    let box = document.querySelector("#box");
    box.appendChild(div);
}
dodajBox("Plavi box", "blue");
dodajBox("Zeleni box", "green");

//15
function pozdraviSve(nizImena)
{
    for (let i = 0; i < nizImena.length; i++)
    {
        console.log("Zdravo, " + nizImena[i] + "!");
    }
}

let imena = ["Nikola", "Toma", "Viktor",];
pozdraviSve(imena)

//16
function  ispisiDuzinuStringa(string)
{
    console.log("Duzina stringa je " + string.length);
}

ispisiDuzinuStringa("Nikola");

//17
function dodajParagrafove(nizTekstova)
{
    for (let i = 0; i < nizTekstova.length; i++) {
        let P = document.createElement("p");
        P.textContent = nizTekstova[i];

        let tekst = document.querySelector("#Tekst");
        tekst.appendChild(P);
    }
}

dodajParagrafove(["Jabuka", "Kruska", "Mandarina"]);

//18
function promeniSveBoje(nizId, boja)
{
    for (let i = 0; i < nizId.length; i++)
    {
        let element = document.querySelector("#" + nizId[i]);

        if (element)
        {
            element.style.backgroundColor = boja;
        }
    }
}

promeniSveBoje(["Box1", "Box2", "Box3"], "lightblue");

//19
function  ispisiOcene(niz)
{
    for (let i = 0; i < niz.length; i++)
    {
        if (niz[i] === 5)
        {
            console.log("Odlican");
        }
        else if (niz[i] === 3 || niz[i] === 4)
        {
            console.log("Dobar");
        }
        else if (niz[i] === 2 || niz[i] === 1)
        {
            console.log("Nedovoljan");
        }
        else
        {
            console.log("Nije ocena");
        }
    }

}

ispisiOcene([1,2,3,4,5,6]);

//20
function ispisiNizUDiv(niz, divId)
{
   let div = document.querySelector("#" + divId);

   if (div)
   {
       let text = "";

       for (let i = 0; i < niz.length; i++)
       {
           text += niz[i] + " ";
       }
       div.innerHTML = text;
   }
}

ispisiNizUDiv([1,2,3,4,5,6], "Div");

