
const apiUrl = "http://www.omdbapi.com/";

let apiKey = "61d39583";

//fetch(apiUrl+"?apiKey="+apiKey+"&t=Terminator") // we get --> http://www.omdbapi.com/?apikey=61d39583&t=Terminator

//callOmdbApi("t=Terminator") --> async

let TerminatorResponse = await callOmdbApi("t=Terminator")
console.log(TerminatorResponse);

let homeAloneSearch = await callOmdbApi("s=Home Alone&y=1990")
console.log(homeAloneSearch);


// --> DRUGI NACIN
 // getMovieByTitle("Terminator")
 //
 // async function getMovieByTitle(title) {
 //    let response = await callOmdbApi("t=" + title);
 //    console.log(response);
 // }


async function callOmdbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);

    return await response.json();
}