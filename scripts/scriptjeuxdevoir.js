//random number for player 1
let round1 = document.getElementById("round1");//pour le joueur 1
let round2 = document.getElementById("round2");//pour le joueur 2
let de = document.getElementById("de");
const boutton = document.getElementById("roll");
const reset = document.getElementById("reset");

boutton.addEventListener("click", () => {
    //console.log("yes");
    de.innerHTML = parseInt(Math.floor(Math.random() * 10));
    console.log(Number(de.innerHTML));
    round1.innerHTML = Number(de.innerHTML) + Number(round1.innerHTML);
    //function number 1 reset
    if (de.innerHTML === "1") {
        alert("AH AH, tu as fait '1', ton compteur reviens a ZERO, passe ton tour")
        return round1.innerHTML = "0";
    }
});

// reset button
reset.addEventListener("click", () => {
    return round1.innerHTML = "0";
});

//change player
/*
rentrer score dans curent
reset round
changer joueur
*/
