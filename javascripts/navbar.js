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