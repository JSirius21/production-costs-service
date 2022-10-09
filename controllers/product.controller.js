const db = require('./../models')
const Product = db.product
const ErrorHandler = require('./../utils/error.handler')

const getAll = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'product_name'],
    })
    res.status(200).json(products)
  } catch (error) {
    ErrorHandler.returnError(error, req, res)
  }
}

const getOne = async (req, res) => {
  try {
    console.log({ productId: req.params.id })
    const product = await Product.findOne({
      attributes: ['id', 'product_name'],
      where: { id: req.params.id },
    })
    res.status(200).json(product)
  } catch (error) {
    ErrorHandler.returnError(error, req, res)
  }
}

module.exports = {
  getAll,
  getOne,
}
