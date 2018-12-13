const pg = require('../../Configuration/pg_connection')

exports.crearVoluntario = async function(req, res) {
  
  let insert =
    await pg.func('esperanzadb.ft_proc_crear_voluntario_complete',
      [
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

  res.send('Creado con exito')
}
//
// {
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
