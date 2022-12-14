require('dotenv').config()

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PWD,
//   {
//     host: process.env.DB_URL,
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   }
// );

// module.exports = sequelize;

// sequelize
//   .authenticate()
//   .then(() => console.log("DB connected"))
//   .catch((error) => console.log(error));

module.exports = {
  HOST: process.env.DB_URL,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PWD,
  DB: process.env.DB_NAME,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
