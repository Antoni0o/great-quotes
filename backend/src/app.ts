import 'express-async-errors';

import cors from 'cors';
import express from 'express';

import { router } from './routes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorMiddleware)

app.listen(4000, () => {
  console.log('App is runing on port 4000!');
});
