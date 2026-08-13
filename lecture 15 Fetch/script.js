/**
 * Ajax, Axios, Fetch, postReg, XHR...
 *
 * FETCH
 *
 * CORS - (ORIGIN Resource Sharing)
 *   => Izvor (Origin) - odakle pozivamo API
 * Live Server (skinuti za VS Code)
 *
 * Network - Headers:
 * - Prilikom zvanja bilo kog resursa (API, (SS fajl...) mi saljemo headere
 * -> Headeri informacije o tom pozivu:
 * - POST, GET
 * -> IP Adresa
 * -> Host: Odakle pozivamo, itskola.net
 * Request URL:
 * http://localhost:63342/favicon.ico -> Sta pozivamo (gde?)
 * Request Method:
 * GET -> Kojom metodom
 *
 * Status Code:
 * 200 OK -> Koji je odgovor
 *
 * -> Idivna dummyjson.com/test
 * -> Uzmi odgovor
 * -> Prikazi odgovor
 * Asinhrono  (async)
 *
 * Promise -> Garancija da cete dobiti odgovor
 *         ->Kada?
 *         Sta ce biti odgovor?
 *         Da li dolazi do greske?
 *
 *   Pozovi https://dummyjson.com/test");
 *     -> Promise: Obecavam ti da ces nekad dobiti odgovor
 *     -> Kod nastavlja da se izvrsava
 */

   let productHolder = document.getElementById("Products");
   let searchProduct = document.getElementById("searchProduct");

   searchProduct.addEventListener("click", function () {
       let searchText = document.getElementById("searchText");
       let searchLink = 'https://dummyjson.com/products/search?q='+searchText.value;

       fetch(searchLink)
          .then(response => response.json())
          .then(function(data) {
              productHolder.innerHTML = "";
              for(let product of data.products) {
                  appendProductToHolder(product);
              }
          })
   });

    fetch('https://dummyjson.com/products?limit=20&sortBy=price&order=desc')
        //* -> ASC i DESC (Ascending, Descending)
        .then(response => response.json())
        .then(function (data) {
            for(let product of data.products) {
               appendProductToHolder(product);
            }
        })

function appendProductToHolder(product) {
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h1");
    productTitle.innerHTML = product.title;

    let productCategory = document.createElement("p");
    productCategory.innerHTML = product.category;

    let productPrice = document.createElement("p");
    productPrice.innerHTML = product.price;


    singleProduct.append(productTitle, productCategory, productPrice);

    productHolder.append(singleProduct);
}
    console.log("1")
