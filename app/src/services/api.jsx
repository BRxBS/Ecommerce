import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://brxbs.github.io/json-server-forEcommerce/',
});
