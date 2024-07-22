const express = require('express');
const router = express.Router();
const { getAirdropInfo, claimAirdrop, addAirdropPoints } = require('../controllers/airdropController');

router.get('/:userId', getAirdropInfo);
router.post('/claim/:userId', claimAirdrop);
router.post('/add', addAirdropPoints);

module.exports = router;
