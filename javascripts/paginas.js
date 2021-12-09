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

const ponerPaginas = async author => {
    contenedor.innerHTML = `
    <div class="instrucciones" style="text-align: center; display: flex; align-items: center; justify-content: center; height: 650px; color: white; border-top-left-radius:50px; border-bottom-left-radius:50px;">
		<div>
           <h1>*Has click en las hojas para pasar de página</h1>
           <h1>*Ajusta la pantalla a tu tamaño preferido</h1>
           <h1>*Desliza la pantalla para leer completemente el comic</h1>
        </div>
	</div>
    `;
    const inform = await obtenerInfo();

    inform.comics.map(comic => {
        if(comic.nombre === author){
            for (let i = 1; i <= comic.paginas.length; i++) {
                crearPaginas(comic.paginas[i - 1], evaluarLR(i), author);
            }
        }
    });

    contenedor.innerHTML += `
    <div style="text-align: center; display: flex; align-items: center; justify-content: center; height: 650px; color: white; border-top-right-radius:50px; border-bottom-right-radius:50px;">
		<h1>Has llegado al final</h1>
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

// const mq = matchMedia("(min-width:550px");

// mq.addEventListener("change", () => {
//     document.querySelector(".girar").style.display = "none";
//     location.reload();
// });

// const navBarr1 = document.getElementById("navBarr");
// const listaNav = document.getElementById("listaNav");
// const barras1 = document.querySelector(".barras");

// const esconderCel = () => {
//     window.addEventListener("scroll", () => {
//         if (window.screen.availWidth > 550) {
//             document.querySelector(".girar").style.display = "none";
//             navBarr1.style.top = "65px";
//             barras1.style.top = "15px";
//             barras1.style.zIndex = "500";
//         }
//     })
// }
