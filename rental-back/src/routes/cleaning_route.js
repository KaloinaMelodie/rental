const express = require('express');
const CleaningController = require('../controller/cleaning_controller');

const router = express.Router();

router.get('/', CleaningController.list_cleaning);

module.exports = router;