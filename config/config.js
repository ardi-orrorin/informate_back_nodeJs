import dotenv from "dotenv";
dotenv.config();

export default {
  "dev": {
    "username": process.env.SEQUELIZE_USERNAME,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.SEQUELIZE_DATABASE,
    "host": process.env.SEQUELIZE_HOST,
    "port": process.env.SEQUELIZE_PORT,
    "dialect": process.env.SEQUELIZE_DIALECT,
  },
  "build": {
    "username": process.env.SEQUELIZE_USERNAME,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.SEQUELIZE_DATABASE,
    "host": process.env.SEQUELIZE_HOST,
    "port": process.env.SEQUELIZE_PORT,
    "dialect": process.env.SEQUELIZE_DIALECT,
  }
}
