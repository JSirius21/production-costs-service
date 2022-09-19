const Sequelize = require("sequelize");
const sequelize = require("./../config/db.config.js");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;
