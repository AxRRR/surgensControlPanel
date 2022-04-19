import { Request, Response } from 'express';
import { statusResolve } from '../../../utils/status';
import { ReciveObjectives } from '../leader_clan/leader.types';
import { hasRank } from '../utilities/checkRank.utilites';
import {
  addNewTask,
  createObjectives,
  deleteObjectives,
  deletePost,
  editPost,
  responseReport,
  updateObjectives,
} from './mod.dao';
import { invoiceCodeGenerator } from './mod.utilities';

export const editSpecificPost = async (req: Request, res: Response) => {
  if (req.body.id) return res.sendStatus(statusResolve.badRequest);

  const { member_role, id, post_text, post_title, post_img, post_createdAt } =
    req.body;

  if (
    !hasRank(member_role).administrator() ||
    !hasRank(member_role).moderator()
  )
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await editPost(id, { post_text, post_title, post_img, post_createdAt })
    .then((message: string) => {
      res.status(statusResolve.success).json({ status: true, message });
    })
    .catch((error: string) => {
      res.status(statusResolve.success).json({ status: false, error });
    });
};

export const deleteSpecificPost = async (req: Request, res: Response) => {
  if (req.body.id) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).administrator() ||
    !hasRank(req.body.member_role).moderator()
  )
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await deletePost(req.body.id)
    .then((message: string) => {
      res.status(statusResolve.success).json({
        status: true,
        message,
      });
    })
    .catch((error: string) => {
      res.status(statusResolve.success).json({ status: false, error });
    });
};

export const responseSpecificReport = async (req: Request, res: Response) => {
  if (req.body.id) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).administrator() ||
    !hasRank(req.body.member_role).moderator()
  )
    await responseReport(req.body.id)
      .then((message: string) => {
        res.status(statusResolve.success).json({
          status: true,
          message,
        });
      })
      .catch((error: string) => {
        res.status(statusResolve.success).json({
          status: false,
          message: error,
        });
      });
};

// TODO: Hay que cambiar esto con lo que venga del request.
export const createNewsObjectives = async (req: Request, res: Response) => {
  if (req.body.objective_user) return res.sendStatus(statusResolve.badRequest);
  if (req.body.objective_clan) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).administrator() ||
    !hasRank(req.body.member_role).moderator()
  )
    await createObjectives(
      {
        objective_clan: req.body.objective_clan,
        objective_user: req.body.objective_user,
        objective_createAt: new Date(),
        objective_invoice: '',
      },
      req.body.tasks
    )
      .then((message: any) => {
        res.status(statusResolve.success).json({
          status: true,
          message,
        });
      })
      .catch((error: string) => {
        res.status(statusResolve.success).json({
          status: true,
          error,
        });
      });
};

export const addNewSpecificObjective = async (req: Request, res: Response) => {
  if (req.body.invoice) return res.sendStatus(statusResolve.badRequest);
  if (req.body.task_title) return res.sendStatus(statusResolve.badRequest);
  if (req.body.task_description)
    return res.sendStatus(statusResolve.badRequest);
  if (req.body.task_status) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).administrator() ||
    !hasRank(req.body.member_role).moderator()
  )
    await addNewTask(req.body.invoice, {
      task_title: req.body.task_title,
      task_description: req.body.task_description,
      task_status: req.body.task_status,
    })
      .then((data: ReciveObjectives) => {
        res.status(statusResolve.success).json({
          status: true,
          data,
        });
      })
      .catch((error: string) => {
        res.status(statusResolve.success).json({
          status: false,
          error,
        });
      });
};

export const deleteSpecificObjectives = async (req: Request, res: Response) => {
  if (req.body.id) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).administrator() ||
    !hasRank(req.body.member_role).moderator()
  )
    await deleteObjectives(req.body.id)
      .then((message: string) => {
        res.status(statusResolve.success).json({
          status: true,
          message,
        });
      })
      .catch((error: string) => {
        res.status(statusResolve.success).json({
          status: false,
          error,
        });
      });
};

export const updateSpecificObjectives = async (req: Request, res: Response) => {
  if (req.body.id) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.member_role).administrator() ||
    !hasRank(req.body.member_role).moderator()
  )
    await updateObjectives(req.body.id, req.body)
      .then((message: string) => {
        res.status(statusResolve.success).json({
          status: true,
          message,
        });
      })
      .catch((error: string) => {
        res.status(statusResolve.success).json({
          status: false,
          error,
        });
      });
};
