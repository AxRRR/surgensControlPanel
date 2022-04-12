const { getClans } = require("./dao");

const getOnlyContry = (arr, query) => {
    return arr.filter(({ location }) => location.name === query);
}

const getAllClans = async() => {
    let { items } = await getClans();
    return items = await getOnlyContry(items, 'Mexico');
}
  
module.exports = {
    getOnlyContry,
    getAllClans
}