import {NextFunction, Request, Response} from 'express';

export function buildCspMiddleware(): (_: Request, response: Response, next: NextFunction) => void {
  return (_: Request, response: Response, next: NextFunction): void => {
    const csp = `default-src self nonce-${response.locals.cspNonce}`;
    response.append('Content-Security-Policy', csp);
    next();
  }
}
