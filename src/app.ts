import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import { PORT } from './config';
import router from './routes';
import { clientError, serverError } from './controllers';

const app = express();
app.set('port', PORT || 3000);

app.disable('x-powered-by');

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  compression(),
  cors(corsOptions),
]);

app.use('/api/v1/', router);
app.use(clientError);
app.use(serverError);

export default app;
