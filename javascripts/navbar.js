const navBarr = document.getElementById("navBarr");
const barras = document.querySelector(".barras");

barras.addEventListener("click", () => {
    if(navBarr.className == "visible"){
        navBarr.className = "invisible";
        barras.style.color = "white";
    } else {
        navBarr.className = "visible";
        barras.style.color = "#706bb9";
    }
});

let alto = navBarr.offsetTop;
window.addEventListener("scroll", () => {
    if(window.scrollY >= alto && window.screen.availWidth > 600){
        navBarr.style.position = "fixed";
        navBarr.style.top = "0";
        navBarr.style.left = "0";
        navBarr.style.width = "97.8%";
        document.querySelector("section").style.marginTop = "50px";
    } else {
        navBarr.style.position = "relative";
        navBarr.style.width = "auto";
        document.querySelector("section").style.marginTop = "0px";
    }
});