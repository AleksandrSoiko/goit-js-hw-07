import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryContainerRef = document.querySelector(".gallery");
createItemOfGallery(galleryItems, galleryContainerRef);

function createItemOfGallery(array, elementRef) {
  const galleryItemsRef = array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    })
    .join("");
  elementRef.innerHTML = galleryItemsRef;
}
// Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContainerRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modalBox = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  openModalWindow(modalBox);
  closeModalWindow(modalBox);
});

function closeModalWindow(element) {
  const addEventFunction = (event) => {
    if (event.code === "Escape" && element.visible() === true) {
      element.close(() =>
        document.removeEventListener("keydown", addEventFunction)
      );
    }
  };
  document.addEventListener("keydown", addEventFunction);
}

function openModalWindow(element) {
  element.show();
}
