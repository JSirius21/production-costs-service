module.exports = {
  initialize: async (Product) => {
    console.log('')
    console.log('Products initializing...')

    await Product.create({
      id: 1,
      product_name: 'Sac à main 1',
    })

    await Product.create({
      id: 2,
      product_name: 'Sac à main 2',
    })
  },
}
