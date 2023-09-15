const express=require('express')
const State = require('./../models/citystatemodel.cjs'); // Import your Mongoose model
// Controller function to retrieve all data
exports.getAllData = async (req, res) => {
    try {
      const data = await State.find(); // Retrieve all documents from the "State" collection
      res.json(data); // Send the data as a JSON response
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
  
