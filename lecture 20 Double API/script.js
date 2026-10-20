

const mealDbAPI = "https://www.themealdb.com/api/json/v1/1/";

const data = await getMealDBData("categories.php");

console.log(data);

const categorySelect = document.getElementById("foodCategories");

for(let category of data.categories)
{
    appendCategories(category);

}

const mealHolder = document.getElementById("mealsHolder");

categorySelect.addEventListener("change", async () => {

    mealHolder.innerHTML = "";

    const mealsJson = await getMealDBData("filter.php?c="+categorySelect.value);

    for(let meal of mealsJson.meals) {

        let mealDiv = showMeal(meal);

        mealDiv.addEventListener("click", async () => {

            let recipe = await getMealDBData("Lookup.php?i="+meal.idMeal);

            let cocktail = await  getRandomCocktail();

            document.getElementById("recipeText").innerText = recipe.meals[0].strInstructions;
            document.getElementById("cocktail").innerText = cocktail.drinks[0].strDrink+": "+cocktail.drinks[0].strInstructions;

            document.getElementById("popup").style.display = "flex";
        });

}


});

    document.getElementById("closePopup").addEventListener("click",  () => {
        document.getElementById("popup").style.display = "none";
    });


    function appendCategories(category) {
        let categoryElement = document.createElement("option");
        categoryElement.value = category.strCategory;
        categoryElement.innerText = category.strCategory;
        categorySelect.appendChild(categoryElement);

    }

    function showMeal(meal) {
        let mealDiv = document.createElement("div");
        mealDiv.classList = "singleMeal";

        let mealImage = document.createElement("img");
        mealImage.setAttribute("src", meal.strMealThumb);
        mealImage.classList = "mealImage";

        let mealName = document.createElement("h5");
        mealName.innerText = meal.strMeal;

        mealDiv.append(mealImage, mealName);
        mealHolder.append(mealDiv);

        return mealDiv;

    }

async function getRandomCocktail () {
    let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    return await response.json();
}

    async function getMealDBData(endpoint) {
        let response = await fetch(mealDbAPI+endpoint);
        return await response.json();
    }



