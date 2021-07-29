const express = require('express');
const router = express.Router();

const Staff = require('../../models/Staff');

router.get('/test', (req, res) => res.send('testing Staff routes'));

// get list of staff
router.get('/', (req, res) => {
  Staff.find()
    .then((staff) => res.json(staff))
    .catch((err) => res.status(404).json({ err: err + 'No staff found' }));
});

// add staff details
router.post('/', (req, res) => {
  console.log(req.body);
  Staff.create()
    .then((staff) => res.json({ message: 'Staff added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: err + 'Unable to add staff' }),
    );
});

router.get('/:id', (req, res) => {
  Staff.findById(req.params.id)
    .then((staff) => res.json(staff))
    .catch((err) => {
      res.status(404).json({ error: err + 'No staff found' });
    });
});

router.put('/:id', (req, res) => {
  Staff.findByIdAndUpdate(req.params.id)
    .then((staff) => res.json({ message: 'Staff updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: err + 'Unable to update staff details' }),
    );
});

router.delete('/:id', (req, res) => {
  Staff.findByIdAndDelete(req.params.id)
    .then((staff) => res.json({ message: 'Staff info deleted successfully' }))
    .catch((err) => res.status(404).json({ error: err + 'Staff not found' }));
});

module.exports = router;
