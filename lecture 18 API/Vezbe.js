
//1
let batmanMovies =document.getElementById("batmanMovies");

let apiKey = "61d39583";

fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&s=batman`)
.then(response => response.json())
    .then(data => {

        for(let movie of data.Search) {
            let li = document.createElement("li");

            li.textContent = movie.Title;

            batmanMovies.appendChild(li);
        }
    })
.catch(error => {
    console.log(error);
});

//2

let movie = document.getElementById("movie");

fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&t=Inception`)
.then(response => response.json())
.then(data => {

    movie.innerHTML =`
    <p>Title: ${data.Title}</p>
    <p>Year: ${data.Year}</p>
    <p>Director: ${data.Director}</p>
    `;
})
.catch(error => {
    console.log(error);
});

//3

let avengersMovies= document.getElementById("avengersMovies");

fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&s=avengers`)
.then(response => response.json())
.then(data => {

    for (let movie of data.Search) {
        let li = document.createElement("li");

        li.textContent = `${movie.Title} - ${movie.Year}`;

        avengersMovies.appendChild(li);
    }

})
.catch(error => {
    console.log(error);
});


//4

let film = document.getElementById("film");

function prikaziFilm(title) {

    fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&t=${title}`)
    .then(response => response.json())
    .then(data => {

        let p = document.createElement("p");

        p.textContent = `Title: ${data.Title}, Year: ${data.Year}, Director: ${data.Director}`;

        film.appendChild(p);

    })
    .catch(error => {
        console.log(error);
    });
}

prikaziFilm("The Matrix");

//5

let filmovi = document.getElementById("filmovi");
let detalji = document.getElementById("detalji");

fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=star+wars`)
.then(response => response.json())
.then(data => {

    for (let film of data.Search) {

        let option = document.createElement("option");

        option.value = film.imdbID;
        option.textContent = film.Title;

        filmovi.appendChild(option);
    }
})
.catch(error => {
    console.log(error);
});

filmovi.addEventListener("change", function(){

    let imdbID = filmovi.value;

    if (imdbID === "") {
        detalji.innerHTML = "";
        return;
    }

        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
            .then(response => response.json())
            .then(data => {

                detalji.innerHTML = `
                <h2>${data.Title}</h2>
                <p>Godina: ${data.Year}</p>
                <p>Director: ${data.Director}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Actors: ${data.Actors}</p>
                <p>Plot: ${data.Plot}</p>
            `;
            })
            .catch(error => {
                console.log("Greška:", error);
            });
    });

//6

let dugme = document.getElementById("dugme");
let movies = document.getElementById("movies");

dugme.addEventListener("click", function(){

    movies.innerHTML = "";

    fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&s=spider-man`)
    .then(response => response.json())
    .then(data => {

        for (let movie of data.Search) {

            if (Number(movie.Year) > 2010) {

                let div = document.createElement("div");

                div.textContent = `${movie.Title} - ${movie.Year}`;

                movies.appendChild(div);
            }
        }

    })
    .catch(error => {
        console.log(error);
    });
});

//7

let filmoviNiz = document.getElementById("filmoviNiz");

function vratiNaslove() {
    return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=harry+potter`)
    .then(response => response.json())
    .then(data => {

        let naslovi = [];

        for ( let film of data.Search) {
            naslovi.push(film.Title);
        }

        return naslovi;
    });

}

vratiNaslove()
    .then(naslovi => {

        for (let naslov of naslovi) {

            let li = document.createElement("li");

            li.textContent = naslov;

            filmoviNiz.appendChild(li);
        }
    })
.catch(error => {
    console.log(error);
})

//8

let postResult = document.getElementById("postResult");

fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=batman`)
.then(response => response.json())
.then(data => {

    if (data.Response === "False") {
        throw new Error(data.Error);
    }

    let movieTitle = data.Search[0].Title;
    let movieYear = data.Search[0].Year;

    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: movieTitle,
            year: movieYear,
        })
    });
})
    .then(response => response.json())
    .then(data => {

        console.log("ID odgovora:",data.id);

        postResult.innerHTML = `
        <P>Movie: ${data.title}</P>
        <p>Year: ${data.year}</p>
        <P>ID odgovora: ${data.id}</P>
        `;
    })
.catch(error => {
    console.log(error);
});

//9

let movieForm = document.getElementById("movieForm");
let movieInput = document.getElementById("movieInput");
let movieDetails = document.getElementById("movieDetails");

movieForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let movieName = movieInput.value.trim();

    if (movieName === "") {
        movieDetails.innerHTML = "<p>Unesite naziv filma.</p>";
        return;
    }


    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
        .then(response => response.json())
        .then(data => {

            if (data.Response === "False") {
                movieDetails.innerHTML = `<p>Film nije pronađen.</p>`;
                return;
            }

            movieDetails.innerHTML = `
                <h2>${data.Title}</h2>
                <p>Godina: ${data.Year}</p>
                <p>Žanr: ${data.Genre}</p>
                <p>Glumci: ${data.Actors}</p>
                <p>Radnja: ${data.Plot}</p>

                <button id="postButton">Pošalji POST</button>
            `;

            let postButton = document.getElementById("postButton");

            postButton.addEventListener("click", function() {

                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title: data.Title,
                        year: data.Year
                    })
                })
                    .then(response => response.json())
                    .then(postData => {
                        console.log("ID odgovora:", postData.id);

                        movieDetails.innerHTML += `
                            <p>ID odgovora: ${postData.id}</p>
                        `;
                    })
                    .catch(error => {
                        console.log("Greška:", error);
                    });
            });

        })
        .catch(error => {
            console.log("Greška:", error);
        });
});

//10

function imaVisokRating(title) {

    return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
        .then(response => response.json())
        .then(data => {

            if (data.Response === "False") {
                throw new Error(data.Error);
            }

            return Number(data.imdbRating) > 8;
        });
}

imaVisokRating("Joker")
    .then(rezultat => {
        console.log(rezultat);
    })
    .catch(error => {
        console.log(error);
    });

//11

let filmovi11 = document.getElementById("filmovi11");

let filmoviNiz11 = ["Batman", "Joker", "Inception"];

for (let naslov of filmoviNiz11) {

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${naslov}`)
        .then(response => response.json())
        .then(data => {

            let li = document.createElement("li");

            li.textContent = `${data.Title} - ${data.Year}`;

            filmovi11.appendChild(li);
        })
        .catch(error => {
            console.log(error);
        });
}

//12

let movieInput12 = document.getElementById("movieInput12");
let movieResults12 = document.getElementById("movieResults12");

movieInput12.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        let movieName = movieInput12.value.trim();

        if (movieName === "") {
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
            .then(response => response.json())
            .then(data => {

                if (data.Response === "False") {
                    console.log(data.Error);
                    return;
                }

                let p = document.createElement("p");

                p.textContent = `${data.Title} - ${data.Year} - ${data.Director}`;

                movieResults12.appendChild(p);

                movieInput12.value = "";
            })
            .catch(error => {
                console.log(error);
            });
    }
});

//13

let avengersPosts = document.getElementById("avengersPosts");

let avengersButton = document.createElement("button");
avengersButton.textContent = "Učitaj Avengers filmove";

avengersPosts.before(avengersButton);

avengersButton.addEventListener("click", function () {

    avengersPosts.innerHTML = "";

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=avengers`)
        .then(response => response.json())
        .then(data => {

            for (let movie of data.Search) {

                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title: movie.Title,
                        year: movie.Year
                    })
                })
                    .then(response => response.json())
                    .then(postData => {

                        let li = document.createElement("li");

                        li.textContent =
                            `${movie.Title} - Kreirani ID: ${postData.id}`;

                        avengersPosts.appendChild(li);
                    });
            }
        })
        .catch(error => {
            console.log("Greška:", error);
        });
});

//14

let spidermanIds = document.getElementById("spidermanIds");

function vratiIMDbId() {

    return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=spider-man`)
        .then(response => response.json())
        .then(data => {

            let ids = [];

            for (let movie of data.Search) {
                ids.push(movie.imdbID);
            }

            return ids;
        });
}

vratiIMDbId()
    .then(ids => {

        for (let id of ids) {

            let li = document.createElement("li");

            li.textContent = id;

            spidermanIds.appendChild(li);
        }
    })
    .catch(error => {
        console.log(error);
    });

//15

let movieForm15 = document.getElementById("movieForm15");
let movieInput15 = document.getElementById("movieInput15");
let movieDetails15 = document.getElementById("movieDetails15");
let postResult15 = document.getElementById("postResult15");

movieForm15.addEventListener("submit", function(event) {

    event.preventDefault();

    let movieName = movieInput15.value.trim();

    if (movieName === "") {
        movieDetails15.innerHTML = "<p>Unesite naziv filma.</p>";
        return;
    }

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
        .then(response => response.json())
        .then(data => {

            if (data.Response === "False") {
                movieDetails15.innerHTML = "<p>Film nije pronađen.</p>";
                return;
            }

            movieDetails15.innerHTML = `
                <h2>${data.Title}</h2>
                <p>Godina: ${data.Year}</p>
                <p>Director: ${data.Director}</p>
            `;

            return fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: data.Title,
                    year: data.Year,
                    director: data.Director
                })
            });
        })
        .then(response => response.json())
        .then(postData => {

            postResult15.innerHTML = `
                <p>ID novog posta: ${postData.id}</p>
            `;
        })
        .catch(error => {
            console.log("Greška:", error);
        });
});

