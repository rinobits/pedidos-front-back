const express = require('express');
const router  = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.getCobertura);
router.get('/:id', Controller.getCoberturaID);

module.exports = router ;