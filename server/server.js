//Archivos de configuracion
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

//MIDDLEWARS
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use( require('./routes/usuario'));



//Conexion a base de datos mongodb
mongoose.connect('mongodb://localhost:27017/apirestinstitucion', { useNewUrlParser: true } , (err, res) => {
  if(err) throw err;
  console.log('Base de datos: ONLINE');

});



//Puerto que se esta escuchando en el servidor
app.listen(process.env.PORT, () =>{
  console.log ('Escuchando el puerto: ', process.env.PORT);
});
