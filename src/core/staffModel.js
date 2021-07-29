const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clockIn: {
    type: Date,
  },
  clockOut: {
    type: Date,
  },
});

module.exports = Staff = mongoose.model('staff', StaffSchema);
