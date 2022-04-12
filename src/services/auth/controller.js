const transport =               require("../../config/config.mailer");
const { statusResolve } =       require("../../utils/status");
const { VerificationCode } =    require("./utilities");
const { 
    createUser, 
    loginUser, 
    validateTag,     
    verificationUserEmail
} =                             require("./dao");


const createMember = async(req, res) => {
    if(!req.body.name_member)       return res.sendStatus(statusResolve.badRequest);
    if(!req.body.tag_member)        return res.sendStatus(statusResolve.badRequest);
    if(!req.body.password_member)   return res.sendStatus(statusResolve.badRequest);

    console.log('El request del controller', req.body)

    createUser(req.body)
        .then((data) => {
            sendConfirmMail(
                data.member_info.name_member, 
                data.member_info.email_member, 
                data.member_info.verification_code
            );
            res.status(statusResolve.success).json({
                status: true,
                data
            })
        })
        .catch((error) => {
            res.status(statusResolve.success).json({
                status: false,
                error
            })
        })

}

const sendConfirmMail = async(name, email, code) => {
    await transport.sendMail({
        from: '"New Surgens" newsurgens.royale@gmail.com',
        to: email,
        subject: "Confirmación de tu correo electronico",
        html: `
            <div style='
                text-align: center;
            '>
                <h1>¡Hola ${name} gracias por registrarte en Surgens!</h1>
                <h2>Este es tu código de verificación</h2>
                <p>Este es tu código de verificación</p>
                <h3>${code}</h3>
            </div>
            <br>
            <br>
            <hr>
            <div style='
                text-align: right;
            '>
                <p>Clan New Surgens 2022</p>
            </div>
        
        `,
      });
}

const reSendMail = (req, res) => {
    sendConfirmMail(
        req.body.name_member,
        req.body.email_member,
        VerificationCode
    );

    res.status(statusResolve.success).json({
        status: true,
        message: 'El código de verificación fue reenviado.'
    })
}

const autoLogin = (req, res) => {
    if(!req.body.id)       return res.sendStatus(statusResolve.badRequest);

    getUser(req.body.id)
        .then(({ _id, tag_member, name_member, role_member, email_member }) => {
            res.status(statusResolve.success).json({
                status: true,
                data: {
                    _id,
                    tag_member,
                    name_member,
                    role_member,
                    email_member
                }
            })
        })
        .catch((error) => {
            res.status(statusResolve.badRequest).json({
                status: false,
                error
            })
        })
}

const emailVerification = (req, res) => {
    verificationUserEmail(req.body, req.body.code)
        .then(() => {
            res.status(statusResolve.success).json({
                status: true,
                message: 'Se realizo correctamente la confirmación de correo.'
            })
        })
        .catch((error) => {
            res.status(statusResolve.success).json({
                status: false,
                message: error
            })
        });
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
                status: false,
                error
            })
        })
}

const validateMemberTag = async(req, res) => {
    console.log('El tag', req.body)
    if(!req.body.tag)    return res.sendStatus(statusResolve.badRequest);

    validateTag(req.body)
        .then((data) => {
            res.status(statusResolve.success).json({
                status: true,
                message: data
            })
        })
        .catch((error) => {
            res.status(statusResolve.success).json({
                status: false,
                error
            })
        })
}


module.exports = {
    createMember,
    loginMember,
    validateMemberTag,
    reSendMail,
    autoLogin,
    emailVerification
}