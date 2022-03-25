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

            // Convertimos el Array a un Objecto y pusheamos todos los miembros
            // a una unica lista junta.
            Object.assign({}, memberList);
            memberList.map((member) => completeListMembers.push(member))

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

const getTopSpecificClan = async(req, res) => {

    const { tagname, max, type } = req.query;

    let { memberList } = await getClan(tagname || '#Q0QGU0LR');

    if(!memberList){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio al intentar recuperar la información. Intente más tarde.'
        })
    }

    // Buscamos todos los miembros del clan
    // luego iteramos todos los miembros del array
    // pusheamos los miembros que esten en el top a otro array
    // cuando llegue al valor máximo se corta
    const nextListMember = [];
    memberList.map((member, index) => index <= parseInt(max) && nextListMember.push(member))

    
    // Si el type sea igual a 'DESC' invertimos la lista
    // ... si se omite el parametro será ASC automaticamente.
    return res.status(statusResolve.success).json({
        status: true,
        topMembers: type === 'DESC' ? nextListMember.reverse() : nextListMember,
    })
}

const getListOfTopClans = async(req, res) => {

    const { max = 10, type } = req.query;

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

            // Convertimos el Array a un Objecto y pusheamos todos los miembros
            // a una unica lista junta.
            Object.assign({}, memberList);
            memberList.map((member) => completeListMembers.push(member))

        })
    );

    // Ordenamos los elementos por el atributo trophies
    complecompleteListMembers = completeListMembers.sort((fMember, sMember) => {
        if (fMember.trophies > sMember.trophies) {
            return 1;
        }
        if (fMember.trophies < sMember.trophies) {
            return -1;
        }
    }).reverse();

    // Recorremos el array para ordenar solamente el numero de elementos
    // del top, hacemos un max-1 para que el indice no afecte por el indice 0. 
    let nextListComplete = [];
    complecompleteListMembers
        .map((member, index) => index <= parseInt(max-1) && nextListComplete.push(member))

    // Si el type sea igual a 'DESC' dejamos la lista igual
    // ... si se omite la lista estara inversa.
    return res.status(statusResolve.success).json({
        status: true,
        topMembers: nextListComplete
    })
}

module.exports = {
    getListOfClans,
    getSpecificClan,
    getListOfMembers,
    getSpecificMember,
    getTopSpecificClan,
    getListOfTopClans
};