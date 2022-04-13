import { Request, Response } from 'express';
import {
  createUser,
  getUser,
  loginUser,
  validateTag,
  verificationUserEmail,
} from './dao';
import { statusResolve } from '../../utils/status';
import transport from '../../config/config.mailer';
import { VerificationCode } from './utilities';
import { DataUser } from './types';

// TODO: Agregar todos los tipos

export const createMember = async (req: Request, res: Response) => {
  if (!req.body.name_member) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.tag_member) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.password_member)
    return res.sendStatus(statusResolve.badRequest);

  createUser(req.body)
    .then((data: any) => {
      sendConfirmMail(
        data.member_info.name_member,
        data.member_info.email_member,
        data.member_info.verification_code
      );
      res.status(statusResolve.success).json({
        status: true,
        data,
      });
    })
    .catch((error: any) => {
      res.status(statusResolve.success).json({
        status: false,
        error,
      });
    });
};

export const sendConfirmMail = async (
  name: string,
  email: string,
  code: string
) => {
  await transport.sendMail({
    from: '"New Surgens" newsurgens.royale@gmail.com',
    to: email,
    subject: 'Confirmación de tu correo electronico',
    html: `
            <div style='
                text-align: center;
            '>
                <h1>¡Hola ${name} gracias por registrarte en Surgens!</h1>
                <h2>Este es tu código de verificación</h2>
                <p>Este es tu código de verificación</p>
                <h3>${code}</h3>
            </div>
            <br>
            <br>
            <hr>
            <div style='
                text-align: right;
            '>
                <p>Clan New Surgens 2022</p>
            </div>
        
        `,
  });
};

export const reSendMail = (req: Request, res: Response) => {
  sendConfirmMail(
    req.body.name_member,
    req.body.email_member,
    VerificationCode
  );

  res.status(statusResolve.success).json({
    status: true,
    message: 'El código de verificación fue reenviado.',
  });
};

export const autoLogin = (req: Request, res: Response) => {
  if (!req.body.id) return res.sendStatus(statusResolve.badRequest);

  getUser(req.body.id)
    .then(
      ({ _id, tag_member, name_member, role_member, email_member }: any) => {
        res.status(statusResolve.success).json({
          status: true,
          data: {
            _id,
            tag_member,
            name_member,
            role_member,
            email_member,
          },
        });
      }
    )
    .catch((error: any) => {
      res.status(statusResolve.badRequest).json({
        status: false,
        error,
      });
    });
};

export const emailVerification = (req: Request, res: Response) => {
  verificationUserEmail(req.body, req.body.code)
    .then(() => {
      res.status(statusResolve.success).json({
        status: true,
        message: 'Se realizo correctamente la confirmación de correo.',
      });
    })
    .catch((error: any) => {
      res.status(statusResolve.success).json({
        status: false,
        message: error,
      });
    });
};

export const loginMember = async (req: Request, res: Response) => {
  if (!req.body.name_member) return res.sendStatus(statusResolve.badRequest);
  if (!req.body.password_member)
    return res.sendStatus(statusResolve.badRequest);

  loginUser(req.body)
    .then((data: any) => {
      res.status(statusResolve.success).json({
        status: true,
        data,
      });
    })
    .catch((error: any) => {
      res.status(statusResolve.success).json({
        status: false,
        error,
      });
    });
};

export const validateMemberTag = async (req: Request, res: Response) => {
  if (!req.body.tag) return res.sendStatus(statusResolve.badRequest);

  validateTag(req.body)
    .then((data: any) => {
      res.status(statusResolve.success).json({
        status: true,
        message: data,
      });
    })
    .catch((error: any) => {
      res.status(statusResolve.success).json({
        status: false,
        error,
      });
    });
};
