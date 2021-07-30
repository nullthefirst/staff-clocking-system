const idCreator = require('../custom/idCreator');
const Staff = require('./staffModel');

// staff creation
exports.create = async (req, res) => {
  const _staff = new Staff();
  _staff.name = req.body.name ? req.body.name : _staff.name;
  _staff.staff_id = idCreator(req.body.name ? req.body.name : _staff.name);
  _staff.department = req.body.department;
  _staff.companyEmail = req.body.companyEmail;

  try {
    await _staff.save();
    res.json({
      message: 'New staff member added',
      data: _staff,
    });
  } catch (err) {
    res.json({
      status: 'error',
      body: err,
    });
  }
};

// display staff list
exports.list = async (req, res) => {
  const _staff = await Staff.find();

  try {
    res.json({ message: 'Staff list retrieved', data: _staff });
  } catch (err) {
    res.json({
      status: 'error',
      body: err,
    });
  }
};

// display staff details
exports.details = (req, res) => {
  Staff.findById(req.params.id, (err, _staff) => {
    if (err) {
      res.json({
        message: err.message,
        reason: 'No staff member found',
      });
    }
    res.json({ message: 'Staff member found', data: _staff });
  });
};

// update staff details (name)
exports.update = (req, res) => {
  Staff.findById(req.params.id, (err, _staff) => {
    if (err) {
      res.json({
        status: 'error',
        body: err,
      });
    }

    try {
      _staff.name = req.body.name;
    } catch (error) {
      res.json({
        status: 'error',
        body: err,
      });
    }

    _staff.save((err) => {
      if (err) {
        res.json({
          status: 'error',
          body: err,
        });
      }

      res.json({ message: 'Staff member updated', data: _staff });
    });
  });
};

// staff deletion
exports.fire = (req, res) => {
  Staff.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json({
        status: 'error',
        body: err,
      });
    }
    res.json({ message: 'Staff member deleted' });
  });
};

// register clock-in
exports.inside = async (req, res) => {
  const query = { staff_id: req.params.staff_id };
  const update = { clockIn: Date(Date.now()) };

  let _staff = await Staff.findOneAndUpdate(query, update, { new: true });

  try {
    res.json({ message: 'Staff clocked in', data: _staff });
  } catch (err) {
    res.json({
      status: 'error',
      body: err,
    });
  }
};

// register clock-out
exports.outside = async (req, res) => {
  const query = { staff_id: req.params.staff_id };

  let _staff = await Staff.findOne(query);
  let _staffExit;
  let responseMessage;

  if (_staff.clockIn) {
    const update = { clockOut: Date(Date.now()) };
    _staffExit = await Staff.findOneAndUpdate(query, update, { new: true });
    responseMessage = 'Staff clocked out';
  } else {
    _staffExit = _staff;
    responseMessage = 'Staff needs to clock in first';
  }

  try {
    res.json({ message: responseMessage, data: _staffExit });
  } catch (err) {
    res.json({
      status: 'error',
      body: err,
    });
  }
};
