const express = require('express');
const router = express.Router();
const { getUserAirdrop, claimAirdrop } = require('../controllers/airdropController');

router.get('/:telegramId', getUserAirdrop);
router.post('/claim', claimAirdrop);

module.exports = router;
