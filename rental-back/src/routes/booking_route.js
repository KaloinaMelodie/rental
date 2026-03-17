const express = require('express');
const BookingController = require('../controller/booking_controller');

const router = express.Router();

router.get('/', BookingController.booking_all);

module.exports = router;