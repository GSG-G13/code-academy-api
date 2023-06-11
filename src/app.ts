import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import { PORT } from './config';

const app = express();
app.set('port', PORT || 3000);

app.disable('x-powered-by');

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  compression(),
  cors(),
]);

app.get('/', (req: Request, res: Response) => {
  res.json({
    error: false,
    data: {
      message: 'Happy Hacking! 🚀',
    },
  });
});

export default app;
