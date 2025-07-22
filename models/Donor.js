const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  bloodGroup: { type: String },
  city: { type: String, required: true },
  contact: { type: String },
  dob: { type: String }
});

module.exports = mongoose.model('Donor', donorSchema);
