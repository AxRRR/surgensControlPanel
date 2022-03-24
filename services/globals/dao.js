const axios = require("../../utils/axios");

module.exports = {
    async getClans(){
        return ( 
            await 
                axios
                .get('clans?name=Surgens')
                .then(({ data }) => data)
                .catch((error) => error)
        );
    }
}