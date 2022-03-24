const axios = require('axios').default;

module.exports = axios.create({
    baseURL: 'https://api.clashroyale.com/v1/'
})