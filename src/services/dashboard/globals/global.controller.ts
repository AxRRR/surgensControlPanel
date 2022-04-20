import { Request, Response } from 'express';
import { statusResolve } from '../../../utils/status';
import { TypesReports } from '../moderator/mod.types';
import { hasRank } from '../utilities/checkRank.utilites';
import { createPost, createRecomendation, createReport } from './global.dao';

export const createNewRecommendation = async (req: Request, res: Response) => {
  if (!req.body.member_role) return res.sendStatus(statusResolve.badRequest);

  // Forma correcta de verificar si tiene rango el miembro.
  if (
    !(
      hasRank(req.body.member_role).administrator() ||
      hasRank(req.body.member_role).moderator() ||
      hasRank(req.body.member_role).leaderClan()
    )
  )
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await createRecomendation(req.body)
    .then((message: any) =>
      res.status(statusResolve.success).json({ status: true, message })
    )
    .catch((error: any) =>
      res.status(statusResolve.success).json({ status: false, message: error })
    );
};

export const createNewPost = async (req: Request, res: Response) => {
  if (!req.body.post_owner) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.post_text) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.post_title) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.post_img) return res.sendStatus(statusResolve.badRequest);

  if (!hasRank(req.body.member_role).all())
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await createPost(req.body)
    .then((message: any) => {
      res.status(statusResolve.success).json({ status: true, message });
    })
    .catch((error: any) => {
      res.status(statusResolve.success).json({ status: false, message: error });
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
