const pg = require('../../Configuration/pg_connection')

exports.crearDisponibilidad = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_crear_disponibilidad',
  [
    req.body.id_registro,
    req.body.dia,
    req.body.desde,
    req.body.hasta,
    req.body.nota
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
