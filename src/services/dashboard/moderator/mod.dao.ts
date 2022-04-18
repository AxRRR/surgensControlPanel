import { News } from '../globals/news.model';
import { Reports } from './mod.reports.model';
import { TypesReports, TypesUpdate } from './mod.types';
import { invoiceCodeGenerator } from './mod.utilities';

export const deletePost = async (id: string) => {
  return new Promise<string>(async (resolve, reject) => {
    await News.findByIdAndDelete(id)
      .then(() => resolve('El post ha sido eliminado.'))
      .catch(() => reject('Ocurrio un error. Intentelo nuevamente.'));
  });
};

export const editPost = (id: string, toUpdate: TypesUpdate) => {
  return new Promise<string>(async (resolve, reject) => {
    // Actualizamos la fecha
    toUpdate.post_createdAt = new Date();
    await News.findByIdAndUpdate(id, toUpdate)
      .then(() => resolve('El usuario fue actualizado correcamente.'))
      .catch(() => reject('Ocurrio un error. Intentelo nuevamente.'));
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
