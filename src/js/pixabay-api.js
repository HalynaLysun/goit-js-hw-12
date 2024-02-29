import axios from 'axios';

export async function searchImages(value, page) {
  const URI = 'https://pixabay.com/api/';

  const response = await axios.get(URI, {
    params: {
      key: '42515030-f0931f035bd772c998b8c15c1',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });

  return response.data;
}
