import { News } from '../globals/news.model';
import { Objectives } from '../leader_clan/leader.objectives.model';
import { Tasks } from '../leader_clan/leader.task.model';
import { ReciveObjectives, ReciveTasks } from '../leader_clan/leader.types';
import { Reports } from './mod.reports.model';
import { TypesTask, TypesUpdate } from './mod.types';
import { invoiceCodeGenerator } from './mod.utilities';

export const createObjectives = (
  objectives: ReciveObjectives,
  tasks: Array<ReciveTasks>
) => {
  return new Promise<ReciveObjectives>(async (resolve, reject) => {
    const allTaskIncludes: Array<string> = [];

    // Recorremos todas las tareas que vienen del req.
    // Guardamos y obtenemos el _id de cada tarea y pusheamos
    // a otra lista para despues guardar todo.
    tasks.map(async (task: ReciveTasks) => {
      const createNewTask = new Tasks(task);
      createNewTask.task_invoice = invoiceCodeGenerator();
      createNewTask.task_createAt = new Date();
      createNewTask.save();
      return allTaskIncludes.push(createNewTask._id);
    });

    // Creamos la instancia del modelo de Objectives.
    const objectivesInstance = new Objectives(objectives);
    // Asignamos las tareas ya guardadas.
    objectivesInstance.objective_tasks = allTaskIncludes;
    objectivesInstance.objective_invoice = invoiceCodeGenerator();
    objectivesInstance.objective_createAt = new Date();
    objectivesInstance.objective_user = objectives.objective_user;
    await objectivesInstance
      .save()
      .then(() => resolve(objectivesInstance))
      .catch(() => reject('Ocurrio un error al guardar los objetivos.'));
  });
};

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

export const responseReport = (id: string) => {
  return new Promise<string>(async (resolve, reject) => {
    await Reports.findByIdAndDelete(id)
      .then(() => resolve('El reporte fue atendido y eliminado'))
      .catch(() => reject('Ocurrio un error al eliminar el reporte.'));
  });
};

export const addNewTask = (invoice: string, task: TypesTask) => {
  return new Promise<ReciveObjectives>(async (resolve, reject) => {
    const getObjectives = await Objectives.findOne({
      objective_invoice: invoice,
    });
    if (!getObjectives)
      return reject('No se pudo encontrar los objetivos con el folio.');

    const createNewTask = new Tasks(task);
    createNewTask.task_createAt = new Date();
    createNewTask.task_invoice = invoiceCodeGenerator();
    await createNewTask
      .save()
      .catch(() =>
        reject('Ocurrio un error al guardar la tarea, intentalo nuevamente.')
      );

    // Hacemos una copia de los ids actuales y agregamos el nuevo id.
    const getTasks = [...getObjectives.objective_tasks, createNewTask._id];

    getObjectives.objective_tasks = getTasks;
    await getObjectives.save();
    return resolve(getObjectives.populate('objective_tasks'));
  });
};

export const updateObjectives = async (id: string, props: ReciveObjectives) => {
  return new Promise<string>(async (resolve, reject) => {
    props.objective_createAt = new Date();
    await Objectives.findByIdAndUpdate(id, props)
      .then(() => resolve('Se actualizo la informacion correctamente.'))
      .catch(() => reject('Ocurrio un error. Intentelo nuevamente.'));
  });
};

export const deleteObjectives = async (id: string) => {
  return new Promise<string>(async (resolve, reject) => {
    const objectivesData = await Objectives.findById(id);

    if (!objectivesData)
      return reject('No se encontran los objetivos con ese id.');

    // Buscamos dentro del array de tareas. Por cada una eliminamos la tarea.
    objectivesData.objective_tasks.map((task: ReciveTasks) =>
      deleteTask(task._id as string)
    );

    // Una vez que limpiamos las tareas eliminamos los objetivos.
    await Objectives.findByIdAndDelete(id)
      .then(() => resolve('Este objetivo ha sido eliminado permanentemente.'))
      .catch(() => reject('Ocurrio un error. Intentelo nuevamente.'));
  });
};

export const deleteTask = async (id: string) => {
  return await Tasks.findByIdAndDelete(id);
};
