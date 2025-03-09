export function renderGallery(hits, galleryRef) {
  const markup = hits.map(hit => {
    return `
        <li class="photo-card">
        <a href="${hit.largeImageURL}">
        <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
        </a>
        <div class="stats">
          <p class="stats-item">
            <i class="material-icons">likes</i>
            ${hit.likes}    
            </p>
          <p class="stats-item">
            <i class="material-icons">views</i>
            ${hit.views}    
            </p>
                      <p class="stats-item">
            <i class="material-icons">comments</i>
            ${hit.comments}    
            </p>
                      <p class="stats-item">
            <i class="material-icons">downloads</i>
            ${hit.downloads}    
            </p>
        </div>
        </li>
        `;
  });
  galleryRef.insertAdjacentHTML('beforeend', markup.join(''));
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

// export function onLoadMore() {

// }
