import crypto from 'node:crypto';
import {NextFunction, Request, Response} from 'express';

export function generateNonceMiddleware(): (_:Request, response: Response, next: NextFunction) => void {
  return (_: Request, response: Response, next: NextFunction): void => {
    response.locals.cspNonce = response.locals.cspNonce || crypto.randomUUID();
    next();
  };
}
