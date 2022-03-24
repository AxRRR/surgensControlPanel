
const getOnlyContry = (arr, query) => {
    return arr.filter(({ location }) => location.name === query);
}

module.exports = {
    getOnlyContry
}