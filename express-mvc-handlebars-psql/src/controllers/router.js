const express = require('express');
const router = express.Router();
const error = require('./error');

const bodyParser = require('body-parser');

const something = require('./something');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', something.get);

router.use(error.client);
router.use(error.server);
module.exports = router;
