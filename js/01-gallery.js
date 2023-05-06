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
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
    ).join('');
}

galleryListEl.innerHTML = MakeGalleryMarkup(galleryItems);

galleryListEl.addEventListener('click', onGallaryImgClicked);

function onGallaryImgClicked(e) {
    if (e.target.nodeName !== 'IMG') return;

    e.preventDefault();

    const modalWindow = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`, {
            onShow: () => { 
                window.addEventListener('keydown', closeModal);
            },
            onClose: () => {
                window.removeEventListener('keydown', closeModal);
            },
    });
    
    modalWindow.show();

    function closeModal({code}) { 
        if (code === 'Escape') modalWindow.close();
    }
}
