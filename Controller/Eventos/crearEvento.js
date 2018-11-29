const pg = require('../../Configuration/pg_connection')

exports.crearEvento = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_crea_eventos',
  [
   req.body.nombre,
   req.body.fecha_inicio,
   req.body.fecha_fin,
   req.body.encargado,
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
