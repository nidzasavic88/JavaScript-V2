let cars = [
    {
        name: "BMW M3",
        price: 72000,
        production_year: 2024,
        img: "slike/BMW-M3.jpg",
    },
    {
        name: "Audi RS6",
        price: 120000,
        production_year: 2025,
        img: "slike/audi-RS6.jpg",
    },
    {
        name: "Mercedes AMG GT",
        price: 150000,
        production_year: 2026,
        img: "slike/mercedes-amg-gt.webp"
    },
    {
        name: "Toyota Supra",
        price: 55000,
        production_year: 2023,
        img: "slike/toyota-supra.jpeg",
    },
    {
        name: "Ford Mustang",
        price: 45000,
        production_year: 2022,
        img: "slike/ford-mustang.jpg",
    },
    {
        name: "Porsche 911",
        price: 130000,
        production_year: 2026,
        img: "slike/porsche-911.jpg",
    },
    {
        name: "Lamborghini Huracan",
        price: 250000,
        production_year: 2021,
        img: "slike/Lamborghini-Huracan.jpeg",
    },
    {
        name: "Tesla Model S",
        price: 90000,
        production_year: 2024,
        img: "slike/Tesla-Model-S.jpg",
    }
];

// <div className= "product">
//     <img>
//    <p>Audi A4 <span className="productPrice">2400</span></p>
// </div>

for (let car of cars) {

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = car.img;

    let p = document.createElement("p");
    p.textContent = car.name;

    let span = document.createElement("span");
    span.textContent = car.price;

    p.appendChild(span);// Dodaj na kraj paragrafa(p) jo 1 HTML element.

    div.appendChild(img);
    div.appendChild(p);

    if (car.production_year === 2026)
    {
        let productionYearSpan = document.createElement("span");
        productionYearSpan.textContent = "NOVO!";
        productionYearSpan.classList = "productionYear";

        div.appendChild(productionYearSpan);
    }

    document.querySelector("#main").appendChild(div);

   // document.querySelector("#main").innerHTML +="<div><img src='"+car.img+"'><p>"+car.name+" <span className='productPrice'>"+car.price+"</span></p></div>";
}