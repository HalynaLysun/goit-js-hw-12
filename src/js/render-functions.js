export function createMarkup(images) {
  return images
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
}
