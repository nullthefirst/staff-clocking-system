const express = require('express');
const router = express.Router();

const staffController = require('./core/staffController');

router.route('/').get(staffController.list).post(staffController.create);

router.route('/:id').get(staffController.details);

module.exports = router;
