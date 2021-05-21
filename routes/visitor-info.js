const express = require('express');
const router = express.Router();
const visitorInfoController = require('../controller/visitor-info-controller');

// Send emailTo doesn't do anything because we don't have a SMTP server to send those emails
router.post('/', visitorInfoController.sendEmailTo);

module.exports = router;