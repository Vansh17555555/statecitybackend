const fs = require('fs');
const mongoose = require('mongoose');
const mongodb=require('mongodb')
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

// Provide your MongoDB Atlas connection string here
const DB_URI = "mongodb+srv://vvansh739:12345678Rt.@cluster0.8c97igz.mongodb.net/?retryWrites=true&w=majority"
async function importData() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Read the JSON file
    const rawData = fs.readFileSync('cities.json', 'utf-8');
    const statesData = JSON.parse(rawData);

    // Insert the data into the MongoDB collection
    await State.insertMany(statesData);

    console.log('Data successfully loaded!');
  } catch (error) {
    console.error('Data import failed:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

async function deleteData() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Delete all data from the collection
    await State.deleteMany();

    console.log('Data successfully deleted!');
  } catch (error) {
    console.error('Data deletion failed:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Check for the command line argument
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('Usage: node script.js --import (to import data) or --delete (to delete data)');
}
