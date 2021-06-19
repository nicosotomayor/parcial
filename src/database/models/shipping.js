'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //hasOne
      Shipping.hasOne(Address,{
        foreignKey:'address_id',
        as:'addresses'
      })
      // belongsToOne
      Shipping.belongsTo(Order)
    }
  }
  Shipping.init({
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    address_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};