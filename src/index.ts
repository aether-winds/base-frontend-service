import express from 'express';
import { ContentSecurityPolicyMiddleware } from './middleware';
import { test1 } from './routes/test1';
import { test2 } from './routes/test2';

const app = express();
// app.use(ContentSecurityPolicyMiddleware);

app.use('/test1', test1);
app.use('/test2', test2);

app.listen(3000);
