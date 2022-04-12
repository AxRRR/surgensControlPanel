import { Request, Response } from "express";
// import { statusResolve } from "@/utils/status";
import { getSpecificUser, getSpecificUserUpChest } from "./dao";
import { statusResolve } from "../../utils/status";
// const { 
//     getMembers, 
//     getClan, 
//     getSpecificUser, 
//     getSpecificUserUpChest, 
//     getSpecificWarLog 
// } =                             require("./dao");



// const getListOfClans = async(req, res) => {
//     const gettingClans = await getAllClans();

//     if(!gettingClans){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio un error al realizar la solicitud'
//         })
//     }

//     return res.status(statusResolve.success).json({
//         status: true,
//         items: gettingClans
//     })
// }

// const getSpecificClan = async(req, res) => {
//     let clan_payload = await getClan(req.query.tagname || '#Q0QGU0LR');

//     if(!clan_payload){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio un error al realizar la solicitud'
//         })
//     }

//     return res.status(statusResolve.success).json({
//         status: true,
//         payload: clan_payload
//     })
// }

// const getListOfMembers = async(req, res) => {

//     const tags = [];
//     const completeListMembers = [];
//     const gettingClans = await getAllClans();

//     // Obtenemos los clanes
//     // y luego pusheamos todos los tags que encuentra
//     gettingClans.map(({ tag }) => tags.push(tag));

//     if(!tags){
//         res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'No se pudo recuperar información. Intentalo más tarde.'
//         })
//     }

//     // Buscamos todos los tags que arroje items
//     // Recorremos con un map y una funcion anonima asincrona
//     // y hacemos push a un array para devolver todo los mimebros.
//     await Promise.all( 
//         tags.map(async(tag) => {
//             const { memberList } = await getMembers(tag);

//             // Convertimos el Array a un Objecto y pusheamos todos los miembros
//             // a una unica lista junta.
//             Object.assign({}, memberList);
//             memberList.map((member) => completeListMembers.push(member))

//         })
//     );

//     return res.status(statusResolve.success).json({
//         status: true,
//         memberList: completeListMembers
//     })
// }

export const getSpecificMember = async(req: Request, res: Response) => {

    // interface Tag extends Request{
    //     query: {
    //         tagname: string
    //     }
    // }

    // const { tagname }: Tag = req.query;
    
    let member_payload = await getSpecificUser('#R8JUPV2');
    
    if(!member_payload){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio al intentar recuperar a este miembro. Intentalo más tarde.'
        })
    }

    console.log(member_payload)
    
    console.log('Aqui antes de la respuesta')
    return res.status(statusResolve.success).json({
        status: true,
        payload: member_payload,
        upcomingChest: await getSpecificUserUpChest(req.query.tagname || '#R8JUPV2')
    })
}

// const getTopSpecificClan = async(req, res) => {

//     const { tagname, max, type } = req.query;

//     let { memberList } = await getClan(tagname || '#Q0QGU0LR');

//     if(!memberList){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio al intentar recuperar la información. Intente más tarde.'
//         })
//     }

//     // Buscamos todos los miembros del clan
//     // luego iteramos todos los miembros del array
//     // pusheamos los miembros que esten en el top a otro array
//     // cuando llegue al valor máximo se corta
//     const nextListMember = [];
//     memberList.map((member, index) => index <= parseInt(max) && nextListMember.push(member))

    
//     // Si el type sea igual a 'DESC' invertimos la lista
//     // ... si se omite el parametro será ASC automaticamente.
//     return res.status(statusResolve.success).json({
//         status: true,
//         topMembers: type === 'DESC' ? nextListMember.reverse() : nextListMember,
//     })
// }

// const getListOfTopClans = async(req, res) => {

//     const { max = 10, type } = req.query;

//     const tags = [];
//     const completeListMembers = [];
//     const gettingClans = await getAllClans();

