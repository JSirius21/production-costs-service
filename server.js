require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log("Server started..."));

// DB Connection
require("./config/db.config.js");

// Init routes
const productRouter = require("./routes/products.route");
app.use("/products", productRouter);
