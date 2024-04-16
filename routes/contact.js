const express = require('express');

const contactController = require('../controllers/contactus');

const router = express.Router();

router.get('/contactus',contactController.getContactUs);

router.post('/contactus',contactController.postContactUs);

module.exports = router;