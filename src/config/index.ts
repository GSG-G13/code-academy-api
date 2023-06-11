import dotenv from 'dotenv';

dotenv.config();

const { PORT, DEV_DB_URL, NODE_ENV } = process.env;

export { PORT, DEV_DB_URL, NODE_ENV };
