'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // hasMany
     Province.hasMany(Address,{
        foreignKey: 'Province_id',
        as:'addresses'})
    }
  }
 Province.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Province',
  });
  return Province;
};