//build day Night
function themeNuitJour() {
    //test funtion
    console.log('hello');

    const date = new Date()
    const hour = date.getHours()
    // entre 9 et 17h, day
    if (hour < 9 || hour > 17) {
        document.documentElement.style.setProperty('--ecriture', '#333')
        document.documentElement.style.setProperty('--fond', '#f1f1f1')
    } else {
        document.documentElement.style.setProperty('--ecriture', '#f1f1f1')
        document.documentElement.style.setProperty('--fond', '#333')
    }
}
themeNuitJour();

//****************************

//this is for buttons

/*la ligne du dessous ne fonctionne pas, j'ai du me rabbatre sur les onclik dans le html si vous avez une solution, je serai interreser de comprendre.
         document.querySelector("#light").addEventListener("mouseover", lumiere);*/

function lumiere() {
    //test if it works
    console.log("mode jour");
    //setting up the function
    let light = document.querySelector("#mode");
    light.style.color = "black";
    light.style.background = "white";
    dark.style.transition = "0.8s";
}

//same but dark
function sombre() {
    console.log("mode nuit");
    let dark = document.querySelector("#mode");
    dark.style.color = "blue";
    dark.style.background = "black";
    dark.style.collapse = "black";
    dark.style.transition = "0.8s";
}