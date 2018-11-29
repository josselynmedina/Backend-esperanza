const pg = require('../../Configuration/pg_connection')

exports.updateDisponibilidad = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_actualiza_disponibilidad',
  [
    req.body.id_disponibilidad,
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

res.send('update')
}
