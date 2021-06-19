'use strict';
const {
  Model
} = require('sequelize');
const order = require('./order');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      State.belongsTo(Order)
    }
  }
  State.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};