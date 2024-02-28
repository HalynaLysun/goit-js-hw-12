export async function searchImages(value, page) {
  const URI = 'https://pixabay.com/api/';
  const PARAMS = new URLSearchParams({
    key: '42515030-f0931f035bd772c998b8c15c1',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const LINK = `${URI}?${PARAMS}`;

  const response = await fetch(LINK);

  try {
    !response.ok;
  } catch {
    throw new Error('Error!');
  }

  return await response.json();
}
