const express = require('express');
const router  = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.getSaborMasa);
router.get('/:id', Controller.getSaborMasaID);

module.exports = router ;