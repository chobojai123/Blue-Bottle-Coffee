const faker = require('faker');
const mongoose = require('mongoose');
const Coffee = require('../database/Coffee');

module.exports = app => {
  app.get('/api/orders', async (req, res) => {
    const orders = await Coffee.find().sort({ shipDate: 1 });

    res.status(200).send(orders);
  });

  app.post('/api/orders', async (req, res) => {
    const { coffee, method, shipDate, cases, packets, priority } = req.body;

    const order = new Coffee({
      order_id: faker.random.number({ min: 1000, max: 2000 }),
      coffee,
      method,
      cases,
      packets,
      shipDate,
      priority,
      orderNum: faker.random.number({ min: 30000, max: 60000 }),
    });

    try {
      await order.save();
      await res.status(200).send('posted');
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
