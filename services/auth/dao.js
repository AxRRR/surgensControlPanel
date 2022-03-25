const bcrypt = require("bcryptjs/dist/bcrypt");
const { GenerateJWT } = require("../../utils/webToken");
const Auth = require('./model');

module.exports = {
    createUser(user){
        return new Promise(async(resolve, reject) => {
            let userData = await Auth.findOne({ name_member: user.name_member });
            if(userData) return reject('Este usuario ya se encuentra registrado.');

            userData = new Auth(user);
            userData.password_member = bcrypt.hashSync(user.password_member, bcrypt.genSaltSync());
            userData.role_member = 'Member';

            // Comprobamos que se haya hecho bien el save
            // en caso de que no, hacemos un catch y retornamos el error.
            await userData.save().catch(() => reject('El tag del usuario ya esta tomado'))

            return resolve({ member_info: userData });
        } 
    )},
    loginUser(user){
        return new Promise(async(resolve, reject) => {
            const userData = await Auth.findOne({ name_member: user.name_member });
            if(!userData) return reject('Este usuario no existe en la base de datos');

            const ValidPassword = bcrypt.compareSync(user.password_member, userData.password_member);
            if(!ValidPassword) return reject('Usuario o contraseña incorrecta')
            
            const tokenAccess = await GenerateJWT(userData._id, userData.name_member);

            return resolve({ member_info: userData, token: tokenAccess });
        } 
    )},
}