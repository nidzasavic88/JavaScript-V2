/**
 *   Functions -> Methods
 *   Methods: array.find, console.log()
 *   Funkcije i Metode
 *
 *
 *   function -> kada kreiramo / pravimo funkcuju
 *   imeFunkcije -> ista pravila kao za varijable (!@%$^&*,.126262628)
 *   () -> funkcija bez argumenta
 *   (ime, prezime) funkcija sa argumentima
 *   return -> za sada zanemarite
 *   Svaka funkcija (kao i if) mora imati svoje zagrade {}
 *   -> Unutar {} se nalazi kod koji ce se izvrsiti
 */

function sayHello()
{
    console.log("Hello");
}

sayHello();
sayHello();

/**
 *  -----V E Z B A-----
 *  Napravi funkciju online -> funkcija treba da ispise poruku "Sajt je online!"
 */


function online()
{
    console.log("Sajt je online!");
}

online();

// isAdult -> dali osoba ima 18 godina -> ako ima "Adult" = ako nema "Not adult"
// Dali je nesto tacno ili ne -> prefiks = is
// SetMoney setName -> prefiks = set
// GetMoney getName -> prefiks = get


function isAdult(age)
{
    if (age >= 18)
    {
        console.log("Adult");
    }
    else
    {
        console.log("Not Adult")
    }
}

isAdult(15)
isAdult(18)
isAdult(67)