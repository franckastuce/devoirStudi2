//random number for player 1
let round1 = document.getElementById("round1");//pour le joueur 1
let round2 = document.getElementById("round2");//pour le joueur 2
let de = document.getElementById("de");
const boutton = document.getElementById("roll");
const boutton2 = document.getElementById("roll2");
const reset = document.getElementById("reset");
const reset2 = document.getElementById("reset2");
let global = document.getElementById("scoreCurent1");
let global2 = document.getElementById("scoreCurent2");

boutton.addEventListener("click", () => {
    //console.log("yes");
    de.innerHTML = parseInt(Math.floor(Math.random() * 10));
    //console.log(Number(de.innerHTML));
    round1.innerHTML = Number(de.innerHTML) + Number(round1.innerHTML);
    //function number 1 reset
    if (de.innerHTML === "1") {
        alert("AH AH, tu as fait '1', ton compteur reviens a ZERO, passe ton tour")
        return round1.innerHTML = "0";
    }
});
reset.addEventListener("click", () => {
    //console.log("reset")
    //console.log(Number(global.innerHTML));
    global.innerHTML = Number(round1.innerHTML) + Number(global.innerHTML);
    if (Number(global.innerHTML) >= 100) {
        alert(`GENIAL PLAYER 1, tu as gagné la partie avec ${global.innerHTML} points, c'est fini`)
    }
    round.innerHTML = 0;

    //mettre la methode toggle et voir a changer les resultats.

    //global.innerHTML = Number(round.innerHTML);
});
boutton2.addEventListener("click", () => {
    //console.log("yes");
    de.innerHTML = parseInt(Math.floor(Math.random() * 10));
    console.log(Number(de.innerHTML));
    round2.innerHTML = Number(de.innerHTML) + Number(round2.innerHTML);
    //function number 1 reset
    if (de.innerHTML === "1") {
        alert("AH AH, tu as fait '1', ton compteur reviens a ZERO, passe ton tour")
        return round2.innerHTML = "0";
    }
});
reset2.addEventListener("click", () => {
    //console.log("reset")
    //console.log(Number(global.innerHTML));
    global2.innerHTML = Number(round2.innerHTML) + Number(global2.innerHTML);
    if (Number(global2.innerHTML) >= 100) {
        alert(`GENIAL PLAYER 2, tu as gagné la partie avec ${global2.innerHTML} points, c'est fini`)
    }
    round2.innerHTML = 0;

    //mettre la methode toggle et voir a changer les resultats.

    //global.innerHTML = Number(round.innerHTML);
});