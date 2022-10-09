module.exports = {
  initialize: async (Category) => {
    console.log('')
    console.log('Categories initializing...')

    await Category.create({
      id: 1,
      category_name: 'Tissus',
    })

    await Category.create({
      id: 2,
      category_name: 'Entoillage',
    })

    await Category.create({
      id: 3,
      category_name: 'Mercerie',
    })

    await Category.create({
      id: 4,
      category_name: 'Fil',
    })

    await Category.create({
      id: 5,
      category_name: 'Fermeture',
      parent_id: 3,
    })

    await Category.create({
      id: 6,
      category_name: 'Pression',
      parent_id: 3,
    })

    await Category.create({
      id: 7,
      category_name: 'Ruban',
      parent_id: 3,
    })

    await Category.create({
      id: 8,
      category_name: 'Biais',
      parent_id: 7,
    })

    await Category.create({
      id: 9,
      category_name: 'Passepoil',
      parent_id: 7,
    })
  },
}
