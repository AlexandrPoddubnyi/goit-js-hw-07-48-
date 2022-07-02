import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallerylist = document.querySelector('.gallery');
const galleryItem = createImageCardset(galleryItems);

gallerylist.insertAdjacentHTML('beforeend', galleryItem);

function createImageCardset(image) {
  return image.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join('')
}

gallerylist.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  instance.show(window.addEventListener('keydown', onEscapePress));
  
  function onEscapePress(ev) {
  if (ev.code === 'Escape') {
    instance.close(window.removeEventListener('keydown', onEscapePress));
  }
}
}





// function onImageClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return
//   }
//   const parameters = {
//     onClose: (instance) => {
//       document.removeEventListener('keydown', onEscapePress)
//     }
//   };
  
//   instance = basicLightbox.create(`<img src=${event.target.dataset.source} width="800" height="600">`, parameters)
//   instance.show(document.addEventListener('keydown', onEscapePress));
// }

// function onEscapePress(ev) {
//   if (ev.key === 'Escape') {
//     instance.close(document.removeEventListener('keydown', onEscapePress));
//   }
// }






// function onImageClick (event) {
//   const originalImage = getOriginalImage(event);

//   const instance = basicLightbox.create(
//     `<img src=${originalImage} width = "800" height ="600"/>`);
//   instance.show(window.addEventListener('keydown', isEscape));


//   function isEscape(evt) {
//     if (evt.code === 'Escape') {
//       instance.close(window.removeEventListener('keydown', isEscape))
//     };
//   }
// }

// function getOriginalImage (event) {
//   if (event.target.nodeName !== 'IMG') {
//      return
//   }
//   event.preventDefault();

//   const currentImage = event.target;
//   const currentImageOriginal = galleryItems.find(image => image.preview === currentImage.src).original;
//   return currentImageOriginal;
// }