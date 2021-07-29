const express = require('express');
const router = express.Router();

const staffController = require('./core/staffController');

router.route('/').get(staffController.list).post(staffController.create);

router
  .route('/:id')
  .get(staffController.details)
  .put(staffController.update)
  .patch(staffController.update)
  .delete(staffController.fire);

module.exports = router;
