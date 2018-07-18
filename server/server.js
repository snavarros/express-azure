//Archivos de configuracion
require('./config/config');
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
//MIDDLEWARS
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get('/usuario', (req, res) => {

  res.json('Get Usuario');

});

app.post('/usuario', function (req, res) {
  let body= req.body;
  if ( body.nombre === undefined ){
    res.status(400).json({
      ok:false,
      mensaje: 'El body es undefined'
    });
  } else{
      res.json({
        body
      });
  }
})

//PUT PATCH actualizar datos
app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  })
})


app.delete('/usuario', function (req, res) {
  res.send('Delete Eduardo')
})



app.listen(process.env.PORT, () =>{
  console.log ('Escuchando el puerto: ', process.env.PORT);
});