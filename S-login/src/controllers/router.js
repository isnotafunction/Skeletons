const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const home = require('./home');
const register = require('./register');
const registerUser = require('./registerUser');
const login = require('./login');
const error = require('./error');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', home.get);
// router.get('/register', register.get);
// router.get('/login', login.get);
// router.post('/register', registerUser.post);
// router.post('/login', login.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
