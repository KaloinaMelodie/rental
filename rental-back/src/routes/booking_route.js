const express = require('express');
const BookingController = require('../controller/booking_controller');
const {asyncHandler} = require('../middleware/error-handler');

const router = express.Router();

router.get('/', asyncHandler(BookingController.booking_all));
module.exports = router;