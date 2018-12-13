var express = require('express');
var router = express.Router();
var controller = require('../Controller/controller');

/* GET listing. */

/* POST listing. */
router.post('/voluntarios/new', controller.crearVoluntario);
router.post('/voluntarios/contacto/new', controller.crearContacto);
router.post('/voluntarios/disponibilidad/new', controller.crearDisponibilidad);
router.post('/voluntarios/habilidades/new', controller.CrearHabilidades);
router.post('/voluntarios/newTaller', controller.creaVoluntarioTaller);
router.post('/talleres/new', controller.crearTaller);
router.post('/eventos/new', controller.crearEvento);

//update
router.post('/contacto/update', controller.updateContacto);
router.post('/voluntarios/update', controller.updateVoluntario);
router.post('/disponibilidad/update', controller.updateDisponibilidad);
router.post('/habilidades/update', controller.updateHabilidades);
router.post('/taller/updateFinalizado', controller.updateTallerFinalizado);
router.post('/voluntario/updateTallerVoluntario', controller.updateTallerVoluntario);
router.post('/eventos', controller.selectEventos);

//select
router.get('/voluntario/:id/', controller.selectVoluntario);
router.get('/talleres', controller.selectTalleres);
router.get('/talleresAsignar', controller.selectTalleresAsignar);
router.get('/searchVoluntarios', controller.voluntariosSearch);
router.get('/getTalleresFinalizados', controller.selectTalleresFinalizados);
router.get('/getVoluntariosActivos', controller.selectVoluntariosActivos);
router.get('/getVoluntariosTaller/:id', controller.voluntariosEnTalleres);


module.exports = router;
