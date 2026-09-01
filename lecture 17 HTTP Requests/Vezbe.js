
//1

fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Test",
        body: "Sadrzaj",
        userId: 1
    })
})
.then(res => res.json())
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});

//2

let form = document.getElementById("userForm");
let result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            job: job
        })
    })
    .then(res => res.json())
    .then(function(data) {

        console.log(data);

        result.innerHTML = `
        <p>ID: ${data.id}</p>
        <p>Created At: ${data.createdAt}</p>
     `;
    })
    .catch(function(error) {
        console.log(error);
    });
});

//3

function dodajKorisnika() {

    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: "Petar",
            lastName: "Petrovic",
            age: 25
        })
    })
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

dodajKorisnika();

//4

let sendButton = document.getElementById("sendButton");
let result1 = document.getElementById("result1");

sendButton.addEventListener("click", function () {

    fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Test",
            body: "Sadrzaj posta",
            userId: 1
        })
    })
    .then(res => res.json())
    .then(function(data) {

        console.log(data);

        result1.textContent = "Kreirani ID: " + data.id;
    })
    .catch(function(error) {
        console.log(error);
    });
});

//5

function DodajKorisnika(name, job) {

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            job: job
        })
    })
    .then(res => res.json())
    .then(function(data) {
        console.log("Uspesno kreirano: ID = " + data.id);
    })
    .catch(function(error) {
        console.log(error);
    });
}

DodajKorisnika("Nikola","Developer");

//6

let korisnici = [
    {
        firstName: "Nikola",
        lastName: "Savic",
        age: 38
    },
    {
        firstName: "Emanuela",
        lastName: "Takac",
        age: 33
    },
    {
        firstName: "Dragisa",
        lastName: "Binic",
        age: 77
    }
];

for (let korisnik of korisnici) {

    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(korisnik)
        })
    .then(res => res.json())
    .then(function(data) {
        console.log("Kreiran korisnik, ID: ", data.id);
    })
    .catch(function(error) {
        console.log(error);
    });
}

//7

let PostForm = document.getElementById("PostForm");
let postList = document.getElementById("postList");

PostForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    })
    .then(res => res.json())
    .then(function(data) {

        let li = document.createElement("li");

        li.innerHTML = `
        <strong>${data.title}</strong>
        <p>${data.body}</p>
      `;
        postList.appendChild(li);

        PostForm.reset();
    })
    .catch(function(error) {
        console.log(error);
    });
});

//8

function posaljiKorisnika() {

    let imena = ["Nikola", "Emanuela", "Viktor","Iris","Milan"];
    let poslovi = ["Developer", "Designer","Manager","Engineer","Tester"];

    let name = imena[Math.floor(Math.random() * imena.length)];
    let job = poslovi[Math.floor(Math.random() * poslovi.length)];

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            job: job
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Uspesno poslato!\n" +
        "Ime: " + data.name + "\n" +
        "Posao: " + data.job + "\n" +
        "ID: " + data.id
        );
    })
    .catch(error => {
        alert("Greska: " + error.message);
    })
}

//9

function kreirajKorisnika() {

    let div = document.getElementById("poruka");

    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: "Nikola",
            lastName: "Savic",
            age: 23
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Greska: " + response.status);
            }

            return response.json();
        })
        .then(data => {
            div.style.backgroundColor = "green";
            div.style.color = "white";
            div.textContent = "Korisnik je uspesno kreiran!";
        })
        .catch(error => {
            div.style.backgroundColor = "red";
            div.style.color = "white";
            div.textContent = "Greska pri kreiranju korisnika.";
        });
}

//10

async function posaljiPost() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Moj naslov",
            body: "Moj tekst",
            userId: 1
        })
    });

    if (response.status === 201) {
        return true;
    } else {
        return false;
    }
}

async function prikaziRezultat() {

    let rezultat = await posaljiPost();

    document.getElementById("rezultat").textContent  = rezultat;
}

//11

let userForm11 = document.getElementById("userForm11");

userForm11.addEventListener("submit", function (event) {

    event.preventDefault();

    let name11 = document.getElementById("name11").value;
    let job11 = document.getElementById("job11").value;

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name11,
            job: job11
        })
    })
        .then(response => {

            if (!response.ok) {
                throw new Error("Greška: " + response.status);
            }

            return response.json();
        })
        .then(data => {

            document.getElementById("result11").textContent =
                "Korisnik je uspešno dodat! ID: " + data.id;

            userForm11.reset();
        })
        .catch(error => {

            console.log(error);

            document.getElementById("result11").textContent =
                "Greška pri slanju.";
        });
});

//12

async function dodajKorisnika() {

    let response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: "Nikola",
            lastName: "Savic",
            age: 38
        })
    });

    let data = await response.json();

    return data.id;
}


async function dodajKorisnike() {

    let idLista = document.getElementById("idLista");

    for (let i = 0; i < 5; i++) {

        let id = await dodajKorisnika();

        let li = document.createElement("li");

        li.textContent = "ID: " + id;

        idLista.appendChild(li);
    }
}

//13

async function posaljiPostove() {

    let postovi = [
        {
            title: "Prvi post",
            body: "Sadrzaj prvog posta",
            userId: 1
        },
        {
            title: "Drugi post",
            body: "Sadrzaj drugog posta",
            userId: 2
        },
        {
            title: "Treci post",
            body: "Sadrzaj treceg posta",
            userId: 3
        }
    ];

    let postovi13 = document.getElementById("postovi13");

    for (let post of postovi) {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        let data = await response.json();

        if (data.id > 100) {

            let li = document.createElement("li");

            li.textContent =
                "ID: " + data.id +
                ", Title: " + data.title +
                ", Body: " + data.body;

            postovi13.appendChild(li);
        }
    }
}

//14

async function posaljiKorisnika14() {

    let greska14 = document.getElementById("greska14");

    try {

        let response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Nikola",
                job: "Developer"
            })
        });

        if (!response.ok) {
            throw new Error("Greška");
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {

        greska14.textContent = "Greška";
    }
}

//15

let userForm15 = document.getElementById("userForm15");
let result15 = document.getElementById("result15");

userForm15.addEventListener("submit", function (event) {

    event.preventDefault();

    let firstName = document.getElementById("firstName15").value;
    let lastName = document.getElementById("lastName15").value;

    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName
        })
    })
        .then(response => response.json())
        .then(function (data) {

            let div = document.createElement("div");

            div.textContent =
                "Kreirano: " + data.firstName + " " + data.lastName;

            result15.appendChild(div);
        })
        .catch(function (error) {
            console.log(error);
        });
});



