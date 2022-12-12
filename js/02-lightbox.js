import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
const galleryContainerRef = document.querySelector(".gallery");
createItemOfGallery(galleryItems);

function createItemOfGallery(array) {
  const galleryItemsRef = array
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
  galleryContainerRef.innerHTML = galleryItemsRef;
}

const lightbox = new SimpleLightbox(".gallery a", {
  scrollZoom: false,
});

function addCaptionToImage() {
  lightbox.options.captionsData = "alt";
  lightbox.options.captionDelay = 250;
}

addCaptionToImage();

// я запретил скролл потому что в хроме при увеличения изображения
//  скролом появляеться много ошибок связанных с превентдефолт
// simple-lightbox.min.js:1 Unable to preventDefault inside passive event listener invocation.
