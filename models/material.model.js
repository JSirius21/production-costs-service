module.exports = (sequelize, Sequelize) => {
    const Material = sequelize.define(
      'material',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        material_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        freezeTableName: true,
      }
    )
  
    return Material
  }
  