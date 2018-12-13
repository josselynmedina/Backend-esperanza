const pg = require('../../Configuration/pg_connection')

exports.selectVoluntario = async function(req, res) {

  let voluntario =
    await pg.func('esperanzadb.ft_proc_get_voluntario_by_id', [req.params.id]).catch(err => {
        res.status(500).send({
          error: err,
          status: 500
    });
  })

if (res.statusCode != 200) {
  return
}

  res.send(voluntario[0]['ft_proc_get_voluntario_by_id'][0])

}
