const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  staff_id: {
    type: String,
  },
  department: {
    type: String,
  },
  companyEmail: {
    type: String,
  },
  clockIn: {
    type: Date,
  },
  clockOut: {
    type: Date,
  },
});

module.exports = Staff = mongoose.model('staff', StaffSchema);
