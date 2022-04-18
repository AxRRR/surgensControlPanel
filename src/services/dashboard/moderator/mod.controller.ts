import { Request, Response } from 'express';
import { statusResolve } from '../../../utils/status';
import { hasRank } from '../utilities/checkRank.utilites';
import { createReport, deletePost, editPost } from './mod.dao';
import { TypesReports } from './mod.types';

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

export const createNewReport = async (req: Request, res: Response) => {
  await createReport({
    id: req.body.report_user,
    description: req.body.report_description,
    title: req.body.report_title,
  })
    .then((data: TypesReports | string) => {
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
