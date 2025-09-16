"use strict";

const getData = async () => {
  return fetch("https://pascittocomicsapi.azurewebsites.net/data/getChestOfMemories")
    .then((res) => res.json())
    .then((datos) => datos);
};

const createCardsComics = (comic) => {
  comic.map((comic) => {
    createOneCard(comic);
  });
};

const createOneCard = (data) => {
  const cardsContainer = document.querySelector(".cardContainer");
  const card = document.createElement("DIV");
  const divImage = document.createElement("DIV");
  const image = document.createElement("IMG");
  const divText = document.createElement("DIV");
  const divTiltle = document.createElement("DIV");
  const spanTitle = document.createElement("SPAN");
  const divAuthor = document.createElement("DIV");
  const spanAutor = document.createElement("SPAN");

  card.classList.add("card");
  divImage.classList.add("divImage");
  divText.classList.add("divText");
  spanTitle.classList.add("title");
  spanAutor.classList.add("author");

  image.setAttribute("src", data.image);
  image.setAttribute("alt", `Portada de ${data.title}`);
  spanTitle.textContent = data.title;
  spanAutor.textContent = data.author;

  divImage.appendChild(image);
  divTiltle.appendChild(spanTitle);
  divAuthor.appendChild(spanAutor);
  divText.appendChild(divTiltle);
  divText.appendChild(divAuthor);

  card.appendChild(divImage);
  card.appendChild(divText);

  cardsContainer.appendChild(card);
};

const SetCards = async () => {
  const info = await getData();
  createCardsComics(info.lastCommics);
};

SetCards();
