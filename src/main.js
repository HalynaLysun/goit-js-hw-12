import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../src/img/bi_x-octagon.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

import { createMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const listEl = document.querySelector('.gallery');
const buttonLoaderMore = document.querySelector('.load');
const loaderMore = document.querySelector('.down');

let page = 1;

let value;

formEl.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  listEl.innerHTML = '';

  value = event.currentTarget.image_name.value;

  if (value.length === 0 || value.trim() === '') {
    buttonLoaderMore.classList.add('is-hidden');
    iziToast.error({
      title: '',
      message: 'Could you, please choose some type of photos',
      class: 'popup-message',
      theme: 'dark',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      iconUrl: cross,
      position: 'topRight',
      pauseOnHover: true,
      timeout: 3000,
    });
  } else {
    loaderEl.classList.remove('is-hidden');
    async function fetchData() {
      try {
        const data = await searchImages(value, page);
        if (data.hits.length === 0) {
          buttonLoaderMore.classList.add('is-hidden');
          iziToast.error({
            title: '',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            class: 'popup-message',
            theme: 'dark',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
            iconUrl: cross,
            position: 'topRight',
            pauseOnHover: true,
            timeout: 3000,
          });
        }
        console.log(data);
        return data;
      } catch (error) {
        buttonLoaderMore.classList.add('is-hidden');
        iziToast.error({
          title: '',
          message: `${error.message}`,
          class: 'popup-message',
          theme: 'dark',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          iconUrl: cross,
          position: 'topRight',
          pauseOnHover: true,
          timeout: 3000,
        });
      } finally {
        loaderEl.classList.add('is-hidden');
        formEl.reset();
      }
    }
    fetchData().then(data => {
      console.log(data);
      listEl.innerHTML = createMarkup(data.hits);

      lightbox.refresh();
      if (data.hits.length >= 15) {
        buttonLoaderMore.classList.remove('is-hidden');
      }
    });
  }
});

buttonLoaderMore.addEventListener('click', loadMoreImg);

async function loadMoreImg() {
  try {
    buttonLoaderMore.classList.add('is-hidden');
    loaderMore.classList.remove('is-hidden');
    page += 1;
    const res = await searchImages(value, page);

    listEl.insertAdjacentHTML('beforeend', createMarkup(res.hits));
    lightbox.refresh();
    buttonLoaderMore.classList.remove('is-hidden');
    loaderMore.scrollIntoView();
    loaderMore.classList.add('is-hidden');

    if (res.hits.length < 15) {
      buttonLoaderMore.classList.add('is-hidden');
      loaderMore.classList.add('is-hidden');
      iziToast.error({
        title: '',
        message: 'Sorry! This is all images!',
        class: 'popup-message',
        theme: 'dark',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        iconUrl: cross,
        position: 'topRight',
        pauseOnHover: true,
        timeout: 3000,
      });
    }
  } catch (error) {
    buttonLoaderMore.classList.add('is-hidden');
    iziToast.error({
      title: '',
      message: `${error.message}`,
      class: 'popup-message',
      theme: 'dark',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      iconUrl: cross,
      position: 'topRight',
      pauseOnHover: true,
      timeout: 3000,
    });
  }
}
