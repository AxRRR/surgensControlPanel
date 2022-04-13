const axios = require('axios').default;
// import axios from 

export const client = axios.create({
    baseURL: 'https://api.clashroyale.com/v1/'
})