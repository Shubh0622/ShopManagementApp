const express = require('express');

const contactController = require('../controllers/contactus');

const router = express.Router();

router.get('/success',contactController.contactSuccess);

module.exports = router;