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
    <div style="text-align: center; display: flex; align-items: center; justify-content: center; height: 650px; color: white; border-top-left-radius:50px; border-bottom-left-radius:50px;">
		<h1>Has click en los botones para pasar de página</h1>
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

const mq = matchMedia("(min-width:550px");

mq.addEventListener("change", () => {
    document.querySelector(".girar").style.display = "none";
    location.reload();
});

const navBarr1 = document.getElementById("navBarr");
const listaNav = document.getElementById("listaNav");
const barras1 = document.querySelector(".barras");

const esconderCel = () => {
    window.addEventListener("scroll", () => {
        if (window.screen.availWidth > 550) {
            document.querySelector(".girar").style.display = "none";
            navBarr1.style.top = "65px";
            barras1.style.top = "15px";
            barras1.style.zIndex = "500";
        }
    })
}

// window.addEventListener("load", () => {
//     if (window.screen.availWidth < 550) {
//         document.querySelector(".girar").style.display = "block";
//     } else {
//         document.querySelector(".girar").style.display = "none";
//     }
//     esconderCel();
//     if (window.screen.availWidth < 600) {
//         barras1.style.display = "flex";
//         navBarr1.style.transform = "scale(0)";
//         navBarr1.style.position = "absolute";
//         navBarr1.style.top = "45px";
//         navBarr1.style.right = "15px";
//         navBarr1.style.width = "90%";
//         navBarr1.style.height = "auto";
//         navBarr1.style.padding = "15px 0 15px 0";
//         navBarr1.style.borderRadius = "7px";
//         navBarr1.style.transition = "all 0.2s ease";
//         listaNav.style.height = "auto";
//         listaNav.style.gridTemplateColumns = "1fr";
//         listaNav.style.gridTemplateRows = "repeat(4, 20px)";
//         listaNav.style.gridGap = "40px";
//         listaNav.style.fontSize = "100px";
//         listaNav.style.padding = "20px";
//         barras1.style.fontSize = "50px";
//         barras1.style.top = "50px";
//         navBarr1.style.top = "100px";
//         document.querySelector(".contenedorF").style.fontSize = "x-large";
//         for (let i = 0; i < listaNav.childElementCount; i++) {
//             listaNav.children[i].children[0].style.fontSize = "40px"
//         }
//         document.querySelector(".contenedorF").style.fontSize = "xx-large";

//         let visible = false;
//         barras1.addEventListener("click", () => {
//             if (visible) {
//                 navBarr1.style.transform = "scale(0)";
//                 barras1.style.color = "white";
//                 visible = false;
//             } else {
//                 navBarr1.style.transform = "scale(1)";
//                 barras1.style.color = "#706bb9";
//                 visible = true;
//             }
//         });
//     }
// });