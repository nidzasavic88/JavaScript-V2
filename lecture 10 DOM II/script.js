let cities = [
    "Svi",
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

// -------------------- SELECTORI --------------------

let citiesSelector = document.querySelector("#citiesSelector");
let typeSelector = document.querySelector("#typeSelector");
let roomsSelector = document.querySelector("#roomsSelector");

// -------------------- POPULATE CITIES --------------------
// --------------------  D O M A C I  -----------------------
for (let city of cities) {

    let option = document.createElement("option");

    let count = realEstates.filter(e => e.city === city).length;

    if (city === "Svi") {
        option.innerText = "Svi (" + realEstates.length + ")";
    } else {
        option.innerText = city + " (" + count + ")";
    }

    option.value = city;

    if (count === 0 && city !== "Svi") {
        option.disabled = true;
    }

    citiesSelector.appendChild(option);
}

// -------------------- POPULATE TYPE --------------------

let types = ["Stanovi", "Kuce", "Poslovni prostor", "Placevi", "Garaze/parking"];

for (let type of types) {
    let option = document.createElement("option");
    option.innerText = type;
    option.value = type;

    typeSelector.appendChild(option);
}

// -------------------- POPULATE ROOMS --------------------

let rooms = [
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan",
    "Troiposoban stan",
    "Cetvorosoban stan",
    "4,5+"
];

for (let room of rooms) {
    let option = document.createElement("option");
    option.innerText = room;
    option.value = room;

    roomsSelector.appendChild(option);
}

// -------------------- GLOBAL FILTER VARIJABLE --------------------

let currentCity = "Svi";
let currentType = null;
let currentRooms = null;

// -------------------- RENDER NEKRETNINA --------------------

let estatesContainer = document.querySelector("#estates");

for (let estate of realEstates) {
    let div = document.createElement("div");
    div.classList.add("realEstate");

    let city = document.createElement("h3");
    city.innerText = estate.city;
    city.classList.add("city");

    let option = document.createElement("p");
    option.innerText = estate.option || "-";
    option.classList.add("rooms");

    let type = document.createElement("p");
    type.innerText = estate.type;
    type.classList.add("type");

    let price = document.createElement("p");
    price.innerText = estate.price;

    let size = document.createElement("p");
    size.innerText = estate.size;

    div.append(city, option, type, price, size);
    estatesContainer.appendChild(div);
}

// -------------------- FILTER FUNKCIJA --------------------

function filterEstates() {
    let allEstates = document.querySelectorAll(".realEstate");

    allEstates.forEach(estate => {
        let city = estate.querySelector(".city").textContent;
        let type = estate.querySelector(".type").textContent;
        let rooms = estate.querySelector(".rooms").textContent;

        let show = true;

        if (currentCity !== "Svi" && city !== currentCity) {
            show = false;
        }

        if (currentType && type !== currentType) {
            show = false;
        }

        if (currentRooms && rooms !== currentRooms && rooms !== "-") {
            show = false;
        }

        estate.classList.toggle("hidden", !show);
    });
}

// -------------------- EVENT LISTENERS --------------------

citiesSelector.addEventListener("change", e => {
    currentCity = e.target.value;
    filterEstates();
});

typeSelector.addEventListener("change", e => {
    currentType = e.target.value;
    filterEstates();
});

roomsSelector.addEventListener("change", e => {
    currentRooms = e.target.value;
    filterEstates();
});