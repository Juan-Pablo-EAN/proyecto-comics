"use strict";

const consultar = async () => {
    return fetch("../baseDeDatos/proximos.json")
        .then(res => res.json())
        .then(datos => datos);
}

const contenedor = document.querySelector(".contenedor");

const crearPortadas = (titulo, portada, sinopsis) => {
    const comic = document.createElement("DIV");
    const contenido = document.createElement("DIV");
    const divImagen = document.createElement("DIV");
    const imagen = document.createElement("IMG");
    const divTitulo = document.createElement("DIV");
    const span = document.createElement("SPAN");
    comic.classList.add("comic");
    contenido.classList.add("contenido");
    divImagen.classList.add("divImagen");
    divTitulo.classList.add("titulo");
    imagen.setAttribute("src", `${portada}`);
    imagen.setAttribute("alt", `Portada de ${titulo}`);
    span.textContent = titulo;

    contenido.addEventListener("mouseenter", () => {
        divImagen.style.background = "rgba(255, 255, 255, 0.418)";
        divImagen.style.transform = "scaleX(-1)";
        divImagen.style.transform = "perspective(800px) rotateY(-180deg) translateX(0px)";
        setTimeout(() => {
            divImagen.innerHTML = `<span>${sinopsis}</span>`;
        }, 300);
    });
    contenido.addEventListener("mouseleave", () => {
        divImagen.style.transform = "none";
        setTimeout(() => {
            divImagen.textContent = "";
            divImagen.appendChild(imagen);
        }, 300);
    });

    divTitulo.appendChild(span);
    divImagen.appendChild(imagen);
    contenido.appendChild(divImagen);
    contenido.appendChild(divTitulo);
    comic.appendChild(contenido);
    contenedor.appendChild(comic);
}

const ponerPortadas = async () => {
    const info = await consultar();
    if (info.proximos.length === 0) {
        document.querySelector(".textoT").textContent = "No hay comics próximos a ser publicados";
    } else {
        document.querySelector(".textoT").textContent = "Próximamente en Páscitto Comics...";
        info.proximos.map(p => {
            crearPortadas(p.titulo, p.imagen, p.sinopsis);
        });
    }
}

ponerPortadas();