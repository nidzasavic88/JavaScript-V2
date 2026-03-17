// getElementById

/**
 * document? -> HTML file unutar koga se ucitava JS.
 *  document = index.html
 *
 *  document.getelementById
 *       -> vraca element na osnovu ID-a
 *       -> iz index.html izvuci element koji sadrzi ID "name"
 *
 *
 *
 *    style
 *          <p style="color: red"></p>
 */

let name = prompt("What is your name?");

let textColor = prompt("What is your color?");

let backgroundColor = prompt("What is your background color?");

let marqueeElement = document.getElementById("name");

marqueeElement.style.color = textColor;

marqueeElement.style.backgroundColor = backgroundColor;

marqueeElement.innerText = name;

/**
 *  - getElementById -> prosledite ID, dobijete element
 *  - getElementByClassName -> prosledite klasu i dobijete array sa elementima
 *  - querySelector -> "#name", "name" -> Vraca 1 element
 *  - querySelectorAll -> "#name", "name" -> Vraca array sa elementima
 */

