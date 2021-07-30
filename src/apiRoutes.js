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

router.route('/in/:staff_id').post(staffController.inside);

router.route('/out/:id').post(staffController.outside);

module.exports = router;
