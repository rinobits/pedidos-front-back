const express = require('express');
const router  = express.Router();
const ctrlTipoMasa = require('../controllers/tipoMasa');

router.get('/', ctrlTipoMasa.getTipoMasa);
router.get('/:id', ctrlTipoMasa.getTipoMasaID);

module.exports = router;