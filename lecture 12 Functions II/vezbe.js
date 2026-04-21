//1
function saberi (a, b)
{
    return a + b;
}

console.log(saberi(7, 5));

//2
function umnozi (a, b)
{
    return a * b;
}
console.log(umnozi(3, 6));

//3
function prosek (niz)
{
    let suma = 0;

   for (let i = 0; i < niz.length; i++)
   {
       suma += niz[i];
   }
   return suma / niz.length;
}
console.log(prosek([1,2,3,4,5,6]));

//4
function maks (niz)
{
  return Math.max(...niz);
}
console.log(maks([1,2,3,4,5,6,7]));

//5
function min (niz)
{
    return Math.min(...niz);
}
console.log(min([0,1,2,3]));

//6
function duzinaStringa (str)
{
    return str.length
}
console.log(duzinaStringa([1,2,3,4,5,6,3,3,3,3]));

//7
function parnost(broj)
{
    if (broj % 2 === 0)
    {
        return "Paran";
    }
    else
    {
        return "Neparan"
    }
}
console.log(parnost(10));
console.log(parnost(11));

//8
function pozdrav(name)
{
    return`Zdravo,${name}!`;
}
console.log(pozdrav("Nikola"));

//9
function kvadrat(broj)
{
    return broj * broj;
}
console.log(kvadrat(4));
console.log(kvadrat(9));

//10
function obrniString(str)
{
    return str.reverse();
}
console.log(obrniString([1,2,3,4,5,6,7]));

//11
function sumaParnih(niz)
{
    let suma = 0;
    for (let i = 0; i < niz.length; i++)
    {
        if (niz[i] % 2 === 0)
        {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(sumaParnih([1,2,3,4,5,6,7,8,9,10]));

//12
function brojNeparnih(niz)
{
    return niz.filter(broj => broj % 2 !== 0);
}
console.log(brojNeparnih([1,2,3,4,5,6,7]));

//13
function najcesciElement(niz)
{
    if (!niz.length === 0) return null;

    let brojac = {};
    let max = 0;
    let najcesci = niz[0];

    for (let el of niz)
    {
        brojac[el] = (brojac[el] || 0) + 1;

        if (brojac[el] > max)
        {
            max = brojac[el];
            najcesci = el;
        }
    }
    return najcesci;
}
console.log(najcesciElement([1,2,3,4,4,4,5,6,7]));

//14
function slovoUMax(str, slovo)
{
    if (!str || !slovo) return 0;

    str = str.toLowerCase();
    slovo = slovo.toLowerCase();

    let sum = 0;

    for (let znak of str)
    {
        if(znak === slovo)
        {
            sum++;
        }
    }
    return sum;
}
console.log(slovoUMax( "Riba ribi grize rep", "r"));

//15
function ispisiUloge(uloge)
{
    switch (uloge)
    {
        case "admin":
            return "Admin"
        break;
            case "user":
                return "User"
        break;
        case "guest":
            return "Guest"
        default :
            return "Nepoznata uloga"
    }
}
console.log(ispisiUloge("admin"));
console.log(ispisiUloge("user"));
console.log(ispisiUloge("guest"));
console.log(ispisiUloge("Pera"));

//16
function duzinaNiza(niz)
{
    return niz.length;
}
console.log(duzinaNiza([1,2,3,4,5,6,7]));

17
function proveriPrvi(niz, broj)
{
    if (niz.length === 0)
    {
        return false;
    }
    return niz[0] === broj;
}
console.log(proveriPrvi(3, 6));
console.log(proveriPrvi([1,2,3,4,5,], 1));
console.log(proveriPrvi([], 2));

//--------Kraca Verzija--------
let proveriDrugi = (niz, broj) => niz[1] === broj;
console.log(proveriDrugi([1,2,3,4,5,6,7],2));
console.log(proveriDrugi([2,3,4,5,],2));

//18
function srednjaVrednost(niz)
{
    if (niz.length %2 === 0)
    {
        return null;
    }
    let srednjiIndex = Math.floor(niz.length / 2);
    return niz[srednjiIndex];
}
console.log(srednjaVrednost([1,2,3]));
console.log(srednjaVrednost([5,6,7,8,9,]));
console.log(srednjaVrednost([1,2,3,4]));

//19
function  ispisiParneString(niz)
{
    let parni = niz.filter(broj => broj % 2 === 0);
    return "Parni brojevi su: " + parni.join(", ")
}
console.log(ispisiParneString([1,2,3,4,5,6,7]));

//20
function spojiImena(niz)
{
    return niz.join(", ")
}
console.log(spojiImena(["Nikola","Toma","Emanuela"]));