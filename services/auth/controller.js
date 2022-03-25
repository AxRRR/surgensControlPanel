const { statusResolve } = require("../../utils/status");
const { createUser, loginUser } = require("./dao");


const createMember = async(req, res) => {
    // Comprobamos que venga la información solicitada
    if(!req.body.name_member)       return res.sendStatus(statusResolve.badRequest);
    if(!req.body.tag_member)        return res.sendStatus(statusResolve.badRequest);
    if(!req.body.password_member)   return res.sendStatus(statusResolve.badRequest);

    createUser(req.body)
        .then((data) => {
            res.status(statusResolve.success).json({
                status: true,
                data
            })
        })
        .catch((error) => {
            res.status(statusResolve.success).json({
                status: true,
                error
            })
        })

}

const loginMember = async(req, res) => {
    if(!req.body.name_member)       return res.sendStatus(statusResolve.badRequest);
    if(!req.body.password_member)   return res.sendStatus(statusResolve.badRequest);

    loginUser(req.body)
        .then((data) => {
            res.status(statusResolve.success).json({
                status: true,
                data
            })
        })
        .catch((error) => {
            res.status(statusResolve.success).json({
                status: true,
                error
            })
        })
}

module.exports = {
    createMember,
    loginMember
}