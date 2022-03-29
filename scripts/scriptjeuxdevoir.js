//random number for player 1
const N = document.getElementById("new"); //new game
let round1 = document.getElementById("round1");//player 1
let round2 = document.getElementById("round2");//player 2
let de = document.getElementById("de");
const boutton = document.getElementById("roll");
const boutton2 = document.getElementById("roll2");
const reset = document.getElementById("reset");
const reset2 = document.getElementById("reset2");
let global = document.getElementById("scoreCurent1");
let global2 = document.getElementById("scoreCurent2");
const btnP1 = document.querySelector("p1");
const btnP2 = document.querySelector("p2");

//test toggle
//let isVisible = true;
//let a = document.querySelector("btn-group-vertical p1");
//function new game
N.addEventListener("click", () => {
    alert("Une nouvelle partie va commencer, appuyer sur: 'OK'");
    round1.innerHTML = "0";
    round2.innerHTML = "0";
    de.innerHTML = "0";
    global.innerHTML = "0";
    global2.innerHTML = "0";
})
//console.log(typeof a);
//listening button p1 to throw
boutton.addEventListener("click", () => {
    //console.log("yes");
    de.innerHTML = parseInt(Math.floor(Math.random() * 10));
    //console.log(Number(de.innerHTML));
    round1.innerHTML = Number(de.innerHTML) + Number(round1.innerHTML);
    if (de.innerHTML === "1") {
        alert("AH AH, tu as fait '1', ton compteur reviens a ZERO, passe ton tour");
        return round1.innerHTML = "0";
    }
    //img.forEach(item => console.log(item.inline));
    //integration des images avec if else, qui ne fonctionne pas
    /*else if (de.innerHTML === "2") {
        console.log(img[2]);//retourn image du tableau 
    } else if (de.innerHTML === "3") {
        return de.innerHTML = "url= ./images/dés / 3.jpg";
    } else if (de.innerHTML === "4") {
        return de.innerHTML = "url= ./images/dés / 4.jpg";
    } else if (de.innerHTML === "5") {
        return de.innerHTML = "url= ./images/dés / 5.jpg";
    } else if (de.innerHTML === "6") {
        return de.innerHTML = "url= ./images/dés / 6.jpg";
    } else if (de.innerHTML === "7") {
        return de.innerHTML = "url= ./images/dés / 7.jpg";
    } else if (de.innerHTML === "8") {
        return de.innerHTML = "url= ./images/dés / 8.jpg";
    } else if (de.innerHTML === "9") {
        return de.innerHTML = "url= ./images/dés / 9.jpg";
    } else {
        de.innerHTML === "0"
        return de.innerHTML = "url= ./images/dés / zero.jpg";
    }*/
});
boutton.addEventListener("click", () => {
    if (de.innerHTML === "0") {
        de.src = "../images/dés/zero.JPG";
    }
})

//listening button p1 save
reset.addEventListener("click", () => {
    //console.log("reset")
    global.innerHTML = Number(round1.innerHTML) + Number(global.innerHTML);
    if (Number(global.innerHTML) >= 100) {
        alert(`GENIAL JOUEUR 1, tu as gagné la partie avec ${global.innerHTML} points, c'est fini`);
        round1.innerHTML = "0";
        round2.innerHTML = "0";
        de.innerHTML = "./images/dés / zero.jpg";
        global.innerHTML = "0";
        global2.innerHTML = "0";
    }
    //test toggle
    //isVisible = !isVisible;
    //btnP2.classList.toggle("is-visible");

    round1.innerHTML = 0;

    //mettre la methode toggle et voir a changer les resultats.
});

//listening button p2 to throw
boutton2.addEventListener("click", () => {
    //console.log("yes");
    de.innerHTML = parseInt(Math.floor(Math.random() * 10));
    //console.log(Number(de.innerHTML));
    round2.innerHTML = Number(de.innerHTML) + Number(round2.innerHTML);
    if (de.innerHTML === "1") {
        alert("AH AH, tu as fait '1', ton compteur reviens a ZERO, passe ton tour");
        return round2.innerHTML = "0";
    }
});

//listening button p2 save
reset2.addEventListener("click", () => {
    //console.log("reset")
    //console.log(Number(global.innerHTML));
    global2.innerHTML = Number(round2.innerHTML) + Number(global2.innerHTML);
    if (Number(global2.innerHTML) >= 100) {
        alert(`GENIAL JOUEUR 2, tu as gagné la partie avec ${global2.innerHTML} points, c'est fini`);
        round1.innerHTML = "0";
        round2.innerHTML = "0";
        de.innerHTML = "0";
        global.innerHTML = "0";
        global2.innerHTML = "0";
    }

    //test toggle
    //isVisible = !isVisible;
    //btnP1.classList.toggle("is-visible");

    round2.innerHTML = 0;
});
///après reflection je l'intergre directement au boutton avec if else.
//integration des images
let img = [
    { id: 0, value: './images/dés / zero.jpg', inline: "true" },
    { id: 1, value: './images/dés/1.JPG', inline: true },
    { id: 2, value: './images/dés/2.JPG', inline: true },
    { id: 3, value: './images/dés / 3.jpg', inline: true },
    { id: 4, value: './images/dés / 4.jpg', inline: true },
    { id: 5, value: './images/dés / 5.jpg', inline: true },
    { id: 6, value: './images/dés / 6.jpg', inline: true },
    { id: 7, value: './images/dés / 7.jpg', inline: true },
    { id: 8, value: './images/dés / 8.jpg', inline: true },
    { id: 9, value: './images/dés / 9.jpg', inline: true },
];
/*let ima = de.innerHTML;
//console.log(typeof img);
switch (ima) {
    case "0":
        de.innerHTML = "./images/dés / zero.jpg";
        break;
    case "1":
        de.innerHTML = "url(./images/dés / 1.jpg";
        break;
    case "2":
        de.innerHTML = ("url(./images/dés / 2.jpg");
        break;
    case "3":
        de.innerHTML = ("url(./images/dés / 3.jpg");
        break;
    case "4":
        de.innerHTML = ("url(./images/dés / 4.jpg");
        break;
    case "5":
        de.innerHTML = ("url(./images/dés / 5.jpg");
        break;
    case "6":
        de.innerHTML = ("url(./images/dés / 6.jpg");
        break;
    case "7":
        de.innerHTML = ("url(./images/dés / 7.jpg");
        break;
    case "8":
        de.innerHTML = ("url(./images/dés / 8.jpg");
        break;
    case "9":
        de.innerHTML = ("url(./images/dés / 9.jpg");
        break;
    default:
        console.log("pas de chiffre, c'est que le logiciel bug ")
}*/