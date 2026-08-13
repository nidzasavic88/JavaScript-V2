//1
async function prikaziRase() {
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");
        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let lista = document.getElementById("lista-rasa");

        rase.forEach(rasa => {
            let li = document.createElement("li");
            li.textContent = rasa.name;
            lista.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziRase();

//2

async function prikaziTezinuVisinu()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let div = document.getElementById("tezina-visina");

        rase.forEach(rasa => {
            // height.metric nije moguće prikazati jer The Cat API trenutno
            // ne vraća height podatak u /v1/breeds odgovoru.
            div.innerHTML += `
                <p>
                    ${rasa.name} -
                    Tezina: ${rasa.weight.metric} kg
                </p>
            `;
        });


    } catch (error) {
        console.log(error);
    }
}

prikaziTezinuVisinu();

//3

async function  prikaziAffectionateRase()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let lista = document.getElementById("affectionate-rase");

        rase.forEach(rasa => {
            if (rasa.temperament && rasa.temperament.includes("Affectionate")) {
                let li = document.createElement("li");
                li.textContent = rasa.name;
                lista.appendChild(li);
            }
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziAffectionateRase();

//4
async function prikaziDropedownRase ()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let lista = document.getElementById("lista-rasa-dropdown");

        rase.forEach(rasa => {
            let option = document.createElement("option");

            option.textContent = rasa.name;
            option.value = rasa.id;

            lista.appendChild(option);
        })
    }catch(error){
        console.log(error);
    }
}

prikaziDropedownRase();

//5
async function prikaziRasePreko15()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let div = document.getElementById("rase-preko-15");

        rase.forEach(rasa => {
            let godine = rasa.life_span.split("-");

            let maksimalanZivotniVek = Number(godine[1])

            if (maksimalanZivotniVek > 15) {
                div.innerHTML += `
                <p>
                    ${rasa.name} -
                    ${rasa.life_span} godina
                </p>
             `;
            }
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziRasePreko15();

//6
async function prikaziRaseZaStan ()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let lista = document.getElementById("rase-za-stan");

        rase.forEach(rasa => {
            if (rasa.adaptability >= 5) {
                let li = document.createElement("li");

                li.textContent = rasa.name;

                lista.appendChild(li);
            }
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziRaseZaStan();

//7
function sortirajImena(niz)
{
    return niz.sort();
}

async function prikaziSortiraneRase()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let imena = rase.map(rase => rase.name);

        sortirajImena(imena);

        let lista = document.getElementById("sortirane-rase");

        imena.forEach(ime => {
            let li = document.createElement("li");
            li.textContent = ime;
            lista.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziSortiraneRase();

//8
async function izracunajProsecnaTezinu()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let ukupnaTezina = 0;
        let brojRasa = 0;

        rase.forEach((rasa) => {
            let tezina = rasa.weight.metric.split("-");
            let minimalnaTezina = Number(tezina[0]);
            let maksimalnaTezina = Number(tezina[1]);

            let prosecnaTezinaRase =
                (minimalnaTezina + maksimalnaTezina) / 2;

            ukupnaTezina += prosecnaTezinaRase;
            brojRasa++;
        });

        let prosecnaTezina = ukupnaTezina / brojRasa;

        let div = document.getElementById("prosecna-tezina");

        div.textContent = `Prosecna tezina svih rasa: ${prosecnaTezina.toFixed(2)} kg`;


    } catch (error) {
        console.log(error);
    }
}

izracunajProsecnaTezinu();

//9
async function prikaziFriendlyRase()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }
        let rase = await response.json();

        let lista = document.getElementById("lista-friendly-rasa");

        rase.forEach((rasa) => {

            if(rasa.dog_friendly >= 4) {
                let li = document.createElement("li");

                li.textContent = rasa.name;

                lista.appendChild(li);
            }
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziFriendlyRase()

//10

async function prikaziTemperamente ()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let sviTempermenti =[];

        rase.forEach(function (rasa) {
            if (rasa.temperament) {
                let temperamenti = rasa.temperament.split(", ");

                sviTempermenti.push(...temperamenti);
            }
        });

        let jedinstveniTemperamenti = [...new Set(sviTempermenti)];

        let lista = document.getElementById("lista-temperamenata");

        jedinstveniTemperamenti.forEach(function (temperamenti) {
            let li = document.createElement("li");

            li.textContent =temperamenti;

            lista.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziTemperamente();

//11
async function prikazikorisnike ()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let korisnici = await response.json();

        let kontejner = document.getElementById("kontejner");

        korisnici.forEach(function(korisnik) {
            let div = document.createElement("div");

            div.textContent = `Ime ${korisnik.name}, Grad: ${korisnik.address.city}`;

            kontejner.appendChild(div);
        })
    } catch (error) {
        console.log(error);
    }
}

prikazikorisnike()

//12
async function prikaziZadatke ()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let zadaci = await response.json();

        let lista = document.getElementById("lista-zadaci");

        zadaci
            .filter(function(zadatak) {
                return zadatak.userId === 1;
            })
            .forEach(function(zadatak) {
                let li = document.createElement("li");

                li.textContent = zadatak.title;

                lista.appendChild(li);
            })
    }catch(error) {
        console.log(error);
    }
}

prikaziZadatke();

//13
async function prikaziInteligentneRase()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let div =document.getElementById("Inteligentne-rase");

        rase.forEach(function(rasa) {
            if (rasa.temperament && rasa.temperament.includes("Intelligent")) {


                let p = document.createElement("p");

                p.textContent = `Ime rase: ${rasa.name}, Temperament: ${rasa.temperament}`;

                div.appendChild(p);
            }
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziInteligentneRase()

//14
async function prikaziPostove()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let postovi = await response.json();

        let kontejner = document.getElementById("postovi");

        postovi.forEach(function(post) {
            if (post.id <= 5) {
                let div = document.createElement("div");

                div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

                kontejner.appendChild(div);

            }
        });

    } catch (error) {
        console.log(error);
    }
}

prikaziPostove();

//15
async function prikaziLjubazneRase ()
{
    try {
        let response = await fetch("https://api.thecatapi.com/v1/breeds");

        if (!response.ok) {
            throw new Error(`Greska ${response.status}`);
        }

        let rase = await response.json();

        let div = document.getElementById("ljubazne-rase");

        rase.forEach(function(rasa) {
            if (rasa.affection_level >= 4) {
                let p = document.createElement("p");

                p.textContent = `Ime: ${rasa.name}, Ljubaznost: ${rasa.affection_level}`;

                div.appendChild(p);
            }
        });

    }catch(error) {
        console.log(error);
    }
}

prikaziLjubazneRase()



