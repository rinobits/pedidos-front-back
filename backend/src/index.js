// Librerías
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const api = require('../routes');
// Asignación puerto
const port = 3000;
process.env.URLDB ="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', api);
mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,useNewUrlParser:true},
	(err, res) => { 
		if(err) throw err;
		console.log('Online Database... ');
	});

// Ejecución del servidor
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
module.exports = app;