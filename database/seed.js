const faker = require('faker');
const db = require('./Coffee.js');

function createSampleData() {
  const orders = [];

  for (let i = 1; i <= 50; i++) {
    const order = {};

    order.order_id = i;
    order.coffee = faker.random.words();
    order.method = faker.random.words();
    order.cases = faker.random.number({ min: 10, max: 50 });
    order.packets = faker.random.number({ min: 10, max: 50 });
    order.shipDate = faker.date.past();
    order.priority = faker.random.boolean();
    order.orderNum = faker.random.number({ min: 30000, max: 60000 });

    orders.push(order);
  }

  return orders;
}

const insertSampleData = () => {
  db.create(createSampleData());
};

insertSampleData();
