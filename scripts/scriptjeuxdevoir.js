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

//function new game
N.addEventListener("click", () => {
    alert("Une nouvelle partie va commencer, appuyer sur: 'OK'")
    round1.innerHTML = "0";
    round2.innerHTML = "0";
    de.innerHTML = "0";
    global.innerHTML = "0";
    global2.innerHTML = "0";
})

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
});

//listening button p1 save
reset.addEventListener("click", () => {
    //console.log("reset")
    global.innerHTML = Number(round1.innerHTML) + Number(global.innerHTML);
    if (Number(global.innerHTML) >= 100) {
        alert(`GENIAL JOUEUR 1, tu as gagné la partie avec ${global.innerHTML} points, c'est fini`);
    }
    round1.innerHTML = 0;

    //mettre la methode toggle et voir a changer les resultats.
});

//listening button p2 to throw
boutton2.addEventListener("click", () => {
    //console.log("yes");
    de.innerHTML = parseInt(Math.floor(Math.random() * 10));
    console.log(Number(de.innerHTML));
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
    }
    round2.innerHTML = 0;
});