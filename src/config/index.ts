import dotenv from "dotenv";

dotenv.config();

const { PORT, DEV_DB_URL, NODE_ENV ,email, password } = process.env;

export { PORT, DEV_DB_URL, NODE_ENV  ,email, password};
