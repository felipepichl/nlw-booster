import axios from 'axios';

const api = axios.create({
  baseURL: 'https://github.com/login/oauth/access_token',
});

export { api };
