import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

export async function fetchImages (searchQuery, page) {
  const params = new URLSearchParams ({
    key: '31409515-1e05b025820d8f08d6d70aee0',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
// console.log('params: ', params);
  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
}

// порядок запиту:
// `https://pixabay.com/api/
// ?q=cat
// &page=1
// &key=31409515-1e05b025820d8f08d6d70aee0
// &image_type=photo
// &orientation=horizontal
// &per_page=12`

// const BASE_URL = 'https://pixabay.com/api/?q=';
// const API_KEY = '31409515-1e05b025820d8f08d6d70aee0';
