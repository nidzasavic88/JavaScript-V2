// 1

let p = document.createElement("p");
p.textContent = "Zdravo";
p.style.color = "red";
glavni.appendChild(p)
//document.querySelector("#glavni").appendChild(p);

//2
let imena = ["Ana","Marko","Jovan"];

for (let ime of imena) {
    let li = document.createElement("li");
    li.textContent = ime;
    lista.appendChild(li);
}

//3
let broj = 7;
if (broj > 10)
{
    par.textContent = "Broj je veci od 10";
}
else
{
    par.textContent = "Broj je manji od 10";
}

//4
let ocene = [5,3,4,2,5];
let zbir = 0;

for (let ocena of ocene) {
    zbir += ocena;
}

document.querySelector("#zbir").innerHTML = zbir;

//5
let h2 = document.createElement("h2");
h2.textContent = "Naslov";

let paragraph = document.createElement("p");
paragraph.textContent = "Opis";

box.appendChild(h2);
box.appendChild(paragraph);

//6
let gradovi = ["Beograd","Novi Sad","Nis"];

let ul = document.querySelector("#gradovi");

for (let grad of gradovi) {

    if (grad.startsWith("N")) {
        let li = document.createElement("li");
        li.textContent = grad;

        ul.appendChild(li);
    }
}

//7
let h3 = document.createElement("h3");
h3.textContent = "Kartica";

let para = document.createElement("p");
para.textContent = "Opis kartice";

document.querySelector(".card").appendChild(h3);
document.querySelector(".card").appendChild(para);

//8
let poeni = 39;
if (poeni >= 60)
{
    rezultat.textContent = "Odlican";
}
else if (poeni < 60 && poeni > 40)
{
    rezultat.textContent = "Dobar";
}
else if (poeni < 40)
{
    rezultat.textContent = "Nedovoljan";
}

//9
let Brojevi = [2, 4, 6, 8, 10];
let list = document.querySelector("#listaBrojeva");

for (let i = 0; i < Brojevi.length; i++) {
    let kvadrat = Brojevi[i] * Brojevi[i];

    let li = document.createElement("li");
    li.textContent = kvadrat;

    list.appendChild(li);
}

//10
let p1 = document.createElement("p");
p1.textContent = "Paragraf 1";

let p2 = document.createElement("p");
p2.textContent = "Paragraf 2";

let p3 = document.createElement("p");
p3.textContent = "Paragraf 3";

let p4 = document.createElement("p");
p4.textContent = "Paragraf 4";

let p5 = document.createElement("p");
p5.textContent = "Paragraf 5";

container.appendChild(p1);
container.appendChild(p2);
container.appendChild(p3);
container.appendChild(p4);
container.appendChild(p5);

//11
let uloge = ["admin","user","guest"];
let ul1 =document.querySelector("#uloge");

switch (uloge[0]) {
    case"admin":
        ul1.innerHTML += "<li>Admin pristup</li>";
        break;
}
switch (uloge[1]) {
    case"user":
        ul1.innerHTML += "<li>Korisnik</li>";
        break;
}
switch (uloge[2]) {
    case"guest":
        ul1.innerHTML += "<li>Gost</li>";
        break;
}

//12
let  statusi = [true,false,true];
let ul2 = document.querySelector("#statusi");

for (let i = 0; i < statusi.length; i++) {
    if (statusi[i] === true) {
          ul2.innerHTML += "<li>Ulogovan</li>";
    }
    else
    {
        ul2.innerHTML += "<li>Nije ulogovan</li>";
    }
}

//13
let tekst = document.querySelector("#tekst");
tekst.innerHTML +="<strong>Novi tekst u bold</strong>";

//14
let brojevi2 = [2,1,3,5,7,9];
let ulNeparni = document.querySelector("#neparni");

for (let i = 0; i < brojevi2.length; i++) {
    if (brojevi2[i] % 2 !== 0) {
        ulNeparni.innerHTML += "<li>" +brojevi2[i]+ "</li>";
    }
}

//15
let paragraf2 =document.createElement("p");
paragraf2.textContent = "Hello";

document.querySelector(".box2").appendChild(paragraf2);

//16
let imena1 = ["Ana","Marko","Jovan"];
let ul3 = document.getElementById("imena");

for (let i = 0; i < imena1.length; i++) {
    if (imena1[i].length > 3) {
        ul3.innerHTML += "<li>" + imena1[i] + "</li>";
    }
}

//17
let div = document.querySelector("#glavni1");

let naslov = document.createElement("h2");
naslov.textContent = "Naslov";

let para2 = document.createElement("p");
para2.textContent = "Paragraf";

div.appendChild(naslov);
div.appendChild(para2);

let Paragraf  = document.getElementsByTagName("p")
    Paragraf[Paragraf.length - 1].textContent = "Promenjen paragraf";

//18
let brojevi4 = [10,20,30,40,50];
let ul5 = document.querySelector("#listaBrojeva1");

for (let i = 0; i < brojevi4.length; i++) {
    ul5.innerHTML += "<li>Broj:" + brojevi4[i] + "</li>";
}

//19
let container1 = document.querySelector(".container1");

let paragra = document.createElement("p");
paragra.textContent = "Paragraf 1";
container1.appendChild(paragra);

for (let i = 2; i <= 4; i++) {
    let pr = document.createElement("p");
    pr.textContent = "Paragraf " + i;
    container1.appendChild(pr);
}

//20
let Ocene = [5,4,3,2,1];
let ocena = document.querySelector("#ocena");

for (let i = 0; i < Ocene.length; i++) {
    if (Ocene[i] === 5)
    {
        ocena.innerHTML += "<li>Odlican</li>";
    }
    else if (Ocene[i] === 4 || Ocene[i] === 3)
    {
        ocena.innerHTML += "<li>Dobar</li>";
    }

    else
    {
        ocena.innerHTML += "<li>Nedovoljan</li>";
    }
}



