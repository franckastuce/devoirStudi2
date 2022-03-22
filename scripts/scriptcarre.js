//build square calculation

calculer.onclick = function carre() {
    let a = prompt("rentrer le chiffre que vous avez");
    let calcu = a * 4;
    alert("le périmétre du carré est : " + calcu);
}
/*
// the function in j query
$(function ready() {
    console.log("ok jquery");
    $("#calculer").on("click", function () {
        let a = prompt("rentrer le chiffre que vous avez");
        let calcu = a * 4;
        alert("le périmétre du carré est : " + calcu);
    });

});*/