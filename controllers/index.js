/* Dependencies */
const express = require('express');
const router = express.Router();

/* Enabling other controllers */
router.use('/', require('./pages'));

module.exports = router;
