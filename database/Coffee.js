let mongoose = require('mongoose');
const { Schema } = mongoose;
const keys = require('../config/keys');

mongoose.connect(
  keys.mongoUri,
  { useNewUrlParser: true },
  () => console.log('Db has connected!')
);

const coffeeSchema = new Schema({
  order_id: { type: Number, index: true, unique: true },
  coffee: String,
  method: String,
  cases: Number,
  packets: Number,
  shipDate: Date,
  priority: { type: Boolean, default: false },
  orderNum: Number,
});

const Coffee = mongoose.model('coffee', coffeeSchema);

module.exports = Coffee;
