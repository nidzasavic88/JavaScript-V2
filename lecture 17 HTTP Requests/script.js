/**
 * https://dummyjson.com/recipes?sortBy=name&order=asc
 * GET: https://dummyjson.com/login?username=toma&password=12345
 * POST: https://dummyjson.com/login (username: toma, password: 12345)
 *
 * MiddLeMan Attack -> POST(https://dummyjson.com/login)
 *
 * POST se koristi kod -> registracija, login, password reset, kupovine
 * OSETLJIVI PODACI = POST
 *
 * https (s = secure)
 * http
 *
 * HTTPS = SSL Sentificate
 *
 * POST = {name: "Toma"，password： "12345"｝
 *      => HTTP: {name: "Toma", password: "12345"}
 *      => HTTPS: Oqafc5c479d358eefaff7250007f70c78a75c0ae5c2669759322961b5b174965
 *           SHA256
 *
 *
 * -> PUT/PATCH -› azuriranje podataka
 * -> POST -> Pravjenje novih podataka (registracije)
 * -› DELETE -> brisanje podataka
 * -> GET -> pretraga
 * -> registracija: POST
 * -> Promenimo sifru: patch
 * -> Ibrisemo korisnika: delete
 * -> pretraga korisnika: GET
 *
 */

let age = document.getElementById("age");

for (let i = 18; i <= 100; i++) {
    let option = document.createElement("option");

    option.value = i;
    option.textContent = i;

    age.appendChild(option);
}

document.getElementById("RegisterButton").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let selectedAge = age.value;

    if (name.trim() === "" || lastName.trim() === "") {
        alert("Niste uneli vase podatke");
        return;
    }

    register(name, lastName, selectedAge);


});
 // D O M A C I
document.getElementById("delete").addEventListener("click", function() {
   let apiUrl = 'https://dummyjson.com/users/'+this.getAttribute('userId');

   fetch(apiUrl, {
       method: "DELETE"
   })
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
    })
});

function  register(name, lastName, age) {
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age
        })
    })
    .then(response => response.json())
    .then(function(data) {

        // D O M A C I
        let deleteButton = document.getElementById("delete");
        deleteButton.setAttribute("userId",data.id);
        deleteButton.removeAttribute("hidden");

        alert("Uspesno ste se registrovali sa imenom "+" "+data.firstName)
    })
}

fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
    })
})
.then(response => response.json())
.then(function(data) {
    console.log(data);
})
    .catch(function(error) {
        console.log(error);
    });