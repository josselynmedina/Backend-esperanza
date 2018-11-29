const pg = require('../../Configuration/pg_connection')

exports.updateContacto = async function(req, res) {

let update =
  await pg.func('esperanzadb.ft_proc_actualiza_contacto',
  [
    req.body.id_contacto,
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

res.send('update')
}
