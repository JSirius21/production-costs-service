module.exports = {
  initialize: async (Material) => {
    console.log('')
    console.log('Materials initializing...')

    await Material.create({
      id: 1,
      material_name: 'Tissus 1',
      category_id: 1,
    })

    await Material.create({
      id: 2,
      material_name: 'Tissus 2',
      category_id: 1,
    })
  },
}
