const express = require('express');
const router = express.Router();
const { submitPartnership } = require('../controllers/partnershipController');

router.post('/', submitPartnership);

module.exports = router;
