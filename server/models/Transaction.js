'use strict';
const { Model } = require('sequelize');
const { TRANSACTION_OPERATION_TYPES } = require('../constants');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate (models) {
      // define association here
      Transaction.belongsTo(models.Users, { foreignKey: 'userId' });
    }
  }
  Transaction.init(
    {
      transactionType: {
        type: DataTypes.ENUM(
          TRANSACTION_OPERATION_TYPES.INCOME,
          TRANSACTION_OPERATION_TYPES.EXPENSE
        ),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: 'Transactions',
      timestamps: true,
    }
  );
  return Transaction;
};
