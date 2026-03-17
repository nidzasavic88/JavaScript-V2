// index ->.      0.      1.       2
let products = ["hleb","mleko","jogurt"];
console.log(products, products[1],products[5]);
//                3
products.push ("novine");
console.log(products);

products.splice(0,1);
console.log(products);

let cars = ["BMW","Audi","Mercedes"];
console.log(cars);
cars[2] = "Zastava";
console.log(cars);
cars.sort();
console.log(cars);

let personalID = {
    Name: "Nikola",
    LastName: "Savic",
    DateOfBirth: "07.23.1988",
    Hobbies: ["programing","workout","fishing"]
};
console.log(personalID.Name, personalID.DateOfBirth);
personalID.Height = 185.5;
console.log(personalID);
console.log(personalID.Hobbies[0]);

let sentance = personalID.Name+" has gone "+ personalID.Hobbies[2];
console.log(sentance);

//Domaci
let shop = {
    name: "pastry",
    products: ["cake","cookies","ice cream","milk shake"],
    openingHours : "07 AM",
    clousingHours : "06 PM"
};
console.log(shop);