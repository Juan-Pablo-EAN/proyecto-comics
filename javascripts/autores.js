"use strict";

const contenedor = document.querySelector(".contenedor");

const crearHtml = async () => {
    const datos = await consulta();
    console.log(datos.autores);
    datos.autores.map(autor => {
        const divAutor = document.createElement("DIV");
        const divImagen = document.createElement("DIV");
        const imagen = document.createElement("IMG");
        const divDatos = document.createElement("DIV");
        const ul = document.createElement("UL");
        const liName = document.createElement("LI");
        const liAlias = document.createElement("LI");
        const liInfo = document.createElement("LI");
        divAutor.classList.add("autor");
        divImagen.classList.add("imagen");
        divDatos.classList.add("datos");
        imagen.setAttribute("src", `${autor.imagen}`);
        imagen.setAttribute("alt", `Imagen de ${autor.nombre}`);
        imagen.setAttribute("title", `${autor.nombre}`);
        divImagen.appendChild(imagen);
        liName.innerHTML = `<i class="${iconoNombre()}"></i> ${autor.nombre}`;
        autor.alias !== "" ? liAlias.innerHTML = `<i class="${iconoAlias()}"></i> Seudónimo: ${autor.alias}`
            : liAlias.style.display = "none";
        liInfo.innerHTML = `<i class="${iconoInfo()}"></i> ${autor.info}`;
        ul.appendChild(liName);
        ul.appendChild(liAlias);
        ul.appendChild(liInfo);
        autor.contacto.map(contact => {
            const li = document.createElement("LI");
            const a = document.createElement("A");
            switch (contact.tipo) {
                case "Correo":
                    a.setAttribute("href", `mailto:${contact.correo}`);
                    a.innerHTML = `<i class="${iconoMail()}"></i> ${contact.correo}`;
                    li.appendChild(a);
                    ul.appendChild(li);
                    break;
                case "Instagram":
                    a.setAttribute("href", `${contact.enlace}`);
                    a.setAttribute("target", "_blank");
                    a.innerHTML = `<i class="${iconoInsta()}"></i> ${contact.instagram}`;
                    li.appendChild(a);
                    ul.appendChild(li);
                    break;
                case "TikTok":
                    a.setAttribute("href", `${contact.enlace}`);
                    a.setAttribute("target", "_blank");
                    a.innerHTML = `<i class="${iconoWeb()}"></i> ${contact.tiktok}`;
                    li.appendChild(a);
                    ul.appendChild(li);
                    break;
                case "Facebook":
                    a.setAttribute("href", `${contact.enlace}`);
                    a.setAttribute("target", "_blank");
                    a.innerHTML = `<i class="${iconoFB()}"></i> ${contact.facebook}`;
                    li.appendChild(a);
                    ul.appendChild(li);
                    break;
                case "Sitio web":
                    a.setAttribute("href", `${contact.enlace}`);
                    a.setAttribute("target", "_blank");
                    a.innerHTML = `<i class="${iconoWeb()}"></i> ${contact.web}`;
                    li.appendChild(a);
                    ul.appendChild(li);
                    break;
                case "Teléfono":
                    a.setAttribute("href", `tel:${contact.telefono}`);
                    a.innerHTML = `<i class="${iconoTel()}"></i> ${contact.telefono}`;
                    li.appendChild(a);
                    ul.appendChild(li);
                    break;
            }
        });
        divDatos.appendChild(ul);
        divAutor.appendChild(divImagen);
        divAutor.appendChild(divDatos);
        contenedor.appendChild(divAutor);
    });
}

const consulta = async () => {
    return fetch("https://pascitto-comics.azurewebsites.net/data/getAuthors")
        .then(res => res.json())
        .then(info => info);
}

const iconoNombre = () => {
    return "fas fa-user";
}

const iconoAlias = () => {
    return "fas fa-mask";
}

const iconoInfo = () => {
    return "fas fa-info-circle";
}

const iconoMail = () => {
    return "fas fa-envelope";
}

const iconoInsta = () => {
    return "fab fa-instagram";
}

const iconoFB = () => {
    return "fab fa-facebook";
}

const iconoTel = () => {
    return "fas fa-phone-alt";
}

const iconoWeb = () => {
    return "fas fa-globe-americas";
}

crearHtml();