const contenedor = document.getElementById("contenedor");

const crearPaginas = (n, direction, autor) => {
    const div = document.createElement("DIV");
    const sombra = document.createElement("DIV");
    const img = document.createElement("IMG");

    div.classList.add("divImagen");
    sombra.classList.add(`sombra${direction}`);
    img.setAttribute("src", `comic${autor}/page${n}.jpg`);
    img.setAttribute("alt", `Imagen del comic`);

    div.appendChild(sombra);
    div.appendChild(img);

    contenedor.appendChild(div);
}

const evaluarLR = d => {
    if (d % 2 === 0) {
        return "R"
    } else {
        return "L";
    }
}
 
const ponerPaginas = nombre => {
    contenedor.innerHTML = `
    <div style="text-align: center; display: flex; align-items: center; justify-content: center; height: 100%; color: white;">
		<h1>Has click en los botones para pasar de página</h1>
	</div>
    `;

    for (let i = 1; i <= 6; i++) {
        crearPaginas(i, evaluarLR(i), nombre);
    }

    contenedor.innerHTML += `
    <div style="text-align: center; display: flex; align-items: center; justify-content: center; height: 100%; color: white;">
		<h1>Has llegado al final</h1>
	</div>
    `;

}

const obtenerNombre = () => {
    let enlace = location.href;
    let ubicacion = enlace.indexOf("?");
    enlace = enlace.substring(ubicacion + 1, enlace.length);
    console.log(enlace);
    // ponerPaginas(enlace);
    ponerPaginas("Chevy")
}

obtenerNombre();

const mq = matchMedia("(min-width:550px");

mq.addEventListener("change", () => {
    document.querySelector(".girar").style.display = "none";
});

const esconderGif = () => {
    window.addEventListener("scroll", () => {
        if(window.screen.availWidth < 550){
            document.querySelector(".girar").style.display = "block";
        } else {
            document.querySelector(".girar").style.display = "none";
        }
    });
}

window.addEventListener("load", () => {
    esconderGif();
    if(window.screen.availWidth < 600){
        const navBarr = document.getElementById("navBarr");
        const listaNav = document.getElementById("listaNav");
        const barras = document.querySelector(".barras");

        barras.style.display = "flex";
        barras.style.fontSize = "50px";
        barras.style.top = "20px";
        navBarr.style.transform = "scale(0)";
        navBarr.style.position = "absolute";
        navBarr.style.top = "45px";
        navBarr.style.right = "15px";
        navBarr.style.width = "90%";
        navBarr.style.height = "auto";
        navBarr.style.padding = "15px 0 15px 0";
        navBarr.style.borderRadius = "7px";
        navBarr.style.transition = "all 0.2s ease";
        listaNav.style.height = "auto";
        listaNav.style.gridTemplateColumns = "1fr";
        listaNav.style.gridTemplateRows = "repeat(4, 20px)";
        listaNav.style.gridGap = "40px";
        listaNav.style.fontSize = "30px";
        listaNav.style.padding = "20px"
        document.querySelector(".contenedorF").style.fontSize = "x-large";
        document.querySelector(".seccion").style.marginTop = "60px";
        let visible = false;
        barras.addEventListener("click", () => {
            if(visible){
                navBarr.style.transform = "scale(0)";
                barras.style.color = "white";
                visible = false;
            } else {
                navBarr.style.transform = "scale(1)";
                barras.style.color = "#706bb9";
                visible = true;
            }
        });
    } 
});