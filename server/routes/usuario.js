const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

const Usuario = require('../models/usuario');


app.get('/usuario', (req, res) => {

  res.json('Get Usuario');

});

app.post('/usuario', function (req, res) {
  let body= req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if( err ){
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB
    })
  });
});

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


module.exports = app;
