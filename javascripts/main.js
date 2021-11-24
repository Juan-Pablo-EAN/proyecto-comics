"use strict";

const contenedor = document.querySelector(".contenedor");
const autores = [
    {
        nombre: "1",
        comic: "Titulo Comic 1"
    },
    {
        nombre: "2",
        comic: "Titulo Comic 2"
    },
    {
        nombre: "3",
        comic: "Titulo Comic 3"
    },
    {
        nombre: "4",
        comic: "Titulo Comic 4"
    },
    {
        nombre: "5",
        comic: "Titulo Comic 5"
    }, {
        nombre: "6",
        comic: "Titulo Comic 6"
    }
];

const crearPortadas = (nombre, titulo) => {
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
    a.setAttribute("href", `comic.html?${nombre}`);
    imagen.setAttribute("src", `portadas/portada${nombre}.jpg`);
    imagen.setAttribute("alt", `Portada de ${titulo}`);
    span.textContent = titulo;
    divTitulo.appendChild(span);
    divImagen.appendChild(imagen);
    contenido.appendChild(divImagen);
    contenido.appendChild(divTitulo);
    a.appendChild(contenido);
    contenedor.appendChild(a);
}

const ponerPortadas = () => {
    autores.map(autor => {
        crearPortadas(autor.nombre, autor.comic);
    });
}

const imgFondo = document.querySelector(".fondo");

const efectoFodo = () => {
    window.addEventListener("scroll", () => {
        imgFondo.style.backgroundPositionY = `${(window.scrollY / 7) - 150}px`;
    });
}

window.addEventListener("scroll", () => {
    if(window.scrollY > window.screen.height - 400){
        document.querySelector(".flecha").style.display = "none";
    }
});

efectoFodo();
ponerPortadas();