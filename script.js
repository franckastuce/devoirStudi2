//build day Night
function themeNuitJour() {
    //test funtion
    console.log('hello');

    const date = new Date()
    const hour = date.getHours()
    // entre 9 et 17h, day
    if (hour > 9 || hour < 17) {
        document.documentElement.style.setProperty('--ecriture', '#333')
        document.documentElement.style.setProperty('--fond', '#f1f1f1')
    } else {
        document.documentElement.style.setProperty('--ecriture', '#f1f1f1')
        document.documentElement.style.setProperty('--fond', '#333')
    }
}
themeNuitJour();

//-----------------------------
//carre
//build square calculation
const result = document.querySelector('mousEvent');

document.getElementById('input').addEventListener("input", (e) => {
    result.innertHTML = `
    <div id="resultR">
    <span class="result"${result}>m²</span>
    `;
})

//-----------------------------
//triangle

let base = prompt("chiffre de BC");
let hauteut = prompt("chiffre de AH");

alert(base * hauteur / 2);