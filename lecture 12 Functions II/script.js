// ------- V E Z B A -------
//Napravi funkciju "calculateTax" (izracunaj porez)
//amount: 500, tax : 20%
//500 + 100 = 600
// 100  15% = 115

function calculateTax(amount, tax = 0.15)
{
    return amount+(amount*tax);
}

calculateTax(500, 0.2);
calculateTax(100);

function getFullName(firstName, lastName, middleName = '', nickname = 'A') // Opcioni parametar mora uvek biti na kraju!
{
    return firstName+" "+ middleName+" "+lastName+" "+nickname ;
}
let Nikola = getFullName("Nikola","Savic","Viktor")
let Emanuela = getFullName("Emanuela","Takac")

console.log(Nikola, Emanuela);


let smokesTax = calculateTax(500, 0.1);
console.log(smokesTax*7);

let cars = ['Audi','BMW','Mercedes'];

//Napravi funkciju koja se zove checkCar
//Proslediti 2 stvari : listu automobila, automobil koji trazite

//Ako uspesno pronadje automobil koji zelite u listi vratite true
//Ako ne pronadje vratite false

function checkCar (carList, carName)
{

    for (let name of carList)
    {
        if (name.toLowerCase() === carName.toLowerCase())
        {
            return true;
        }
    }
    return false;
}

let result = checkCar(cars,"BmW");
console.log(result);

let results2 = cars.includes("BMW")
console.log(results2);