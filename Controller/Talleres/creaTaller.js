const pg = require('../../Configuration/pg_connection')

exports.crearTaller = async function(req, res) {

let insert = await pg.func('esperanzadb.ft_proc_crear_taller',[
   req.body.nombre,
   req.body.sesiones,
   req.body.anios_desde,
   req.body.anios_hasta,
   req.body.encargado
]).catch(err => {
  res.status(500).send({
    error: err,
    status: 500
  });
})

if (res.statusCode != 200) {
  return
}

res.send(insert)
}
