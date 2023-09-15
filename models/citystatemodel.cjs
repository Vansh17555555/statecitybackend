const fs = require('fs');
const mongoose = require('mongoose');

// Define the Mongoose model for the data
const stateSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  cities: [
    {
      type: String,
      required: true
    }
  ]
});

const State = mongoose.model('State', stateSchema);

// Export the State model
module.exports = State;
