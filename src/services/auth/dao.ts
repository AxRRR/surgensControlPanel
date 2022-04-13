const bcrypt = require('bcryptjs/dist/bcrypt');
const { GenerateJWT } = require('../../utils/webToken');
const Auth = require('./model');
const { VerificationCode } = require('./utilities');

export const createUser = (user: any) => {
  return new Promise(async (resolve, reject) => {
    let userData = await Auth.findOne({ email_member: user.email_member });

    if (userData != null)
      return reject('El email que ingresaste ya esta registrado.');
    userData = new Auth(user);
    userData.password_member = bcrypt.hashSync(
      user.password_member,
      bcrypt.genSaltSync()
    );
    userData.role_member = 'Member';
    userData.verification_code = VerificationCode;

    // Comprobamos que se haya hecho bien el save
    // en caso de que no, hacemos un catch y retornamos el error.
    await userData
      .save()
      .catch(() => reject('El email que ingresaste ya esta registrado.'));

    return resolve({ member_info: userData });
  });
};
export const loginUser = (user: any) => {
  return new Promise(async (resolve, reject) => {
    const userData = await Auth.findOne({ name_member: user.name_member });
    if (!userData) return reject('Este usuario no existe en la base de datos');

    const ValidPassword = bcrypt.compareSync(
      user.password_member,
      userData.password_member
    );
    if (!ValidPassword) return reject('Usuario o contraseña incorrecta');

    const tokenAccess = await GenerateJWT(userData._id, userData.name_member);

    return resolve({ member_info: userData, token: tokenAccess });
  });
};
export const validateTag = (tag: any) => {
  return new Promise(async (resolve, reject) => {
    const tagExist = await Auth.findOne({ tag_member: tag.tag });
    if (!tagExist) return resolve('Este tag esta disponible');

    return reject('Este tag ya esta tomado');
  });
};
export const getUser = (id: any) => {
  return Auth.findById(id)
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};
export const verificationUserEmail = (user: any, code: any) => {
  return new Promise(async (resolve, reject) => {
    const userData = await Auth.findOne({ name_member: user.name_member });
    if (!userData) return reject('Este usuario no existe en la base de datos');

    if (userData.email_member === '')
      return reject('Este usuario ya confirmo su cuenta.');
    if (userData.verification_code !== code)
      return reject('El código introducido no coincide con la base de datos.');

    await Auth.findByIdAndUpdate(userData._id, { verification_code: '' });
    return resolve('Usuario ha confirmado correctamente su cuenta.');
  });
};
