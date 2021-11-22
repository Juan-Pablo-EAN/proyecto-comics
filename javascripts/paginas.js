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