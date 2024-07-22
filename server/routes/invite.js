const express = require('express');
const router = express.Router();
const { generateInviteLink, getInvites } = require('../controllers/inviteController');

router.post('/generate', generateInviteLink);
router.get('/:telegramId', getInvites);

module.exports = router;
