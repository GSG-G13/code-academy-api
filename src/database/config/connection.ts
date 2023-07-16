import { Pool } from 'pg';

import { DEV_DB_URL, DATABASE_URL, NODE_ENV } from '../../config';

const options = {
  connectionString: NODE_ENV === 'production' ? DATABASE_URL : DEV_DB_URL,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(options);

export default connection;
