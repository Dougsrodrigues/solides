import axios from 'axios';

const api = axios.create({
  baseURL: 'https://solides-37cb2.firebaseio.com/',
});

export default api;
