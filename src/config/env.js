import dotenv from "dotenv";

dotenv.config();

export const SERVER_HOST = process.env.SERVER_HOST;
export const SERVER_PORT = process.env.SERVER_PORT;
export const SERVER_STATIC_URL = process.env.SERVER_STATIC_URL;
export const FILE_DIR = process.env.FILE_DIR;
