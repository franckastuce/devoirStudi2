//build square calculation
//reccuperation du chiffre ou nombre dans la divavec eventclick
//calcule du cercle avec la formule
//cercle =2*r*3.14
//affichage dans la div

/*calculer.onclick = function chiffre() {

    let chiffre = document.getElementById("input");
    chiffre.addEventListener("input", () => {
        console.log(chiffre.value);
        let A = chiffre.value;
        let calcu = ((A * 2) + 3.14);
        console.log(chiffre.innerHTML);
    }

let result = document.getElementById("result");

result.addEventListener('clik', () => {
    console.log(document.chiffre.innertHTML)
})*/

//le sénario du dessus ne fonctionne parseFloat, je passe au suivant


//build square calculation

calculer.onclick = function cercle() {
    let a = prompt("rentrer le rayon du cercle");
    let calcu = ((a * 2) * 3.14);
    alert("le périmétre du carré est : " + calcu);
}
