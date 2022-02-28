//buid sourie
//definition des const
const lieu = document.querySelector(".lieu");
const Longitude = document.querySelector(".Longitude");
const Latitude = document.querySelector(".Latitude");
//build funtion arrow
lieu.addEventListener("mousemove", (e) => {
    //test de la funtion
    console.log("yes");

    //recupt valeur du déplacement et innertHtml de Lo et La
    console.log(e.x);
    Longitude.innerHTML = e.x;
    Latitude.innerHTML = e.y;
    lieu.style.left = e.x / window.innerWidth * 100 + "%";
    lieu.style.top = e.y / window.innerHeight * 100 + "%";
});