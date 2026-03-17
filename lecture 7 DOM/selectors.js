/**
 *  - getElementById -> prosledite ID, dobijete element
 *  - getElementByClassName -> prosledite klasu i dobijete array sa elementima
 */
let elements = document.getElementsByClassName("description");
elements[0].style.color = "blue";
elements[1].style.color = "green";

for (let e in elements) {
    elements[e].innerText = e;
}

let hTitle = document.getElementsByClassName("title");
hTitle[0].style.color = "red";






 /**
 *  - querySelector -> "#name", "name" -> Vraca 1 element
 *  - querySelectorAll -> "#name", "name" -> Vraca array sa elementima
 */
