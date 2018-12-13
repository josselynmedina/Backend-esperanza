const pg = require('../../Configuration/pg_connection')

exports.CrearHabilidades = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_crea_habilidades_voluntarios',
  [
    req.body.id_registro,
    req.body.id_habilidad_conf,
    req.body.comentario
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
