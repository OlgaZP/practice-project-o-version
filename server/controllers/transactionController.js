const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.getTransactions = async (req, res, next) => {
  const {
    tokenData: { userId },
  } = req;
  try {
    const transactions = await db.Transactions.findAll({
      where: { userId },
      raw: true,
      attributes: { exclude: ['updatedAt', 'userId'] },
      order: [['id', 'DESC']],
    });
    res.status(200).send(transactions);
  } catch (err) {
    next(new ServerError());
  }
};
