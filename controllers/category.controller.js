const db = require("./../models");
const Category = db.category;
const ErrorHandler = require("./../utils/error.handler");

const getAll = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "category_name", "parent_id"],
    });
    res.status(200).json(categories);
  } catch (error) {
    ErrorHandler.returnError(error, req, res);
  }
};

const getOne = async (req, res) => {
  try {
    console.log({ productId: req.params.id });
    const category = await Category.findOne({
      attributes: ["id", "category_name", "parent_id"],
      where: { id: req.params.id },
    });
    res.status(200).json(category);
  } catch (error) {
    ErrorHandler.returnError(error, req, res);
  }
};

module.exports = {
  getAll,
  getOne,
};
