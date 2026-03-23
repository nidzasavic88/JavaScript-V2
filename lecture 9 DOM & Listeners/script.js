let cities = [
    "Beograd",
    "Novi Sad",
    "Niš",
    "Zagreb",
    "Split",
    "Sarajevo",
    "Banja Luka",
    "Podgorica",
    "Budva",
    "Skoplje",
    "Ohrid",
    "Ljubljana",
    "Maribor",
    "Priština",
    "Prizren",
    "Tirana",
    "Drač",
    "Sofija",
    "Plovdiv",
    "Solun"
];

let citiesSelector = document.querySelector("#citiesSelector");
console.log(citiesSelector);

for (let citiy of cities)
{
    let citiyOption = document.createElement("option");
    citiyOption.innerText = citiy;
    console.log(citiyOption);

    citiesSelector.appendChild(citiyOption);
}

let type = [
    "stanovi",
    "kuce",
    "poslovni prostor",
    "placevi",
    "garze/parking"
];

let typeSelector = document.querySelector("#typeSelector");
console.log(typeSelector);

for (let types of type)
{
    let typeOption = document.createElement("option");
    typeOption.innerText = types;
    console.log(typeOption);

    typeSelector.appendChild(typeOption);
}

let rooms = [
    "jednosoban stan",
    "jednoiposoban stan",
    "dvosoban stan",
    "dvoiposoban stan",
    "trosoban stan",
    "troiposoban stan",
    "cetvorosoban stan",
    "4,5+"
]
let roomsSelector = document.querySelector("#roomsSelector");
console.log(rooms);

for (room of rooms)
{
    let roomOption = document.createElement("option");
    roomOption.innerText = room;
    console.log(roomOption);

    roomsSelector.appendChild(roomOption);

}

let curentCity = null;
let curentType = null;
let roomsNumber = null;

citiesSelector.addEventListener("change", function(event){
    curentCity = event.target.value;
});

typeSelector.addEventListener("change", function(event){
    curentType = event.target.value;
});


roomsSelector.addEventListener("change", function(event){
    roomsNumber = event.target.value;
});

document.querySelector("#searchPropertiesButton").addEventListener("click", function(){
    console.log("Test");
    console.log(curentCity +" "+curentType+" "+roomsNumber);
});

let realEstates = [
    {
        city: "Beograd",
        option: "Garsonjera",
        type: "Stanovi",
        price: "53650",
        size: "27"
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuce",
        price: "70300",
        size: "85"
    },
    {
        city: "Niš",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: "48000",
        size: "55"
    },
    {
        city: "Zagreb",
        option: "Trosoban stan",
        type: "Stanovi",
        price: "120000",
        size: "78"
    },
    {
        city: "Split",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: "95000",
        size: "45"
    },
    {
        city: "Sarajevo",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price: "67000",
        size: "60"
    },
    {
        city: "Banja Luka",
        option: null,
        type: "Kuce",
        price: "88000",
        size: "120"
    },
    {
        city: "Podgorica",
        option: "Trosoban stan",
        type: "Stanovi",
        price: "99000",
        size: "82"
    },
    {
        city: "Ljubljana",
        option: "Garsonjera",
        type: "Stanovi",
        price: "110000",
        size: "30"
    },
    {
        city: "Skoplje",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: "54000",
        size: "58"
    },
    {
        city: "Tirana",
        option: null,
        type: "Placevi",
        price: "30000",
        size: "200"
    },
    {
        city: "Solun",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: "87000",
        size: "50"
    }
];
// Domaci
for (let estate of realEstates) {
    let estateHolder = document.createElement("div");

    let estateTitle = document.createElement("h1");
    estateTitle.innerText = estate.type+" "+estate.city;

    let estateOption = document.createElement("p");
    if (estate.option == null) {
        estateOption.innerText = "-";
    }
    else {
        estateOption.innerText = estate.option;
    }

    let estatePrice = document.createElement("p");
    estatePrice.innerText = estate.price;

    let estateSize = document.createElement("p");
    estateSize.innerText = estate.size;

    estateHolder.append(estateTitle);
    estateHolder.append(estateOption);
    estateHolder.append(estatePrice);
    estateHolder.append(estateSize);

    document.querySelector("#estates").appendChild(estateHolder);

}