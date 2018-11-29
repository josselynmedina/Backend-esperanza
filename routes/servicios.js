var express = require('express');
var router = express.Router();
var controller = require('../Controller/controller');

/* GET listing. */

/* POST listing. */
router.post('/voluntarios/new', controller.crearVoluntario);
router.post('/voluntarios/contacto/new', controller.crearContacto);
router.post('/voluntarios/disponibilidad/new', controller.crearDisponibilidad);
router.post('/voluntarios/habilidades/new', controller.CrearHabilidades);
router.post('/talleres/new', controller.crearTaller);
router.post('/eventos/new', controller.crearEvento);

//update
router.post('/contacto/update', controller.updateContacto);
router.post('/voluntarios/update', controller.updateVoluntario);
router.post('/disponibilidad/update', controller.updateDisponibilidad);
router.post('/habilidades/update', controller.updateHabilidades);

//select
router.get('/voluntario/:id/', controller.selectVoluntario);
router.get('/talleres', controller.selectTalleres);
router.get('/eventos', controller.selectEventos);


module.exports = router;
