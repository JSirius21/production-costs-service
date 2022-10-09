const db = require('./../models')
const Material = db.material
const ErrorHandler = require('./../utils/error.handler')

const getAll = async (req, res) => {
  try {
    const materials = await Material.findAll({
      attributes: ['id', 'material_name'],
    })
    res.status(200).json(materials)
  } catch (error) {
    ErrorHandler.returnError(error, req, res)
  }
}

const getOne = async (req, res) => {
  try {
    console.log({ productId: req.params.id })
    const material = await Material.findOne({
      attributes: ['id', 'material_name'],
      where: { id: req.params.id },
    })
    res.status(200).json(material)
  } catch (error) {
    ErrorHandler.returnError(error, req, res)
  }
}

module.exports = {
  getAll,
  getOne,
}
