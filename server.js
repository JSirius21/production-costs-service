require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");
const Category = db.category;
const Product = db.product;
const Init = require("./config/init-db")

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Database with { force: true }");
  Init.initialize(Category, Product);
});

app.listen(3000, () => console.log("Server started..."));

// // DB Connection
// require("./config/db.config.js");

// Init routes
const productsRouter = require("./routes/products.route");
app.use("/products", productsRouter);

const categoriesRouter = require("./routes/categories.route");
app.use("/categories", categoriesRouter);

