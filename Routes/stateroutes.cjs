const express = require('express');
const router = express.Router();
const controller = require('./../controllers/controller.cjs');

// Define a route to retrieve all data
router.get('/',controller.getAllData);

module.exports = router;
