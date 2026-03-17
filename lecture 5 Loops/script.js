let name = "Admin"
name = name.toLocaleLowerCase(); // ADMIN -> admin, aDmin -> admin
// let name = "admin"    if(name == "admin")
//aDmin -> admin
//ADMIN -> admin

if (name == "admin") {
    console.log("Pozdrav admine");
}

else {
    console.log("Vi niste administrator");
}


/**
 * Ako korisnikovo ime pocinje slovom "a" ispisati "ime pocinje samoglasnikom"
 * name = "admin" -> ["a", "d", "m", "i", "n"]
 * name[0]
 */
if (name[0] === "a") {
    console.log("Ime pocinje samoglasnikom")
}

/**
 * Proveriti dali je prvo slovo samoglasnik -> a, e, i, o, u
 * ako jeste ispisati "ime pocinje nekim samoglasnikom"
 */
let samoglasnici = ["a", "e", "i", "o", "u"];

if (samoglasnici.includes(name[0]))
{
    console.log("Ime pocinje nekim samoglasnikom")
}

let number = "2";
if (number === "2")
{
    console.log("broj je 2")
}
else {
    console.log("broj nije 2")
}
/**
 *
 */

let cars = [
    "Toyota",
    "Honda",
    "Nissan",
    "Mazda",
    "Subaru",
    "Mitsubishi",
    "Suzuki",
    "Lexus",
    "Infiniti",
    "Acura",
    "Volkswagen",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Porsche",
    "Opel",
    "Smart",
    "Ford",
    "Chevrolet",
    "Cadillac",
    "GMC",
    "Tesla",
    "Jeep",
    "Dodge",
    "Ram",
    "Lincoln",
    "Buick",
    "Hyundai",
    "Kia",
    "Genesis",
    "Renault",
    "Peugeot",
    "Citroën",
    "DS Automobiles",
    "Alpine",
    "Fiat",
    "Alfa Romeo",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Abarth",
    "Pagani",
    "Jaguar",
    "Land Rover",
    "Aston Martin",
    "Bentley",
    "Rolls-Royce",
    "Mini",
    "McLaren",
    "Lotus",
    "Volvo",
    "Polestar",
    "Koenigsegg",
    "BYD",
    "Geely",
    "MG",
    "Roewe",
    "Baojun",
    "Wuling",
    "NIO",
    "Xpeng",
    "Leapmotor",
    "Li Auto",
    "Ora",
    "Haval",
    "Chery",
    "Dongfeng",
    "GAC",
    "Hongqi",
    "Tata",
    "Mahindra",
    "Force Motors",
    "SEAT",
    "Cupra",
    "Škoda",
    "Rivian",
    "Lucid",
    "Fisker",
    "Zenvo",
    "Rimac",
    "Faraday Future",
    "Bollinger"
];

// Loops -> petlje
// for -> Moze da se desi

/** -> let i -> PODPUNO SVE JEDNO KAKO CE SE ZVATI
 *     -> i -> ali u programiranju predstavlja interaction -> ponavljanje
 *
 *      -> i < 100;
 *           -> Uslov do kad ce petlja raditi
 *
 *         -> Nakon svakog ponavljanja povevcaj i za 1 -> i++
 *             -> let i = 0, i < 100, i++
 */

for (let i = 0; i < cars.length; i++) {
// Domaci
let fristLetter = cars[i][0].toLowerCase();

if (fristLetter === "a") {
    continue;
}
  console.log(cars[i]);

}




// forEach -> Morate znati
// for in -> Morate znati

// while
// do while
// for of