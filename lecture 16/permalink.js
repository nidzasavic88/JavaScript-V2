

let params = new URLSearchParams(window.location.search); // new URLSearchParams(id=13)

let recipeId = params.get("id");
let recipeElement = document.getElementById("recipe");
let tagsHolder = document.getElementById("tagsHolder");

fetch("https://dummyjson.com/recipes/"+recipeId)
.then(response => response.json())
.then(function (data) {
    let recipeName = document.createElement("h1")
    recipeName.innerText = data.name;

    recipeElement.append(recipeName);
})


fetch("http://dummyjson.com/recipes/tags")
    .then(response => response.json())
    .then(function(data) {
        for(let tag of data) {
            let tagElement = document.createElement("option");
            tagElement.innerText = tag;
            tagElement.value = tag;
            tagsHolder.append(tagElement);
        }
    });

tagsHolder.addEventListener("change", function(event) {
    window.location.href = "index.html?category=" + this.value;
})