document.querySelector("#title").style.color ="red";

document.querySelector(".subtitle").style.color ="green";

document.getElementsByClassName("subtitle2")[0].style.color ="blue";


let products = document.querySelectorAll(".product");

for (let product of products ) {
    product.style.color = "darkgrey";
}

    let productPrices = document.querySelectorAll(".productPrice");

    for (let price of productPrices) {

        if (price.textContent >= 5000)
        {
            price.style.color = "red";
        }
        else
        {
            price.style.color = "green";
        }
    }
