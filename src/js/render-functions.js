import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function showImages(images, gallery) {
  gallery.innerHTML = images
    .map(
      img =>
        `<li>
                <a href="${img.largeImageURL}"><img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}"></a>
                <ul class="gallery-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${img.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${img.views}</p>
                    </li>                    
                    <li>
                        <h2>Comments</h2>
                        <p>${img.comments}</p>
                    </li>                    
                    <li>
                        <h2>Downloads</h2>
                        <p>${img.downloads}</p>
                    </li>
                </ul>
                </li>`
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}
