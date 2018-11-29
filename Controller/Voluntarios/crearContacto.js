const pg = require('../../Configuration/pg_connection')

exports.crearContacto = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_crear_contacto_voluntario',
  [
    req.body.id_registro,
    req.body.nombre,
    req.body.id_parentesco,
    req.body.telefono
  ]).catch(err => {
  res.status(500).send({
    error: err,
    status: 500
  });
})

if (res.statusCode != 200) {
  return
}

res.send('creado')
}
