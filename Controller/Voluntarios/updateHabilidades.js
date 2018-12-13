const pg = require('../../Configuration/pg_connection')

exports.updateHabilidades = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_actualiza_habilidad',
  [
    req.body[0].id_registro,
    JSON.stringify(req.body)
  ]).catch(err => {
  res.status(500).send({
    error: err,
    status: 500
  });
})

if (res.statusCode != 200) {
  return
}

res.send(insert[0]['ft_proc_actualiza_habilidad'])
}
