let name = "admin";
let password = "tajnaSifra";

if (name === "admin" && password === "tajnaSifra")
{
    console.log("Vasi podaci su tacni");
}
else
{
    console.log("Vasi podaci nisu tacni");
}

let userType = "admin";
if (userType === "admin" || userType === "moderator")
{
    console.log("Vi ste administrator");
}
else
{
    console.log("Vi ste obican clan");
}

let alloudTypes = ["admin", "moderator"]; // (arrey) alloudTypes

// Dali "userType" postoji unutar "alloudTypes"

let typeCheck = alloudTypes.includes(userType);
if (typeCheck) // = if (typeCheck == true)
{
    console.log(" 2. Vi ste administrator");
}
else
{
    console.log("Vi niste administrator");
}
// Domaci
let dayOfTheWeek = "friday";

switch (dayOfTheWeek) {
    case "saturday":
    case "sunday":
        console.log("Weekend");
        break;
    case "friday":
        console.log("weekend is coming");
        break;
    default:
        console.log("Work work...");
}