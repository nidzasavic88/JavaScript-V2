//1

fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
            .then(function(data) {

                for (let user of data) {
                    console.log(user.name);
                }

            });

//2

let postsList = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(function(data) {

    for (let post of data) {
        let postTitle = document.createElement("li");
        postTitle.innerText = post.title;

        postsList.append(postTitle);
    }
})

//3

let todosList = document.getElementById("todos");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(function(data) {

    for (let todo of data) {

        if (todo.completed) {

            let todoElement = document.createElement("li");
            todoElement.innerText = todo.title;

            todosList.append(todoElement);
        }
    }
});

//4

let productList = document.getElementById("products");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(function(data) {

    for (let product of data.products) {

        if (product.price > 500) {

            let productElement = document.createElement("li");
            productElement.innerText = product.title;

            productList.append(productElement);
        }
    }
});

//5

let productHolder = document.getElementById("productHolder");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(function(data) {

    for (let product of data.products) {

        let singleProduct = document.createElement("div");

        let productName = document.createElement("h2");
        productName.innerText = product.title;

        let productPrice = document.createElement("p");
        productPrice.innerText = product.price;

        singleProduct.append(productName, productPrice);

        productHolder.append(singleProduct);
    }
});

//6

let pokemonList = document.getElementById("pokemonList");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(response => response.json())
.then(function(data) {

    for (let pokemon of data.results) {

      let pokemonElement = document.createElement("li");
        pokemonElement.innerText = pokemon.name;

        pokemonList.append(pokemonElement);
    }
});

//7

let pokemon = document.getElementById("pokemon");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
    .then(function(data) {

        let pokemonInfo = document.createElement("p");

        pokemonInfo.innerText = "Height: " + data.height + ", Weigth: " + data.weight;

        pokemon.append(pokemonInfo);

    });

//8

let catsList = document.getElementById("cats");

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": "live_xXs3aY41cktrrCeghKN02LJ7zS805zH89lqPKLO1GOPklAnWCxvrkiBK1F7eYi6x"
    }
})
    .then(response => response.json())
    .then(function(data) {

        data.forEach(function(cat) {

            let li = document.createElement("li");

            li.textContent = cat.name;

            catsList.appendChild(li);
        });
    })
    .catch(function(error) {
        console.log("Greska:", error);
    });

//9

// Napomena: The Cat API /v1/breeds trenutno ne vraca
// property "affection_level", zbog cega nije moguce
// filtrirati rase po affection_level >= 4.

let cats_affection_level = document.getElementById("cats_affection_level");
//console.log("DIV:", cats_affection_level);

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": "live_xXs3aY41cktrrCeghKN02LJ7zS805zH89lqPKLO1GOPklAnWCxvrkiBK1F7eYi6x"
    }
})

    .then(response => {
        //console.log("STATUS:", response.status);

        return response.json();
    })
.then(function(data) {
   //console.log("DATA:", data);

    console.log(Object.keys(data[0]));



    data.forEach(function(cat) {

       // console.log(cat.name, cat.affection_level);

        if(cat.affection_level >= 4) {

            let p = document.createElement("p");

            p.innerText = cat.name;

            cats_affection_level.appendChild(p);
        }
    })
})
.catch(function(error) {
    console.log("Greska:", error);
});

//10

let catBreedSelect = document.getElementById("catBreedSelect");

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": "live_xXs3aY41cktrrCeghKN02LJ7zS805zH89lqPKLO1GOPklAnWCxvrkiBK1F7eYi6x"
    }
})
    .then(response => response.json())
    .then(function(data) {

        data.forEach(function(cat) {

            let option = document.createElement("option");

            option.textContent = cat.name;

            catBreedSelect.appendChild(option);
        });
    })
    .catch(function(error) {
        console.log("Greska:", error);
    });


//11

let usersDiv = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(function(data) {

    data.slice(0, 5).forEach(function (user) {

        let p = document.createElement("p");

        p.textContent = `Ime: ${user.name}, Email: ${user.email}`;

        usersDiv.appendChild(p);
    })
})
.catch(function(error) {
    console.log("Greska:", error);
});

//12

let postsQui = document.getElementById("postsQui");

fetch("https://jsonplaceholder.typicode.com/posts",)
.then(response => response.json())
.then(function(data) {

    data.forEach(function(post) {

        if (post.title.includes("qui")) {

            let li = document.createElement("li");

            li.textContent = post.title;

            postsQui.appendChild(li);
        }
    });
})
.catch(function(error) {
    console.log("Greska:", error);
});

//13

let averagePrice = document.getElementById("averagePrice");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(function(data) {

    let products = data.products;

    let suma = 0;

    products.forEach(function(product) {
        suma += product.price
    });

    let prosek = suma / products.length;

    averagePrice.textContent = `Prosecna cena: ${prosek.toFixed(2)}$`;
})
.catch(function(error) {
    console.log("Greska:", error);
});

//14

let productOnFristLeather = document.getElementById("productOnFristLeather");

