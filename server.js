require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// database
const db = require('./models')
const Category = db.category
const Product = db.product
const Material = db.material

Product.belongsToMany(Material, {
  through: 'product_material',
  as: 'materials',
  foreignKey: 'product_id',
})

Material.belongsToMany(Product, {
  through: 'product_material',
  as: 'products',
  foreignKey: 'material_id',
})

Category.hasMany(Material, { as: 'materials' })
Material.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
})

Category.hasMany(Category, { as: 'children' })
Category.belongsTo(Category, {
  foreignKey: 'parent_id',
  as: 'parent',
})

const Init = require('./config/init/init')
db.sequelize.sync({ force: true }).then(async () => {
  console.log('Drop and Resync Database with { force: true }')
  await Init.categories.initialize(Category)
  await Init.materials.initialize(Material)
  await Init.products.initialize(Product)
})

app.listen(3000, () => console.log('Server started...')) 

// Init routes
const productsRouter = require('./routes/products.route')
app.use('/products', productsRouter)

const categoriesRouter = require('./routes/categories.route')
app.use('/categories', categoriesRouter)

const materialsRouter = require('./routes/materials.route')
app.use('/materials', materialsRouter)
