const express = require('express');
const api = express.Router();
const Controller = require('../controllers/controller');
// tipo de masa
api.get('/tipoMasa', Controller.getTipoMasa);
api.get('/tipoMasa/:id', Controller.getTipoMasaID);
//sabor de masass
api.get('/saborMasa', Controller.getSaborMasa);
api.get('/saborMasa/:id', Controller.getSaborMasaID);
// Cobertura
api.get('/cobertura', Controller.getCobertura);
api.get('/cobertura/:id', Controller.getCoberturaID);
// hora
api.get('/hora', Controller.getHora);
api.get('/hora/:id', Controller.getHoraID);
//tamaño
api.get('/tamano', Controller.getTamano);
api.get('/tamano/:id', Controller.getTamanoID);

module.exports = api;