//     // Obtenemos los clanes
//     // y luego pusheamos todos los tags que encuentra
//     gettingClans.map(({ tag }) => tags.push(tag));

//     if(!tags){
//         res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'No se pudo recuperar información. Intentalo más tarde.'
//         })
//     }

//     // Buscamos todos los tags que arroje items
//     // Recorremos con un map y una funcion anonima asincrona
//     // y hacemos push a un array para devolver todo los mimebros.
//     await Promise.all( 
//         tags.map(async(tag) => {
//             const { memberList } = await getMembers(tag);

//             // Convertimos el Array a un Objecto y pusheamos todos los miembros
//             // a una unica lista junta.
//             Object.assign({}, memberList);
//             memberList.map((member) => completeListMembers.push(member))

//         })
//     );

//     // Ordenamos los elementos por el atributo trophies
//     complecompleteListMembers = completeListMembers.sort((fMember, sMember) => {
//         if (fMember.trophies > sMember.trophies) {
//             return 1;
//         }
//         if (fMember.trophies < sMember.trophies) {
//             return -1;
//         }
//     }).reverse();

//     // Recorremos el array para ordenar solamente el numero de elementos
//     // del top, hacemos un max-1 para que no itere una extra vez. 
//     let nextListComplete = [];
//     complecompleteListMembers
//         .map((member, index) => index <= parseInt(max-1) && nextListComplete.push(member))

//     // Si el type sea igual a 'DESC' dejamos la lista igual
//     // ... si se omite la lista estara inversa.
//     return res.status(statusResolve.success).json({
//         status: true,
//         topMembers: nextListComplete
//     })
// }

// const getSpecificDonationsClan = async(req, res) => {
//     let { donationsPerWeek } = await getClan(req.query.tagname || '#Q0QGU0LR');

//     if(!donationsPerWeek){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio un error al realizar la solicitud'
//         })
//     }

//     return res.status(statusResolve.success).json({
//         status: true,
//         donations: donationsPerWeek
//     })
// }

// const getDonationsClans = async(req, res) => {

//     const gettingClans = await getAllClans();
//     const donationsByClan = [];

//     if(!gettingClans){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio un error al realizar la solicitud'
//         })
//     }

//     await Promise.all( 
//         gettingClans.map(async(clan) => {
//             let { donationsPerWeek, name } = await getClan(clan.tag || '#Q0QGU0LR');
//             donationsByClan.push({
//                 name,
//                 donationsPerWeek
//             })
//         })
//     )

//     return res.status(statusResolve.success).json({
//         status: true,
//         donations: donationsByClan
//     })
// }

// const getSpecificWar = async(req, res) => {
//     let payload_warlog = await getSpecificWarLog(req.query.tagname || '#Q0QGU0LR');

//     if(!payload_warlog){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio un error al realizar la solicitud'
//         })
//     }

//     return res.status(statusResolve.success).json({
//         status: true,
//         warLog: payload_warlog
//     })
// }

// const getWarlogClans = async(req, res) => {
//     const gettingClans = await getAllClans();
//     const warLogByClan = [];

//     await Promise.all(
//         gettingClans.map(async(clan) => {
//             let payload_warlog = await getSpecificWarLog(clan.tag || '#Q0QGU0LR');
//             warLogByClan.push(payload_warlog)
//         })
//     )

//     if(!warLogByClan){
//         return res.status(statusResolve.badRequest).json({
//             status: false,
//             message: 'Ocurrio un error al realizar la solicitud'
//         })
//     }

//     return res.status(statusResolve.success).json({
//         status: true,
//         warLog: warLogByClan
//     })
// }

// module.exports = {
//     getListOfClans,
//     getSpecificClan,
//     getListOfMembers,
//     getSpecificMember,
//     getTopSpecificClan,
//     getListOfTopClans,
//     getSpecificDonationsClan,
//     getDonationsClans,
//     getSpecificWar,
//     getWarlogClans
// };