'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //hasOne
      Order.hasOne(Shipping,{
        foreignKey:'shipping_id',
        as:'shippings'
      });
      Order.hasOne(Payment,{
        foreignKey:'payment_id',
        as:'payments'
      });
      Order.hasOne(State,{
        foreignKey:'state_id',
        as:'states'
      });
      //belongsToOne
      Order.belongsTo(User,{
        foreignKey:'user_id'
      });
      // hasMany
      Order.hasMany(OrderDetail, {
        foreignKey: 'order_id',
        as: "orderDetails"
      })

    }

  }
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    shipping_id: DataTypes.INTEGER,
    state_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};