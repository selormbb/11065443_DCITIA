const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  // Add other properties specific to the Doctor model
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;