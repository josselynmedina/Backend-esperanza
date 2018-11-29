const pg = require('../../Configuration/pg_connection')

exports.updateHabilidades = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_actualiza_habilidad',
  [
    req.body.id_habilidad,
    req.body.activa
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
