import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../src/img/bi_x-octagon.svg';

import { showImages } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const listEl = document.querySelector('.gallery');
const buttonLoaderMore = document.querySelector('.load');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  buttonLoaderMore.classList.add('is-hidden');

  listEl.innerHTML = '';

  const value = event.currentTarget.image_name.value;

  let page;

  if (value.length === 0 || value.trim() === '') {
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
    searchImages(value, 1)
      .then(data => {
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

        const images = data.hits;

        showImages(images, listEl);

        page = 1;

        buttonLoaderMore.classList.remove('is-hidden');
        buttonLoaderMore.addEventListener('click', event => {
          page += 1;
          searchImages(value, page);
        });
      })
      .catch(error => {
        iziToast.error({
          title: '',
          message: 'Error while loading images!',
          class: 'popup-message',
          theme: 'dark',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          iconUrl: cross,
          position: 'topRight',
          pauseOnHover: true,
          timeout: 3000,
        });
      })
      .finally(() => {
        loaderEl.classList.add('is-hidden');
        formEl.reset();
      });
  }
});
