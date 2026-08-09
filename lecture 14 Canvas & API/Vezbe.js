//1
async function ispisiImenaKorisnika()
{
try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error(`Greska: ${response.status}`);
    }

    let korisnici = await response.json();

    korisnici.forEach(korisnik => {console.log(korisnik.name)});

} catch (error) {
    console.error('Doslo je do greske prilikom preuzimanja', error.message);
}
}

ispisiImenaKorisnika();

//2
async function prikaziNasloveUListi()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Greska prilikom preuzimanja: ${response.status}`);
        }

        let postavi = await response.json();

        let ulLista = document.getElementById('lista-naslova');

        postavi.forEach(post => { let liStavka = document.createElement('li');
        liStavka.textContent = post.title;

        ulLista.appendChild(liStavka);})
    } catch (error) {
        console.error('Doslo je do greske:', error.message);
    }
}

prikaziNasloveUListi();

//3
async function prikaziProizvode()
{
    try {
        let response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let podaci = await response.json();

        let nizProizvoda = podaci.products;

        let glavniDiv = document.getElementById('kontejner-za-proizvode');

        nizProizvoda.forEach(proizvod => {
            let proizvodDiv = document.createElement('div');

        proizvodDiv.textContent = proizvod.title;

        proizvodDiv.classList.add('proizvod-stavka');

        glavniDiv.appendChild(proizvodDiv);
        })
    } catch (error) {
        console.error('Doslo je do greske:', error.message);
    }
}

prikaziProizvode();

//4
async function prikaziEmail(id)
{
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let korisnik = await response.json();

        console.log(korisnik.email);

    } catch(error) {
        console.error(error);
    }

}

prikaziEmail(1)

//5

async function prikaziZavrseneZadatke()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let todos = await response.json();

        let zavrseniZadaci = todos.filter(todo => todo.completed);

        console.log(zavrseniZadaci);

    } catch(error) {
        console.error(error);
    }
}

prikaziZavrseneZadatke();

//6

async function prikaziPokemone ()
{
    try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let Podaci = await response.json();

        let Lista = document.getElementById('pokemon-lista');

        Podaci.results.forEach(pokemon => { let li = document.createElement('li');
        li.textContent = pokemon.name;
        Lista.appendChild(li);
        });

    } catch (error) {
        console.error(error);
    }
}

prikaziPokemone()

//7
async function prikaziPokemona(ime)
{
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ime}`);

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let pokemon = await response.json();

        let info = document.getElementById('pokemon-info');

        info.innerHTML = `
        <h2>${pokemon.name}</h2>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
`;

    } catch (error) {
        console.error(error);
    }
}

prikaziPokemona("pikachu")

//8
async function prikaziProizvode()
{
    try {
        let response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let podaci1 = await response.json();

        let proizvodi = podaci1.products;

        let lista1 = document.getElementById('lista-proizvoda');

        let skupiProizvodi = proizvodi.filter(proizvod => proizvod.price > 500);

        skupiProizvodi.forEach(proizvod => {
            let li = document.createElement('li');
            li.textContent = `${proizvod.title} - ${proizvod.price}`;
            lista1.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

prikaziProizvode()

//9
async function prikaziKorisnike()
{
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let korisnici = await response.json();

        let lista2 = document.getElementById('lista-korisnika');

        let filtriraniKorisnici = korisnici.filter(korisnik =>
        korisnik.address.suite.includes("Suite")
        );

        filtriraniKorisnici.forEach(korisnik => {
            let li = document.createElement('li');
            li.textContent = `${korisnik.name} - ${korisnik.address.suite}`;
            lista2.appendChild(li);
        });

    }catch(error) {
        console.error(error);
    }
}

prikaziKorisnike();

//10

async function prikaziPostove()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");


        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let postovi = await response.json();

        let lista3 = document.getElementById('lista-postova');

        let filtriraniPostovi = postovi.filter(post =>
            post.title.includes("qui")
        );

        filtriraniPostovi.forEach(post => {
            let li = document.createElement('li');
            li.textContent = post.title;
            lista3.appendChild(li);
        });

    }catch(error) {
        console.error(error);
    }
}

prikaziPostove();

//11
async function prikazi5Korisnika()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let korisnici = await response.json();

        let lista4 = document.getElementById('lista-5-korisnika');

        let prvihPet = korisnici.slice(0, 5);

        prvihPet.forEach(korisnik => {
            let li = document.createElement('li');

            li.textContent = `Ime: ${korisnik.name}, Email: ${korisnik.email}`;
            lista4.appendChild(li);
        });

    }catch(error) {
        console.error(error);
    }
}

