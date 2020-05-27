const express = require('express');
const router  = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.getTamano);
router.get('/:id', Controller.getTamanoID);

module.exports = router;