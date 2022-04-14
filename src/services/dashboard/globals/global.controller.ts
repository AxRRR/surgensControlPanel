import { Request, Response } from 'express';
import { statusResolve } from '../../../utils/status';
import { hasRank } from '../utilities/checkRank.utilites';
import { createPost, createRecomendation } from './global.dao';

export const createNewRecommendation = async (req: Request, res: Response) => {
  if (!req.body.role_member) return res.sendStatus(statusResolve.badRequest);

  if (
    !hasRank(req.body.role_member).administrator() ||
    !hasRank(req.body.role_member).moderator()
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

  if (!hasRank(req.body.role_member).all())
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