let trazenoSlovo = "S"

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(function(data) {

    let pronajdenProizvod = false;

    for (let product of data.products) {

        if (product.title.startsWith(trazenoSlovo)) {

            pronajdenProizvod = true;

            let div = document.createElement("div");

            div.innerHTML = `
            <p>Naziv: ${product.title}</p>
            <p>Cena: ${product.price}$</p>
            `;

            productOnFristLeather.appendChild(div);
        }
    }
    if (!pronajdenProizvod) {
        productOnFristLeather.innerHTML = "<p>Nema proizvoda na zadato slovo!</p>";
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//15

let pokemonHolder = document.getElementById("pokemonHolder");

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(response => response.json())
    .then(data => {

        for (let pokemon of data.results) {

            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {

                    if (pokemonData.base_experience > 50) {

                        let div = document.createElement("div");

                        div.innerHTML = `
                            <p>Ime: ${pokemonData.name}</p>
                            <p>Base experience: ${pokemonData.base_experience}</p>
                        `;

                        pokemonHolder.appendChild(div);
                    }
                });
        }
    })
    .catch(error => {
        console.log("Greška:", error);
    });

//16

let userSelect = document.getElementById("userSelect");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(function(data) {

    for (let user of data) {

        let option = document.createElement("option");

        option.textContent = user.name;
        option.value = user.id;

        userSelect.appendChild(option);
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//17

let catHolder = document.getElementById("catHolder");

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": "live_xXs3aY41cktrrCeghKN02LJ7zS805zH89lqPKLO1GOPklAnWCxvrkiBK1F7eYi6x"
    }
})
    .then(response => response.json())
    .then(data => {

        for (let rasa of data) {

            if (rasa.temperament && rasa.temperament.includes("Intelligent")) {

                let p = document.createElement("p");

                p.textContent = `Ime: ${rasa.name}, Temperament: ${rasa.temperament}`;

                catHolder.appendChild(p);
            }
        }
    })
    .catch(error => {
        console.log("Greška:", error);
    });

//18

let productList1 = document.getElementById("productList");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(function(data) {

    for (let product of data.products) {

        if (product.rating >= 4) {

            let li = document.createElement("li");

            li.textContent = `${product.title} - Rating: ${product.rating}`;

            productList1.appendChild(li);
        }
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//19

let pokemonHolder2 = document.getElementById("pokemonHolder2");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(response => response.json())
.then(function(data) {

    for (let pokemon of data.results) {

        fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {

            let div = document.createElement("div");

            div.textContent = `Ime ${pokemonData.name}, Tip: ${pokemonData.types[0].type.name}`;
            pokemonHolder2.appendChild(div);
        });
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//20

let postHolder = document.getElementById("postHolder");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(function(data) {

    for (let post of data) {

        let div = document.createElement("div");

        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body.substring(0, 20)}</p>
        `;

        postHolder.appendChild(div);
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//21

let catList = document.getElementById("catList");

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": "live_xXs3aY41cktrrCeghKN02LJ7zS805zH89lqPKLO1GOPklAnWCxvrkiBK1F7eYi6x"
    }
})
    .then(response => response.json())
    .then(function(data) {

        for (let rasa of data) {

            let brojevi = rasa.life_span.match(/\d+/g);

            let max = Number(brojevi[1]);

            if (max >= 15) {

                let li = document.createElement("li");

                li.textContent =
                    `Ime: ${rasa.name}, Životni vek: ${rasa.life_span} godina`;

                catList.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        console.log("Greška:", error);
    });

//22

let productHolder2 = document.getElementById("productHolder2");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(function(data) {

    for (let product of data.products) {

        let p = document.createElement("p");

        p.textContent = `Naziv: ${product.title}, Cena: ${product.price}`;

        productHolder2.appendChild(p);
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//23

let pokemonHolder3 = document.getElementById("pokemonHolder3");

let imePokemona2 = "charizard";

fetch(`https://pokeapi.co/api/v2/pokemon/${imePokemona2}`)
    .then(response => response.json())
    .then(function(data) {

        let div = document.createElement("div");

        div.innerHTML = `
            <p>Ime: ${data.name}</p>
            <p>Visina: ${data.height}</p>
            <p>Težina: ${data.weight}</p>
        `;

        pokemonHolder3.appendChild(div);
    })
    .catch(function(error) {
        console.log("Greška:", error);
    });

//24

let usersCity = document.getElementById("usersCity");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(function(data) {

      for (let user of data) {

           if (user.address.city.startsWith("S")) {

               let div = document.createElement("div");

              div.textContent = `Ime: ${user.name}, Grad: ${user.address.city}`;

            usersCity.appendChild(div);
        }
    }
})
.catch(function(error) {
    console.log("Greska:", error);
});

//25

let catHolder4 = document.getElementById("catHolder4");

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": "live_xXs3aY41cktrrCeghKN02LJ7zS805zH89lqPKLO1GOPklAnWCxvrkiBK1F7eYi6x"
    }
})
    .then(response => response.json())
    .then(function(data) {
        console.log(data[0].adaptability);

        for (let rasa of data) {
            // API ne vraća adaptability podatak, pa uslov ne može da se izvrši
            if (rasa.adaptability >= 5) {

                let li = document.createElement("li");

                li.textContent = `Ime: ${rasa.name}, Temperament: ${rasa.temperament}`;

                catHolder4.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        console.log("Greška:", error);
    });