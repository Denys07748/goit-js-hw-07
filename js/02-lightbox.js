import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const imegesMarkup = createImegesMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", imegesMarkup);

function createImegesMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
  <li>
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
