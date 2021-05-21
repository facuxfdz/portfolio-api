const express = require('express');
const router = express.Router();
const ownerInfoController = require('../controller/owner-info-controller');

router.get('/',ownerInfoController.getHeaderInfo);

module.exports = router;