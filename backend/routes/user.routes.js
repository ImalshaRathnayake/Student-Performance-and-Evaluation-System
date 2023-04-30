const express = require('express')

const router = express.Router();

const { checkAuth } = require('../middlewares/authCheck');

// const { validate } = require('../middlewares/validation')
const { createUserSchema } = require('../validators/user.validator')


const { test, test2 } = require('../controllers/user.controller')

router.post('/', test)

router.get('/', checkAuth, test2)

module.exports = router;

