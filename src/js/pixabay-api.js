export function searchImages(value) {
  const URI = 'https://pixabay.com/api/';
  const PARAMS = new URLSearchParams({
    key: '42515030-f0931f035bd772c998b8c15c1',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const LINK = `${URI}?${PARAMS}`;

  return fetch(LINK).then(response => {
    if (!response.ok) {
      throw new Error('Error!');
    }

    return response.json();
  });
}
