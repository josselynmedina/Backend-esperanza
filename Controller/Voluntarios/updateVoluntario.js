const pg = require('../../Configuration/pg_connection')

exports.updateVoluntario = async function(req, res) {

  let update =
    await pg.func('esperanzadb.ft_proc_actualiza_voluntario',
      [
        req.body.id_registro,
        req.body.nombre,
        req.body.sexo,
        req.body.correo,
        req.body.direccion,
        req.body.celular,
        req.body.telefono,
        req.body.fecha_nacimiento,
        req.body.profesion,
        req.body.id_estado_civil
      ]).catch(err => {
        res.status(500).send({
          error: err,
          status: 500
    });
  })

if (res.statusCode != 200) {
  return
}

  res.send('Actualizado')
}
//
// {
// "id_registro":1,
// 	"nombre": "Juan Perez2",
// 	"sexo": "M",
// 	"correo": "juan@juan.com",
// 	"direccion": "calle 3 casa 4",
// 	"celular":"988787",
// 	"telefono":"9878798",
// 	"fecha_nacimiento":"2015-12-25",
// 	"profesion":"estudiante",
// 	"id_estado_civil":"1"
// }
