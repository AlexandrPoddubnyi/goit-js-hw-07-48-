import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryItem = createGalleryItem(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryItem);

function createGalleryItem(image) {
  return image.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`
  }).join('')
}

var gallery = new SimpleLightbox('.gallery a', {
  captionClass: 'galley__item',
  captionsData: 'alt',
  captionDelay: 250
})
