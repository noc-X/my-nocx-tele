const express = require('express');
const router = express.Router();
const { getPresaleInfo, buyTokens } = require('../controllers/presaleController');

router.get('/info', getPresaleInfo);
router.post('/buy', buyTokens);

module.exports = router;
