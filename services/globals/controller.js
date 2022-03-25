const { statusResolve } = require("../../utils/status");
const { getClans, getMembers, getClan, getSpecificUser, getSpecificUserUpChest } = require("./dao");
const { getOnlyContry } = require("./utils");

const getListOfClans = async(req, res) => {
    let { items } = await getClans();

    if(!items){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    // Usamos nuestro customFilter unicamente de México
    // Asi evitamos que lleguen clanes distintos
    items = await getOnlyContry(items, 'Mexico');

    return res.status(statusResolve.success).json({
        status: true,
        items
    })
}

const getSpecificClan = async(req, res) => {
    let clan_payload = await getClan(req.query.tagname || '#Q0QGU0LR');

    if(!clan_payload){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    return res.status(statusResolve.success).json({
        status: true,
        payload: clan_payload
    })
}

const getListOfMembers = async(req, res) => {

    const tags = [];
    const completeListMembers = [];
    let { items } = await getClans();

    // Obtenemos los clanes
    // y luego pusheamos todos los tags que encuentra
    items = getOnlyContry(items, 'Mexico');
    items.map(({ tag }) => tags.push(tag));

    if(!tags){
        res.status(statusResolve.badRequest).json({
            status: false,
            message: 'No se pudo recuperar información. Intentalo más tarde.'
        })
    }

    // Buscamos todos los tags que arroje items
    // Recorremos con un map y una funcion anonima asincrona
    // y hacemos push a un array para devolver todo los mimebros.
    await Promise.all( 
        tags.map(async(tag) => {
            const { memberList } = await getMembers(tag);

            completeListMembers.push(... completeListMembers, Object.assign(memberList));
        })
    );

    return res.status(statusResolve.success).json({
        status: true,
        memberList: completeListMembers
    })
}

const getSpecificMember = async(req, res) => {
    let member_payload = await getSpecificUser(req.query.tagname || '#R8JUPV2');

    if(!member_payload){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio al intentar recuperar a este miembro. Intentalo más tarde.'
        })
    }

    return res.status(statusResolve.success).json({
        status: true,
        payload: member_payload,
        upcomingChest: await getSpecificUserUpChest(req.query.tagname || '#R8JUPV2')
    })
}

module.exports = {
    getListOfClans,
    getSpecificClan,
    getListOfMembers,
    getSpecificMember
};