


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const apiUrl = "http://www.omdbapi.com/?apiKey=61d39583&i="+id;

const response = await fetch(apiUrl);
const data = await response.json();

console.log(data);

const movieHolder = document.getElementById("movieHolder");

const title = document.createElement("h1")
title.innerText = data.Title;

movieHolder.append(title);

const trailerApiUrl =
    `https://api.kinocheck.com/movies?imdb_id=${id}&language=en&categories=Trailer`;

const trailerResponse = await fetch(trailerApiUrl);
const trailerData = await trailerResponse.json();

console.log(trailerData);

if (trailerData.trailer) {

    const youtubeId = trailerData.trailer.youtube_video_id;

    const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`;

    document
        .getElementById("trailer")
        .setAttribute("src", youtubeUrl);
}


