import express, {NextFunction, Request, Response} from 'express';
import {join} from 'node:path';

const app = express();
app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));
app.use('/static', express.static(join(__dirname, 'assets')));
app.get('/', (_: Request, response: Response): void => {
  response.render('index');
});

export const test1 = app;
