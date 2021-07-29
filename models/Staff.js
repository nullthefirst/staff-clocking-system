const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  staff_id: {
    type: String,
    required: true,
  },
  clockIn: {
    type: Date,
    default: Date.now,
  },
  clockOut: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Staff = mongoose.model('staff', StaffSchema);
