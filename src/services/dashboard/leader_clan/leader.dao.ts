import { Objectives } from './leader.objectives.model';
import { Tasks } from './leader.task.model';
import { ReciveObjectives } from './leader.types';

export const getObjectives = (invoice: string) => {
  return new Promise<ReciveObjectives>(async (resolve, reject) => {
    const objective = await Objectives.findOne({
      objective_invoice: invoice,
    }).populate('objective_tasks');

    if (!objective) return reject('Este folio no existe en la base de datos.');
    return resolve(objective);
  });
};

export const changeStatus = (id: string, props: boolean) => {
  return Tasks.findByIdAndUpdate(id, { task_status: props })
    .then(() => `El estado de la tarea fue cambiado a ${props}.`)
    .catch(() => 'No se pudo encontrar la tarea especificada.');
};
