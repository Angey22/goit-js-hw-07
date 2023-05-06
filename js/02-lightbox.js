import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const MakeGalleryMarkup = items => {
    return items.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
    ).join('');
}

galleryListEl.innerHTML = MakeGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery__link', { 
    sourceAttr: 'href',
    captionsData: 'alt',
    captionDelay: 250,
 });

