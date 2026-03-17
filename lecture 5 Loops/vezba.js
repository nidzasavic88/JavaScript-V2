let broj = 7;
if (broj > 5)
{
    console.log("broj je veci od 5");
}

let godine = 16;
if (godine < 16)
{
    console.log("Maloletan");
}
else
{
    console.log("Punoletan");
}

let ocene = [5, 3, 4, 2, 5]
for (let i = 0; i <= ocene.length; i++) {
    if (i >= 4)
    {
        console.log(i);
    }
}

let brojevi = [1,2,3,4,5,6];
for (let  i=0; i < brojevi.length; i++) {

    if (brojevi[i] % 2 === 0) {
        console.log(brojevi[i]);
    }

}

let imena = ["Ana", "Marko","Jovan",];
for (let i = 0; i < imena.length; i++) {
    if (imena[i][0] === "A") {
        console.log(imena[i]);
    }
}

let gradovi = ["Beograd","Novi Sad","Nis"];
for (let i = 0; i < gradovi.length ; i++) {
    if (gradovi[i].length > 5) {
        console.log(gradovi[i]);
    }
}

let dan = 3;
switch (dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
}

let boja = "zuta";
switch (boja) {
    case "zelena":
        console.log("Kreni");
        break;
    case "crvena":
        console.log("Stop");
        break;
    case "zuta":
        console.log("Paznja")
}

let statusi = ["online", "offline", "online"];
for (let i = 0; i < statusi.length; i++) {
    switch (statusi[i]) {
        case "online":
            console.log("Korisnik activan");
            break;
        case "offline":
            console.log("Korisnik nije activan");

    }
}

let number = 10;
if (number % 2 === 0) {
    console.log("Paran");
}
else {
    console.log("Neparan" +
        "");
}

let rezultati = [45,70,90];
for (let i = 0; i < rezultati.length; i++) {
    if (rezultati[i] >= 60)
    {
        console.log("Polozio");
    }
    else
    {
        console.log("Nedovoljno");
    }
}

let numbers = [3,5,8,2];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

let brojevi1 = [1,2,3,4,5];
let najveci = brojevi1[0];
for (let i = 0; i < brojevi1.length; i++) {
    if (brojevi1[i] > najveci) {
        najveci = brojevi1[i]
    }
}
console.log(najveci);

let poruke = ["Hello","World","JS"];
for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].includes("o")) {
        console.log(poruke[i]);
    }
}

let poeni = 44;
if (poeni >= 80)
{
    console.log("Odlican");
}
else if (poeni >= 60_79)
{
    console.log("Dobar");
}
else if (poeni < 60)
{
    console.log("Nedovoljan");
}

let uloge = ["admin", "user", "guest"];
for (let i = 0; i < uloge.length; i++) {
    switch (uloge[i]) {
        case "admin":
            console.log("Admin pristup");
            break;
        case "user":
            console.log("Korisnik");
            break;
        case "guest":
            console.log("Gost");
    }
}

let brojevi2 = [2,4,6,8];

let i = 0;

while (i < brojevi2.length) {
    console.log(brojevi2[i]);
    i++;
}

let x = 5;

while (x > 0) {
    console.log(x);
    x--;

}

let ocene1 = [5,4,3,2,1];

let suma = 0;

for (let i = 0; i < ocene1.length; i++) {
    suma += ocene1[i];
}

let prosek = suma / ocene1.length;

console.log(prosek);

let jezici1 = ["JS", "HTML", "CSS"];
for (let i = 0; i < jezici1.length; i++) {
    switch (jezici1[i]) {
        case "JS":
            console.log("JavaScript");
            break;
        case "HTML":
            console.log("HTML jezik");
            break;
        case "CSS":
            console.log("CSS jezik");
    }
}

let ulogovan = [true,false,true];
for (let i = 0; i < ulogovan.length; i++) {
    switch (ulogovan[i]) {
        case true:
            console.log("Ulogovan");
            break;
        case false:
            console.log("Nije ulogovan");
    }
}

let vreme = "dan";
switch (vreme) {
    case "noc":
        console.log("Laku noc");
        break;
    case "jutro":
        console.log("Dobro jutro");
        break;
    case "dan":
        console.log("Dobar dan");
}

let cifre = [1,2,3,4,5];

let summ = 0;

for (let i = 0; i < cifre.length; i++) {
    if (cifre[i] > 3) {
        summ += cifre[i];
    }

}
console.log(summ);

let ocene2 = [5,3,4,2,5];

let brojac = 0;

for (let i = 0; i < ocene2.length; i++) {
    if (ocene2[i] === 5) {
        brojac++;
    }

}

console.log(brojac);

let Gradovi = ["Beograd","Novi Sad","Nis"];
for (let i = 0; i < gradovi.length; i++) {
    if (Gradovi[i] === "Nis")
    {
        console.log("Pronadjen Nis");
    }
    else
    {
        console.log("Nis nije pronadjen");
    }
}

let numbers2 = [1,2,3,4,5];
for (let i = 0; i < numbers2.length; i++) {
   numbers2[i] = numbers2[i] + 10;
}

console.log(numbers2);


let tip = "desktop";
switch (tip) {
    case "mobilni":
        console.log("Mobilni uredjaj");
        break;
    case "desktop":
        console.log("Desktop uredjaj");
}

let messages = ["Zdravo","Cao","hello"];

let spojeno = "";

for (let i = 0; i < messages.length; i++) {
    spojeno += messages[i];
}
console.log(spojeno);

let Brojevi = [10,20,30];

for (let i = 0; i < Brojevi.length; i++) {
    Brojevi[i] = Brojevi[i] / 2;
}
console.log(Brojevi);

let Ocene = [5,3,4,2,5];
for (let i = 0; i < Ocene.length; i++) {
    if (Ocene[i] >= 5)
    {
        console.log("Odlican");
    }
    else if (Ocene[i] >= 3)
    {
        console.log("Dobar");
    }
    else
    {
        console.log("Nedovoljan");
    }
}


















