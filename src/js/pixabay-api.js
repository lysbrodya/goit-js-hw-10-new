import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '35983466-b93c787dc13242734c56ed506',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 8,
  safesearch: true,
};

export default async function fetchData(searchQuery, page) {
  axios.defaults.params.q = searchQuery;
  axios.defaults.params.page = page;
  const response = await axios.get();
  return response.data;
}
