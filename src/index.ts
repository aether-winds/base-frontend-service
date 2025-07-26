import { join } from 'node:path';
import express, { Application } from 'express';
import { buildCspMiddleware, generateNonceMiddleware } from './middleware';

const app = express();

// Template engine
app.set('view engine', 'hbs');

// Middleware
app.use(generateNonceMiddleware());
app.use(buildCspMiddleware());
app.disable('x-powered-by');

export default app as Application;
