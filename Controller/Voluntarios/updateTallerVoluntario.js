const pg = require('../../Configuration/pg_connection')

exports.updateTallerVoluntario = async function(req, res) {
console.log(req.body);
let update =
  await pg.func('esperanzadb.ft_proc_actualiza_taller_usuario',
  [
    req.body.id_taller,
    req.body.finalizado,
    req.body.sesiones,
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

res.send('update')
}
