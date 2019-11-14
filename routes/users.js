var express = require('express');
var router = express.Router();
const userController = require('../controller/user')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  userController(req, res, next)
});

module.exports = router;
