//Napravi funkciju login
//Ako se unese username "admin" i lozinka "admin" vratiti true
//Ako se unese bilo sta drugo, ispisati false

function login(username, password)
{
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
console.log(login("Admin", "Admin"));
console.log(login("Vdmin", "Mdmin"));