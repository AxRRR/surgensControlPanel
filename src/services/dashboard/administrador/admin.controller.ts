import { Request, Response } from 'express';
import { statusResolve } from '../../../utils/status';
import { hasRank } from '../utilities/checkRank.utilites';
import { deleteUser, getAllRecomendations, getLastUsers, updateUser } from './admin.dao';

export const adminUpdateUser = async (req: Request, res: Response) => {
  if (!req.body.role_member) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.id) return res.sendStatus(statusResolve.badRequest);

  const { id, role_member } = req.body;

  // Verificamos que el user tenga los permisos para usar ese recurso.
  if (!hasRank(role_member).administrator())
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await updateUser(id, req.body)
    .then(() =>
      res.status(statusResolve.success).json({
        status: true,
        message: 'El usuario fue actualizado con exito.',
      })
    )
    .catch((e: any) =>
      res.status(statusResolve.badRequest).json({
        status: false,
        message: e,
      })
    );
};

export const adminDeleteUser = async (req: Request, res: Response) => {
  if (!req.body.role_member) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.id) return res.sendStatus(statusResolve.badRequest);

  const { id, role_member } = req.body;

  // Verificamos que el user tenga los permisos para usar ese recurso.
  if (!hasRank(role_member).administrator())
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await deleteUser(id)
    .then(() =>
      res.status(statusResolve.success).json({
        status: true,
        message: 'El usuario fue eliminado con exito.',
      })
    )
    .catch((e: any) =>
      res.status(statusResolve.badRequest).json({
        status: false,
        message: e,
      })
    );
};

export const acceptAscent = (req: Request, res: Response) => {
  if (!req.body.member_role) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.response_request)
    return res.sendStatus(statusResolve.badRequest);

  const { member_role, response_request } = req.body;

  if (
    !hasRank(member_role).administrator() ||
    !hasRank(member_role).moderator()
  )
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  // TODO: Agregar todo el sistema de notificaciones
  if (!response_request) {
  }
};

export const getAscents = async(req: Request, res: Response) => {
  if (!req.body.member_role) return res.sendStatus(statusResolve.badRequest);

  if (
    !(
      hasRank(req.body.member_role).administrator() ||
      hasRank(req.body.member_role).moderator() 
    )
  )
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

    await getAllRecomendations()
    .then((data) =>
      res.status(statusResolve.success).json({
        status: true,
        data
      })
    )
    .catch((e: any) =>
      res.status(statusResolve.badRequest).json({
        status: false,
        message: e,
      })
    );
};

export const lastRegistedMember = async (req: Request, res: Response) => {
  if (!req.body.member_role) return res.sendStatus(statusResolve.badRequest);

  if (
    !(
      hasRank(req.body.member_role).administrator() ||
      hasRank(req.body.member_role).moderator() 
    )
  )
    return res.status(statusResolve.success).json({
      status: false,
      message:
        'Este usuario no tiene los permisos necesarios para acceder al recurso',
    });

  await getLastUsers()
    .then((users: any) =>
      res.status(statusResolve.success).json({
        status: true,
        users
      })
    )
    .catch((e: any) =>
      res.status(statusResolve.badRequest).json({
        status: false,
        message: e,
      })
    );
};
