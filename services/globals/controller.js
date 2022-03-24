const { getClans } = require("./dao");
const { getOnlyContry } = require("./utils");

const getListOfClans = async(req, res) => {
    let { items } = await getClans();

    if(!items){
        return res.status(404).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    // Usamos nuestro customFilter unicamente de México
    // Asi evitamos que lleguen clanes distintos
    items = await getOnlyContry(items, 'Mexico');

    return res.status(200).json({
        status: true,
        items
    })
}

const getListOfMembers = async(req, res) => {

    const tags = [];
    let { items } = await getClans();

    items = getOnlyContry(items, 'Mexico');
    items.map(({ tag }) => tags.push(tag))

    return res.status(200).json({
        status: true,
        items,
        tags
    })
}

module.exports = {
    getListOfClans,
    getListOfMembers
};