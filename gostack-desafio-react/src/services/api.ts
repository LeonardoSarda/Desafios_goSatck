import axios from 'axios';

// Api de teste uso a porta 3335

const api = axios.create({
  baseURL: 'http://localhost:3335',
});

export default api;
