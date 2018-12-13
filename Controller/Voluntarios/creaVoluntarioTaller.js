const pg = require('../../Configuration/pg_connection')

exports.creaVoluntarioTaller = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_crea_taller_voluntario',
  [
    req.body.id_taller,
    req.body.id_registro
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
