const contenedor = document.getElementById("contenedor");

const crearPaginas = (pagina, direction, autor) => {
    const div = document.createElement("DIV");
    const sombra = document.createElement("DIV");
    const img = document.createElement("IMG");

    div.classList.add("divImagen");
    sombra.classList.add(`sombra${direction}`);
    img.setAttribute("src", `${pagina}`);
    img.setAttribute("alt", `Imagen del comic de ${autor}`);

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

const paraPC = () => {
    const html = `
    <div class="instrucciones" style="text-align: center; display: flex; align-items: center; justify-content: center; height: 650px; color: white; border-top-left-radius:50px; border-bottom-left-radius:50px;">
		<div class="contenedorUno">
           <img class="logoEnComic" src="images/firma-pascitto.png" alt="logo de Pascitto">
           <h1>*Has click en las hojas para pasar de página</h1>
        </div>
	</div>
    `;
    return html;
}

const paraMoviles = () => {
    const html = `
    <div class="instrucciones" style="text-align: center; display: flex; align-items: center; justify-content: center; height: 650px; color: white; border-top-left-radius:50px; border-bottom-left-radius:50px;">
		<div class="contenedorUno">
           <img class="logoEnComic" src="images/firma-pascitto.png" alt="logo de Pascitto">
           <ul>
              <li>Haz click en las hojas para pasar de página</li>
              <li>Ajusta la pantalla a tu tamaño preferido</li>
              <li>Desliza la pantalla para visualizar el comic completo</li>
           </ul>
        </div>
	</div>
    `;
    return html;
}

const ponerPaginas = async author => {
    contenedor.innerHTML = (window.screen.width > 600) ? paraPC() : paraMoviles();

    const inform = await obtenerInfo();

    inform.comics.map(comic => {
        if(comic.nombre === author){
            for (let i = 1; i <= comic.paginas.length; i++) {
                crearPaginas(comic.paginas[i - 1], evaluarLR(i), author);
            }
        }
    });

    contenedor.innerHTML += `
    <div class="instrucciones" style="text-align: center; display: flex; align-items: center; justify-content: center; height: 650px; color: white; border-top-left-radius:50px; border-bottom-left-radius:50px;">
		<div class="contenedorUno">
           <img class="logoEnComic" src="images/firma-pascitto.png" alt="logo de Pascitto">
        </div>
	</div>
    `;

}

const obtenerInfo = async () => {
    return fetch("../baseDeDatos/comics.json")
        .then(res => res.json())
        .then(info => info);
}

const obtenerNombre = () => {
    let enlace = location.href;
    let ubicacion = enlace.indexOf("?");
    let hasta = enlace.indexOf("&");
    enlace = enlace.substring(ubicacion + 1, hasta);
    enlace = enlace.replace(/-/gi, " ");
    enlace = enlace.replace(/%C3%B1/gi, "ñ");
    console.log(enlace)
    ponerPaginas(enlace);
}

obtenerNombre();

