const idCreator = require('../custom/idCreator');
const Staff = require('./staffModel');

// staff creation
exports.create = async (req, res) => {
  const _staff = new Staff();
  _staff.name = req.body.name ? req.body.name : _staff.name;
  _staff.email = idCreator(req.body.name ? req.body.name : _staff.name);
  _staff.clockIn = req.body.clockIn;
  _staff.clockOut = req.body.clockOut;

  try {
    await _staff.save();
    res.json({
      message: 'New staff member added',
      data: _staff,
    });
  } catch (err) {
    res.json(err);
  }
};

// display staff list
exports.list = async (req, res) => {
  const _staff = await Staff.find();

  try {
    res.json({ message: 'Staff list retrieved', data: _staff });
  } catch (err) {
    res.json(err);
  }
};

// display staff details
exports.details = (req, res) => {
  Staff.findById(req.params.id, (err, _staff) => {
    if (err) {
      res.json({
        dbError: err,
        message: 'No staff member matching credential found',
      });
    }
    res.json({ message: 'Staff member found', data: _staff });
  });
};

// update staff details (name)
exports.update = async (req, res) => {
  Staff.findById(req.params.id, (err, _staff) => {
    if (err) {
      res.json(err);
    }

    try {
      _staff.name = req.body.name;
    } catch (error) {
      res.json(err);
    }

    _staff.save((err) => {
      if (err) {
        res.json(err);
      }

      res.json({ message: 'Staff member updated', data: _staff });
    });
  });
};

// register clock-in

// register clock-out
