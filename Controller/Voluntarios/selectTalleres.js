const pg = require('../../Configuration/pg_connection')

exports.selectTalleres = async function(req, res) {
  let talleres =
    await pg.func('esperanzadb.ft_proc_get_talleres').catch(err => {
        res.status(500).send({
          error: err,
          status: 500
    });
  })

if (res.statusCode != 200) {
  return
}

  res.send(talleres[0]['ft_proc_get_talleres'])

}
