import fetchData from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  searchBtn: document.querySelector('.btn-primary'),
  onLoadMore: document.querySelector('.btn-load-more'),
  loaderEl: document.querySelector('.loader-span'),
};

let page = 1;
refs.onLoadMore.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
refs.onLoadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  const form = refs.searchForm;
  const input = form.elements.query;
  if (input.value === '') {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  refs.searchBtn.disabled = true;
  refs.loaderEl.classList.add('loader');
  clearGallery(refs.gallery);
  refs.onLoadMore.classList.remove('is-hidden');

  fetchGallery(input.value, page);
}

function onLoadMore() {
  const form = refs.searchForm;
  const input = form.elements.query;
  refs.loaderEl.classList.add('loader');

  fetchGallery(input.value, page);
}

async function fetchGallery(searchQuery, page) {
  try {
    const data = await fetchData(searchQuery, page);
    renderGallery(data.hits, refs.gallery);
    page += 1;
    refs.loaderEl.classList.remove('loader');
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 500,
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } finally {
    refs.searchBtn.disabled = false;
  }
}
