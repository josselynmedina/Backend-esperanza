const pg = require('../../Configuration/pg_connection')

exports.voluntariosSearch = async function(req, res) {
  let voluntarios =
    await pg.func('esperanzadb.ft_search_voluntario').catch(err => {
        res.status(500).send({
          error: err,
          status: 500
    });
  })

if (res.statusCode != 200) {
  return
}

  res.send(voluntarios);

}
