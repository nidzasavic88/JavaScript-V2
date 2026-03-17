let temperatura = 19;

if (temperatura > 25)
{
    console.log("Vruce");
}
else if (temperatura >= 15 && temperatura <=25) {
    console.log("Umereno");
}

else if (temperatura < 15)
{
    console.log("Hladno");
}

let poeni = [45, 78, 90,62];
for (let i = 1; i <= poeni.length; i++) {
    if (poeni[i] >= 60)
    {
        console.log("Polozio");
    }
    else
    {
        console.log("Nedovoljan");
    }
}

let brojevi = [1,2,3,4,5,6,7,8,9,10];

for (let i = 1; i <= brojevi.length; i++)
    if (brojevi[i] % 3 === 0)
{
    console.log(brojevi[i]);
}

let imena = ["Ana","Marko","Jovan","Ivana"];
for (let i = 0; i < imena.length; i++)
    if (imena[i].length >= 4)
    {
        console.log(imena[i]);
    }


let godina = 2026;

if ((godina % 4 === 0 && godina % 100 !== 0) || (godina % 400 === 0))
{
    console.log("Godina je prestupna.");
}
else
{
    console.log("Godina nije prestupna.");
}

let ocene = [5,4,3,2,1];
let brojac = 0;

for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] === 2){
        brojac++;
    }
}
console.log(brojac);

let dan = "subota";
switch (dan) {
    case "subota":
        console.log("Vikend");
        break;
    default:
        console.log("Radni dan");
}

let statusi = ["online","offline","offline","online"];
for (let i = 0; i <= statusi.length; i++) {
    switch (statusi[i]) {
        case "online":
            console.log("Aktivan");
            break;
         case "offline":
             console.log("Nije aktivan");
    }
}

let Brojevi = [5,8,12,3];
let najmanji = Brojevi[0];

for (let i = 0; i < Brojevi.length; i++) {
    najmanji = Math.min(najmanji, Brojevi[i]);
}

console.log(najmanji);

let brojevi1 = [5,8,12,3];
let najmanji1 = brojevi1[0];

for (let i = 1; i < brojevi.length; i++) {
    if (brojevi1[i] < najmanji1) {
        najmanji1 = brojevi1[i];
    }
}

console.log(najmanji1);



let Ocene = [5,3,4,2,5];
let zbir = 0;

for (let i = 0; i < Ocene.length; i++) {
    zbir += Ocene[i];
}

console.log(zbir);

let vreme = "dan" +
    "";

switch (vreme) {
    case "jutro":
        console.log("Dobro jutro");
        break;
    case "dan":
        console.log("Dobro dan");
        break;
    case "noc":
        console.log("Laku noc");
        break;
    default:
            console.log("Nepoznato doba dana");
}

let jezici = ["JS", "HTML", "CSS", "Python"];
for (let i = 0; i <= jezici.length; i++) {
    switch (jezici[i]) {
        case "JS":
            console.log("Java Script")
            break;
        case "HTML":
            console.log("HyperText Markup Language");
            break;
        case "CSS":
            console.log("Cascading Style Sheets");
            break;
        case "Python":
            console.log("Python");
    }

}

    let Numbers = [2, 4, 6, 8, 10];
    for (let i = 0; i < Numbers.length; i++) {
        let rezultat = Numbers[i] / 2;
        console.log(rezultat);
    }


    let poruke = ["Zdravo", "Cao", "Hello", "Hi"];

    for (let i = 0; i < poruke.length; i++) {
        if (poruke[i].length > 2) {
            console.log(poruke[i]);
        }

    }

    let ulogovan = [true,false,true,false];
    for (let i = 0; i < ulogovan.length; i++) {
        if (ulogovan[i] === true)
        {
            console.log("Ulogovan");
        }
        else if (ulogovan[i] === false)
        {
            console.log("Nije ulogovan");
        }
    }

    let broj = 9;
     if (broj % 3 === 0)
     {
         console.log("Broj je deljiv sa 3");
     }
     else
     {
         console.log("Broj nije je deljiv sa 3");
     }

     let ocene2 = [1,2,3,4,5];
     for (let i = 0; i < ocene2.length; i++) {
         if (ocene2[i] === 5)
         {
             console.log("Odlican");
         }
         else if (ocene2[i] === 3 || ocene2[i] === 4)
         {
             console.log("Dobar");
         }
         else if (ocene2[i] === 1 || ocene2[i] === 2)
         {
             console.log("Nedovoljan");
         }
     }



     let gradovi = ["Beograd", "Novi Sad", "Nis", "Subotica"];

     for (let i = 0; i < gradovi.length; i++) {
         if (gradovi[i][0] === "N") {
             console.log(gradovi[i]);
         }

     }

     let Brojevi1 = [1,2,3,4,5];

     let parni = 0;

     for (let i = 1; i < Brojevi1.length; i +=2) {
         parni += Brojevi1[i];
     }
     console.log(parni);

     let Poeni = 39;
     if (Poeni > 60)
     {
         console.log("Odlican");
     }
     else if (Poeni >= 40 && Poeni <= 60)
     {
         console.log("Dobar");
     }
     else if (Poeni < 40)
     {
         console.log("Nedovoljan");
     }

    let uloge = ["admin","user","guest"];
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

     let brojevi3 = [3,7,2,8,5];
     let najveci = brojevi3[0];

     for (let i = 1; i < brojevi3.length; i++) {
         najveci = Math.max(najveci, brojevi3[i]);
     }
     console.log(najveci);

     let temperatura1 = [12,25,30,18];
     for (let i = 0; i < temperatura1.length; i++) {
         if (temperatura1[i] > 25) {
             console.log("Vruce");
         } else if (temperatura1[i] > 15 && temperatura1[i] <= 25) {
             console.log("Umereno");
         } else if (temperatura1[i] < 15) {
             console.log("Hladno");
         }
     }

     let Poruke = ["Hello","World","JS","Bye"];
     let spojeno = "";

     for (let i = 0; i < Poruke.length; i++) {
         spojeno += Poruke[i];
     }
     console.log(spojeno);

     let tip = "mobilni";
     switch (tip) {
         case "desktop":
             console.log("Desktop uredjaj");
             break;
             case "mobilni":
                 console.log("Mobilni uredjaj");
     }

     let brojevi4 = [1,2,3,4,5,6,7,8,9,10];
     for (let i = 0; i < brojevi4.length; i++) {
         console.log(brojevi4[i] * brojevi4[i]);
     }

     let ocene4 = [5,3,4,2,5,3,1];
     let brojac1 = 0;

     for (let i = 0; i < ocene4.length; i++) {
         brojac1 += ocene4[i] >= 4;
     }
     console.log(brojac1);

     let Gradovi2 = ["Beograd", "Novi Sad", "Nis",];
     for (let i = 0; i < Gradovi2.length; i++) {
         if (Gradovi2[i] === "Nis")
         {
             console.log("Pronadjen Nis");
         }
         else
         {
             console.log("Nis nije pronadjen");
         }
     }

     let brojevi5 = [10,20,30];
     let noviNiz = [];

     for (let i = 0; i < brojevi5.length; i++) {
         noviNiz.push(brojevi5[i] +5);
     }
     console.log(noviNiz);


     let ocene5 = [5,3,4,2,5]
    for (let i = 0; i < ocene5.length; i++) {
        if (ocene5[i] === 5)
        {
            console.log("Odlican");
        }
        else if (ocene5[i] === 3 || ocene5[i] === 4)
        {
            console.log("Dobar");
        }
        else if (ocene5[i] === 1 || ocene5[i] === 2)
        {
            console.log("Nedovoljan");
        }
    }






























