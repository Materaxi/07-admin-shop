import axios from 'axios';

const tesloApi = axios.create({
  baseURL: import.meta.env.VITE_TESLO_API_URL || 'http://localhost:3000/api',
});

//TODO: Interceptores

export { tesloApi };
