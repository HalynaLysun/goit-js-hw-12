import axios from 'axios';

export async function searchImages(value) {
  const URI = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(URI, {
      params: {
        key: '42515030-f0931f035bd772c998b8c15c1',
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    if (response.status !== 200) {
      throw new Error('Error!');
    }
    return response.data;
  } catch {
    throw new Error('Error!');
  }
}
