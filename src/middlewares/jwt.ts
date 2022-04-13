import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      uid: string;
      name: string;
    }
  }
}

declare var process: {
  env: {
    SECRET_JWT_SEED: string;
  };
};

export type MiddlewareJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const isValidJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('accessJWT');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No contiene ningún accesstoken.',
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED) as {
      uid: string;
      name: string;
    };

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token invalido.',
    });
  }

  next();
};

export default isValidJWT;
