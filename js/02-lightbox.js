import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

// divGallery.addEventListener("click", onImgClick);

divGallery.insertAdjacentHTML("beforeend", createGalleryMarkup());


function createGalleryMarkup() {
    const markup = galleryItems.map(imgMarkupMaker).join("");

    function imgMarkupMaker({ preview, original, description }) {
        return (
            `<li><a class="gallery__item" href="${original}">
                <img 
                class="gallery__image" 
                src= "${preview}"
                alt= "${description}"
                />
            </a></li>`
        );
    }

    return markup;
}

new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
 });