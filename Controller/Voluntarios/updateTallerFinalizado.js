const pg = require('../../Configuration/pg_connection')

exports.updateTallerFinalizado = async function(req, res) {

let update =
  await pg.func('esperanzadb.ft_proc_update_taller_finalizado ',
  [
    req.body.id_taller,
    req.body.finalizado
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
