const express = require("express");
const router = express.Router();
const categoryController = require("./../controllers/category.controller");

router.get("/", categoryController.getAll);

router.get("/:id", categoryController.getOne);

module.exports = router;
