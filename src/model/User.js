const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: { type: String, default: 'no name' },
  age: { type: Number, min: 18 },
  job: { type: String, default: 'no job' },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('user', User);