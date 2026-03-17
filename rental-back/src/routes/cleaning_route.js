const express = require('express');
const CleaningController = require('../controller/cleaning_controller');
const {asyncHandler} = require('../middleware/error-handler');

const router = express.Router();

router.get('/', asyncHandler(CleaningController.list_cleaning));

module.exports = router;