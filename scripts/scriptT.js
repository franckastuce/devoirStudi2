//calcule for triangle rectangle
triangleRectangle.onclick = function triangleRectangle() {
    let B = prompt("rentrer la base du triangle rectangle");
    let H = prompt("rentrer la hauteur du triangle rectangle");
    let calcu = (B * H / 2);
    console.log(calcu);
}

triangleIsocele.onclick = function triangleIsocele() {
    let a = prompt("rentrer le coté gauche ou droite");
    let b = prompt("rentrer la base du triangle");
    let calcu = ((a + a) + b);
    console.log(calcu);
}

