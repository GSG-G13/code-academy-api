import express from 'express';
import { getUploadUrlController } from '../controllers';
import checkAuth from '../middlewares';

const s3Router = express.Router();

s3Router.use(checkAuth);
s3Router.get('/upload-url', getUploadUrlController);

export default s3Router;
