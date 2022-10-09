module.exports = {
  initialize: (Category, Product) => {
    Category.create({
      id: 1,
      category_name: 'Tissus',
    })

    Category.create({
      id: 2,
      category_name: 'Entoillage',
    })

    Category.create({
      id: 3,
      category_name: 'Mercerie',
    })

    Category.create({
      id: 4,
      category_name: 'Fil',
    })

    Category.create({
      id: 5,
      category_name: 'Fermeture',
      parent_id: 3,
    })

    Category.create({
      id: 6,
      category_name: 'Pression',
      parent_id: 3,
    })

    Category.create({
      id: 7,
      category_name: 'Ruban',
      parent_id: 3,
    })

    Category.create({
      id: 8,
      category_name: 'Biais',
      parent_id: 7,
    })

    Category.create({
      id: 9,
      category_name: 'Passepoil',
      parent_id: 7,
    })

    Product.create({
      id: 1,
      product_name: 'Sac à main 1',
    })

    Product.create({
      id: 2,
      product_name: 'Sac à main 2',
    })
  },
}
