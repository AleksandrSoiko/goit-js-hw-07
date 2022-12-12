import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

galleryContainerRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const closeModalWindow = (event) => {
    if (event.code === "Escape" && modalBox.visible() === true) {
      modalBox.close();
      console.log("hhhh");
    }
  };
  const openModalWindow = () => {
    modalBox.show();
  };

  const modalBox = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => document.addEventListener("keydown", closeModalWindow),
      onClose: () => document.removeEventListener("keydown", closeModalWindow),
    }
  );

  openModalWindow();
});
