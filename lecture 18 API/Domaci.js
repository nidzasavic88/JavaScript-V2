
const apiUrl = "http://www.omdbapi.com/";

let apiKey = "61d39583";

document.getElementById("searchMovie").addEventListener("click", async () => {
    let movieName = document.getElementById("movieTitle").value.trim();
    let searchError = document.getElementById("searchError");

    searchError.innerText = "";

    if(movieName ==='') {return alert("Please enter a movie")
    }


    let response = await callOmdbApi("s="+movieName);

    if(response.Response === "False") {
        searchError.innerText = response.Error;
    }
    else {
        let movieList = document.getElementById("movieList");

        movieList.innerHTML = "";

        for(let movie of response['Search']) {

            let movieHolder = document.createElement("div");
            movieHolder.classList= "movieHolder";

            let movieTitle = document.createElement("h3");
            movieTitle.innerText = movie.Title;

            let moviePoster = document.createElement("img");
            moviePoster.setAttribute('src',movie.Poster);

            let movieType = document.createElement("p");
            movieType.innerText = movie.Type;

            let movieYear = document.createElement("p");
            movieYear.innerText = movie.Year;

            movieHolder.append(movieTitle, moviePoster, movieType, movieYear);

            movieList.append(movieHolder);

        //     Poster
        //         :
        //         "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
        //     Title
        //         :
        //         "The Lord of the Rings: The Fellowship of the Ring"
        //     Type
        //         :
        //         "movie"
        //     Year
        //         :
        //         "2001"
        //     imdbID
        //         :
        //         "tt0120737"
        //
        }
    }
})

async function callOmdbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);

    return await response.json();
}

