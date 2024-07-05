const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airportController');

router.get('/airport/:iataCode', airportController.getAirportByIataCode);

module.exports = router;
