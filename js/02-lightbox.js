import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector ('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup (galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
        return  `
    
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
       </a>
    
        `
    }).join('');   
};

galleryList.addEventListener('click', openModalClick);

function openModalClick (evt) {
    evt.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
   
}
