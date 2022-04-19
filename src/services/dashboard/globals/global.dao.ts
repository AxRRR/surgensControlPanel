import { Recomendations } from './recommendation.model';
import { TypeRecomendation } from './global.types';
import { News } from './news.model';
import { Reports } from '../moderator/mod.reports.model';
import { invoiceCodeGenerator } from '../moderator/mod.utilities';
import { TypesReports } from '../moderator/mod.types';

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

export const createReport = ({
  id,
  description,
  title,
}: {
  id: string;
  description: string;
  title: string;
}) => {
  return new Promise<TypesReports | string>(async (resolve, reject) => {
    const reportCreate = new Reports({
      report_user: id,
      report_title: title,
      report_status: true,
      report_invoice: invoiceCodeGenerator(),
      report_createdAt: new Date(),
    });

    await reportCreate
      .save()
      .catch(() => reject('Ocurrio un error al intentar crear la incidencia.'));

    return resolve(
      reportCreate.populate({ path: 'report_user', select: 'name_member' })
    );
  });
};
