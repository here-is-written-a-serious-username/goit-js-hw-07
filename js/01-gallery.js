import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

divGallery.addEventListener("click", onImgClick);

divGallery.insertAdjacentHTML("beforeend", createGalleryMarkup());


function createGalleryMarkup() {
    const markup = galleryItems.map(imgMarkupMaker).join("");

    function imgMarkupMaker({ preview, original, description }) {
        return (
            `<a class="gallery__link" href="${original}">
        <img
            class = "gallery__image"
            src= "${preview}"
            data-source = "${original}"
            alt= "${description}"
        />
    </a>`
        );
    }

    return markup;
}


function onImgClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    event.preventDefault();

    const instance = basicLightbox.create(`<img src= "${event.target.dataset.source}"/>`);

    instance.show(() => {
        document.addEventListener("keydown", onPress);

        function onPress(event) {
            if (event.code !== "Escape") {
                return;
            }
            instance.close( () => document.removeEventListener("keydown", onPress));
        }
    });

}