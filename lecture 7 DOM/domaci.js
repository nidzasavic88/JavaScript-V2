// D O M A C I

let ads = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://www.netcarshow.com/Skoda-Octavia_RS-2014-Front.263c2337.jpg"
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGmDD1cbxEcsyMX0yWwe7jEvwR4FrAleKFg&s"
    }
    ];


    let productsElements = document.getElementById("products");
    for(let ad in ads){
        productsElements.innerHTML += ads[ad]['title']+" "+ads[ad]['price']+" "+ads[ad]['image']+"<br/>";
    }

    // V E Z B E

    //1
    let paragraf1Element = document.getElementById("paragraf1");
    paragraf1Element;

    //2
    let paragraf2Element = document.getElementById("tekst");
    paragraf2Element;

    //3
    let hTitle = document.querySelector("#naslov");
    hTitle.textContent = "Novi Naslov";

    //4
    let box = document.querySelector(".box");
    box.innerHTML = "Novi sadrzaj";

    //5
    let par1 = document.querySelector("#par1");
    par1.innerHTML ="<strong>Bold Test</strong>"

    //6
    let item = document.getElementsByClassName("item");
    item[0].innerHTML ="Prvi Promenjen"

    //7
    let glavni = document.getElementById("glavni");
    glavni.innerHTML += "Dodato"

    //8
    let lista = document.getElementsByClassName("lista");
    lista[1].innerHTML ="Kruska"

    //9
    let para = document.querySelector(".para");
    para.style.color = "red"

    //10
    let box1 = document.querySelector("#box1");
    box1.innerHTML +="<p>Novi Paragraf</p>"

    //11
    let tekst1 = document.querySelector("#tekst1");
    tekst1.innerHTML += "+ dodatak"

    //12
    let card = document.getElementsByClassName("card");
    card[0].innerHTML ="Promenjeno";
    card[1].innerHTML ="Promenjeno";

    //13
    let broj = document.getElementById("broj");
    let vrednost = parseInt(broj.innerHTML);

    vrednost += 5;

    console.log(vrednost);

    //14
    let opis = document.querySelector(".opis");
    opis.innerHTML ="Nova opis";

    //15
    let sadrzaj = document.querySelector("#sadrzaj");
    sadrzaj.innerHTML ="<ul><li>Prvi</li><li>Drugi</li></ul>";

    //16
    let para1 = document.getElementsByClassName("para1");
    para1[0].innerHTML ="Promenjeno";
    para1[1].innerHTML ="Promenjeno";

    //17
    let naslov2 = document.querySelector("#naslov2");
    naslov2.innerHTML ="Novi naslov 2";

    //18
    let box2 = document.getElementsByClassName("box2");
     box2[1].innerHTML ="Box2 Promenjen";

    //19
    let para2 = document.querySelector("#para2");
    para2.innerHTML +="+ dodatni tekst";

    //20
    let glavniDiv = document.querySelector("#glavniDiv");
    glavniDiv.innerHTML += " <h3>Novi naslov</h3>"

    //21
    let item1 = document.getElementsByClassName("item1");
    item1[0].innerHTML ="10";
    item1[1].innerHTML ="20";

    //22
    let poruka = document.querySelector("#poruka");
    poruka.style.color = "blue"

    //23
    let kartica = document.querySelector(".kartica");
    kartica.innerHTML += "<p>Opis kartice</p>"

    //24
    let test = document.querySelector(".test");
    test.innerHTML +="World"

    //25
    let glavniBox = document.querySelector("#glavniBox");
    glavniBox.innerHTML += "<ul><li>A</li><li>B</li></ul>";

    //26
    let para3= document.getElementsByClassName("para3");
    para3[0].innerHTML ="Promenjeno";
    para3[1].innerHTML ="Promenjeno";
    para3[2].innerHTML ="Promenjeno";

    //27
    let broj2 = document.querySelector("#broj2");
    broj2.innerText += "+10"

    //28
    let card1 = document.querySelector(".card1");
    card1.innerHTML +="<h2>Naslov</h2><p>Opis</p>";

    //29
    let text2 = document.querySelector("#tekst2");
    text2.style.fontSize = "24px";

    //30
    let item3 = document.getElementsByClassName("item3");
    item3[0].innerHTML ="Prvi";
    item3[1].innerHTML ="Drugi";















