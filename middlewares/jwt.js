const { response } = require('express');
const jwt = require('jsonwebtoken');

const isValidJWT = (req, res = response, next) => {

    const token = req.header('accessJWT');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No contiene ningún accesstoken.'
        });
    }

    try {
        
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido.'
        });
    }

    next();
}


module.exports = {
    isValidJWT
}