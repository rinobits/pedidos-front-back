// Librerías
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Asignación puerto
const port = 3000;
process.env.URLDB ="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('AllOW', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use('/api/tipoMasa', require('../routes/tipoMasa'));
app.use('/api/saborMasa', require('../routes/saborMasa'));
app.use('/api/cobertura', require('../routes/cobertura'));
app.use('/api/tamano', require('../routes/tamano'));

//Base de datos
mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,useNewUrlParser:true}, (err, res) => { 
	if(err) throw err;
	console.log('Online Database... ');
});

// Ejecución del servidor
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
module.exports = app;
