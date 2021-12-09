"use strict";

const contenedor = document.querySelector(".contenedor");

const crearPortadas = (nombre, titulo, portada) => {
    const a = document.createElement("A");
    const contenido = document.createElement("DIV");
    const divImagen = document.createElement("DIV");
    const imagen = document.createElement("IMG");
    const divTitulo = document.createElement("DIV");
    const span = document.createElement("SPAN");
    a.classList.add("comic");
    contenido.classList.add("contenido");
    divImagen.classList.add("divImagen");
    divTitulo.classList.add("titulo");
    a.setAttribute("href", `comic.html?${nombre.replace(/ /gi, "-")}&${titulo.replace(/ /gi, "-")}`);
    imagen.setAttribute("src", `${portada}`);
    imagen.setAttribute("alt", `Portada de ${titulo}`);
    span.textContent = titulo;
    divTitulo.appendChild(span);
    divImagen.appendChild(imagen);
    contenido.appendChild(divImagen);
    contenido.appendChild(divTitulo);
    a.appendChild(contenido);
    contenedor.appendChild(a);
}

const ponerPortadas = async () => {
    const datos = await consultar();
    datos.comics.map(autor => {
        crearPortadas(autor.nombre, autor.titulo, autor.paginas[0]);
    });
}

const imgFondo = document.querySelector(".fondo");

const efectoFodo = () => {
    window.addEventListener("scroll", () => {
        imgFondo.style.backgroundPositionY = `${(window.scrollY / 7) - 150}px`;
    });
}

const consultar = async () => {
    return fetch("../baseDeDatos/comics.json")
        .then(res => res.json())
        .then(info => info);
}

window.addEventListener("scroll", () => {
    if (window.scrollY > window.screen.height - 400) {
        document.querySelector(".flecha").style.display = "none";
    }
});

const input = document.getElementById("busqueda");
const f404 = document.querySelector(".f404");
const textoB = document.querySelector(".textoB");

var info2;

const hacerConsulta = async texto => {
    info2 = await consultar();
    let title = "";
    let conResult = false;
    info2.comics.map(com => {
        title = com.titulo.toLowerCase();
        title = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (title.includes(texto.toLowerCase())) {
            conResult = true;
            crearPortadas(com.nombre, com.titulo, com.paginas[0]);
        }
    });
    conResult === true ? f404.style.display = "none" : f404.style.display = "flex", ponerNombre(texto);
}

input.addEventListener("keypress", e => {
    if (e.key === "Enter" && input.value !== "") {
        contenedor.innerHTML = "";
        hacerConsulta(e.target.value);
    }
});

const ponerNombre = name => {
    textoB.textContent = `"${name}"`;
}

document.getElementById("recargar").addEventListener("click", () => {
    ponerPortadas();
    f404.style.display = "none";
});

efectoFodo();
ponerPortadas();