import dotenv from "dotenv";

dotenv.config();

const { PORT, DEV_DB_URL, NODE_ENV,SECRET_KEY,EMAIL,EMAIL_PASSWORD } = process.env;

export { PORT, DEV_DB_URL, NODE_ENV,SECRET_KEY,EMAIL,EMAIL_PASSWORD };

