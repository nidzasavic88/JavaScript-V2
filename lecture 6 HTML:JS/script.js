/**
 *  for in
 *  break
 *  HTML :)
 */

let products = ["hleb", "mleko", "jogurt"];
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// let i in products === let i = 0; i < products.length; i++

for (let i in products) {
    console.log(products[i]);
}

let korpa = [
    {
        name: "hleb",
        cena: 99,
        amount: 1
    },
    {
        name: "mleko",
        cena: 150,
        amount: 1
    },
    {
        name: "luk",
        cena: 170,
        amount: 2
    }
]

/**
 * Kako da ispisem koliko kosta prvi proizvod (hleb)
 *  -> Gde su mi podaci?   korpa
 *  -> Kako da izvucem prvi podatak iz niza?  korpa[0]
 *       -> sta sam dobio iz korpa[0]? Koju vrstu podatka?
 *           -> Objekat
 *                -> Sta taj objekat sadrzi? {name: "hleb" price: 99 amaunt: 1}
 *                     -> Sta meni treba iz tog objekta? price
 */
console.log(korpa[0]['price']);

// Vezba -> Pomocu petlje ispisati cene svih proizvoda --- 99, 150, 170


/**
 * Koju petlju koristiti? for in
 *  -> Kako da napisem petlju? I koju? ----- for in
 *  -> Kako uopste da ispisem svaki proizvod? ---- korpa[proizvod]
 *  -> Kako da ispisem samo cenu za odredjeni proizvod? --- korpa[proizvod]['price]
 */

for (let proizvod in korpa) {


// Ako je cena veca od 150 zaustaviti petlju

    /** Kako proveriti cenu proizvoda? - da li je cena veca od 150
     * Kako prekinuti petlju?
     */

    let productPrice = korpa[proizvod]['cena'];

    if (productPrice > 150) {
        break;
    }
    console.log(productPrice);
}




