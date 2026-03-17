

alert ("Welcome to website!");

let name = prompt("Upisite vase ime");
console.log(name);

// Domaci
let names = ["admin", "administrator", "Toma"]

/**
 * Dali je ime koje je korisnik uneo u arrey names
 *
 *   ->Toma dali se to ime nalazi u arrey names?
 *         -> Ako  se naolai ispisati preko alerta "Dobrodosao administratore"
 *         -> Ako se NE nalazi onda ispisati "Nemate pristup sajtu"
 */
if (names.includes("Toma"))
{
    alert("Dobrodosao administratore!");
}
else
{
    alert("Nemate pristup sajtu!");
}