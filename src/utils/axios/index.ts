const axios = require('axios').default;

export const client = axios.create({
  baseURL: 'https://api.clashroyale.com/v1/',
});
