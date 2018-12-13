const pg = require('../../Configuration/pg_connection')

exports.selectEventos = async function(req, res) {
  let eventos =
    await pg.func('esperanzadb.ft_proc_get_eventos').catch(err => {
        res.status(500).send({
          error: err,
          status: 500
    });
  })

if (res.statusCode != 200) {
  return
}

  res.send(eventos[0]['ft_proc_get_eventos'])

}
