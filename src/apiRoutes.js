const express = require('express');
const router = express.Router();

const staffController = require('./core/staffController');

router.route('/').get(staffController.list);
// .post(staffController.create)

module.exports = router;
