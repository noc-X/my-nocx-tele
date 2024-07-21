const express = require('express');
const router = express.Router();
const { getTasks, completeTask, addTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/complete', completeTask);
router.post('/', addTask);

module.exports = router;
