import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const imegesMarkup = createImegesMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", imegesMarkup);

galleryContainerEl.addEventListener("click", onImageClick);

function createImegesMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
  </div>`
    )
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}"/>
    `);

  galleryContainerEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape" && basicLightbox.visible()) {
      instance.close();
    }
  });

  instance.show();
}
