import { Recomendations } from './recommendation.model';
import { TypeRecomendation } from './global.types';
import { News } from './news.model';

export const createRecomendation = (recomInfo: TypeRecomendation) => {
  return new Promise(async (resolve, reject) => {
    let recomendation = await Recomendations.findOne({
      ascent_member: recomInfo.ascent_member,
    });
    if (recomendation) return reject('Este usuario ya ha sido recomendado.');

    let instanceRecomendation = new Recomendations(recomInfo);
    instanceRecomendation
      .save()
      .catch(() =>
        reject(
          'Ocurrio un error al guardar la instancia. Revisa que no haya campos vacios.'
        )
      );

    return resolve('La recomendacion se creo correctamente.');
  });
};

export const createPost = (post: any) => {
  return new Promise(async (resolve, reject) => {
    let postNew = new News(post);
    postNew.post_createdAt = new Date();

    postNew
      .save()
      .catch(() =>
        reject('No se pudo realizar la operación intentalo nuevamente.')
      );
      
    return resolve('El post se ha creado exitosamente.');
  });
};
