//random number
let round1 = document.getElementById("round1");
let de = document.getElementById("de");
const boutton = document.getElementById("roll");
const reset = document.getElementById("reset");

boutton.addEventListener("click", () => {
    console.log("yes");
    de.innerHTML = Math.floor(Math.random() * 10);
    round1.innerHTML = de.innerHTML;

    if (de.innerHTML === "1") {
        alert("AH AH, tu as fait '1', ton compteur reviens a ZERO, passe ton tour")
        return round1.innerHTML = "0";
    }
});
// reset button
reset.addEventListener("click", () => {
    return round1.innerHTML = "0";
})

