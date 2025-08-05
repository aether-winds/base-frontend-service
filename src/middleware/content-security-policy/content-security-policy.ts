import {randomUUID} from 'node:crypto';
import {NextFunction, Request, Response, Router} from 'express';

const router: Router = Router();

router.use((_: Request, response: Response, next: NextFunction): void => {
  const nonceValue = response.locals.nonceValue = randomUUID();
  response.append('Content-Security-Policy', `
    object-src 'none';
    script-src 'nonce-${nonceValue}' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;
    base-src 'none';
    report-uri /csp-report;  
  `.trim());
  next();
});

router.route('/csp-report')
  .post((request: Request, response: Response, next: NextFunction): void => {
    console.log(request);
    console.log(response);
    response.status(200);
    response.write('OK');
    next();
  });

export const ContentSecurityPolicyMiddleware = router;
