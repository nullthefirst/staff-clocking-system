const idCreator = require('../custom/idCreator');
const Staff = require('./staffModel');

// staff creation

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

// update staff details (name)

// register clock-in

// register clock-out
