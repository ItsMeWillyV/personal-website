// src/api.js
export const API_DOMAIN =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080'
    : 'https://api.willy-v.com';