prikazi5Korisnika();

//12
async function prikaziTodos()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let todos = await response.json();

        let lista5 = document.getElementById('lista-todos');

        todos.forEach(todo => {
            let li = document.createElement('li');
            li.textContent = todo.title;

            if (todo.comleted) {
                li.classList.add('completed');
            }

            lista5.appendChild(li);
        });
    }catch(error) {
        console.error(error);
    }
}

prikaziTodos();

//13
async function prikaziProsecnuCenu()
{
    try {
        let response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let podaci = await response.json();

        let proizvodi = podaci.products;

        let ukupnaCena = 0;

        proizvodi.forEach(proizvod => {
            ukupnaCena += proizvod.price;
        });

        let prosecnaCena = ukupnaCena / proizvodi.length;

        let rezultat = document.getElementById("prosecna-cena");
        rezultat.textContent = `Prosecna cena proizvoda je: $${prosecnaCena.toFixed(2)}`;
    } catch (error) {
        console.error(error);
    }
}

prikaziProsecnuCenu();

//14

async function prikaziPrve3ReciPostova ()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let postovi = await response.json();

        let lista = document.getElementById('lista-prve3reci-postova');

        postovi.forEach(post => {
            let li = document.createElement('li');
            let triReci = post.title.split(" ").slice(0, 3).join(" ");
            li.textContent = triReci;
            lista.appendChild(li);
        });

    } catch (error) {
        console.error(error);
    }
}

prikaziPrve3ReciPostova();

//15
async function prebrojKorisnike ()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let korsnici = await response.json();

        let broj = korsnici.filter(korisnik => korisnik.name.length > 5).length;

        let rezultat = document.getElementById("broj-korisnika");
        rezultat.textContent = `Broj korisnika cije je ime duze od 5 karaktera je: ${broj}`;

    } catch(error) {
        console.error(error);
    }
}

prebrojKorisnike();

//16
async function prikaziPokemoneSaExp ()
{
    try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let podaci = await response.json();

        let lista = document.getElementById('pokemon-experience>50');

        for (let pokemon of podaci.results) {
            let odgovor = await  fetch(pokemon.url);
            let detalji = await  odgovor.json();

            if (detalji.base_experience > 50) {
                let li = document.createElement('li');
                li.textContent = `${detalji.name} - Base Experience: ${detalji.base_experience}`;
                lista.appendChild(li);
            }
        }

    } catch (error) {
        console.error(error);
    }
}

prikaziPokemoneSaExp();

//17
async function prikaziProizvodePlavo()
{
    try {
        let response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let podaci = await response.json();

        let proizvodi = podaci.products;

        let glavniDiv = document.getElementById("proizvodi-plavo");

        proizvodi.forEach(proizvod => {
        let div = document.createElement('div');

        div.textContent = `${proizvod.title} - $${proizvod.price}`;

        div.style.color = "blue";

        glavniDiv.appendChild(div);
    });

} catch (error) {
    console.error(error);
    }
}

prikaziProizvodePlavo();

//18
async function prikaziKorisnikeDropdown ()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let korisnici = await response.json();

        let dropdown = document.getElementById('korisnici-dropdown');

        korisnici.forEach(korisnik => {
            let option = document.createElement('option');

                option.textContent = korisnik.name;
                option.value = korisnik.id;

                dropdown.appendChild(option);
            });

    } catch (error) {
        console.error(error);
    }
}

prikaziKorisnikeDropdown();

//19

async function prikaziPostove1 ()
{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let postovi = await response.json();

        let glavniDiv = document.getElementById("postovi");

        postovi.forEach(post => {
            let div = document.createElement('div');

            div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body.substring(0, 20)}...</p>`;

            glavniDiv.appendChild(div);
        })

    } catch (error) {
        console.error(error);
    }
}

prikaziPostove1();

//20
async function prikaziProizvodeS() {
    try {
        let response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error(`Greska: ${response.status}`);
        }

        let podaci = await response.json();

        let proizvodi = podaci.products;

        let lista = document.getElementById("lista-proizvoda-s");

        let filtriraniProizvodi = proizvodi.filter(proizvod =>
            proizvod.title.startsWith("S")
        );

        if (filtriraniProizvodi.length === 0) {
            let li = document.createElement("li");
            li.textContent = "Nema proizvoda na traženo slovo.";
            lista.appendChild(li);
        } else {
            filtriraniProizvodi.forEach(proizvod => {
                let li = document.createElement("li");
                li.textContent = proizvod.title;
                lista.appendChild(li);
            });
        }

    } catch (error) {
        console.error(error);
    }
}

prikaziProizvodeS();
