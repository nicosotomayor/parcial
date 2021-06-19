'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsToOne
      Address.belongsTo(Province,{
        foreignKey:'province_id'
      });
      Address.belongsTo(User,{
        foreignKey:'address_id'
      });
      Address.belongsTo(Shipping,{
        foreignKey:'address_id'
      });
    }
  }
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};