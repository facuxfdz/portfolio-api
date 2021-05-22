const express = require('express');
const router = express.Router();
const ownerInfoController = require('../controller/owner-info-controller');

router.get('/',ownerInfoController.getInfo);

router.post('/', ownerInfoController.createInfo);

router.put('/', ownerInfoController.updateInfo);
module.exports = router;