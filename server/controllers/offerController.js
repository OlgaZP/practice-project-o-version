const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.getOffers = async (req, res, next) => {
  try {
    const foundOffers = await db.Offers.findAll({
      raw: true,
      attributes: ['text', 'status'],
    });

    if (foundOffers) {
      res.status(200).send(foundOffers);
    } else {
      res.status(404).send('Offers not found');
    }
  } catch (err) {
    next(new ServerError(err));
  }
};
