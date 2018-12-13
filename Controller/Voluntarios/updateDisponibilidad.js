const pg = require('../../Configuration/pg_connection')

exports.updateDisponibilidad = async function(req, res) {

let insert =
  await pg.func('esperanzadb.ft_proc_actualiza_disponibilidad_voluntario',
  [
    JSON.stringify(req.body)
  ]).catch(err => {
  res.status(500).send({
    error: err,
    status: 500
  });
  console.log(err);
})

if (res.statusCode != 200) {
  return

}
console.log(req.body);
res.send(insert[0]['ft_proc_actualiza_disponibilidad_voluntario'])
}
