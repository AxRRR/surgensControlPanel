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
    },
    async getClan(clan_tag){
        return ( 
            await 
                axios
                .get(`clans/%23${clan_tag.substr(1)}`)
                .then(({ data }) => data)
                .catch((error) => error)
        );
    },
    async getMembers(clan_tag){
        return ( 
            await 
                axios
                .get(`clans/%23${clan_tag.substr(1)}`)
                .then(({ data }) => data)
                .catch((error) => error)
        );
    },
    async getSpecificUser(user_tag){
        return (
            await
                axios
                .get(`players/%23${user_tag.substr(1)}`)
                .then(({ data }) => data)
                .catch((error) => error)
        )
    },
    async getSpecificUserUpChest(user_tag){
        return ( 
            await 
                axios
                .get(`players/%23${user_tag.substr(1)}/upcomingchests`)
                .then(({ data }) => data)
                .catch((error) => error)
        )
    }
}