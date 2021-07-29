const express = require('express');
const router = express.Router();

const Staff = require('../../models/Staff');

router.get('/test', (req, res) => res.send('testing Staff routes'));

module.exports = router;
