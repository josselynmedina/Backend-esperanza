const pg = require('../../Configuration/pg_connection')

exports.selectTalleresFinalizados = async function(req, res) {

  let eventos =
    await pg.func('esperanzadb.ft_proc_get_taller_finalizados').catch(err => {
        res.status(500).send({
          error: err,
          status: 500
    });
  })

  if (res.statusCode != 200) {
    return
  }
  res.send(eventos)

}
