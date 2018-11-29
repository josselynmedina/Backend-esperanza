var crearVoluntario= require('./Voluntarios/crearVoluntario')
var crearContacto= require('./Voluntarios/crearContacto')
var crearDisponibilidad= require('./Voluntarios/crearDisponibilidad')
var CrearHabilidades= require('./Voluntarios/CrearHabilidades')
var crearTaller= require('./Talleres/creaTaller')
var crearEvento= require('./Eventos/crearEvento')


var updateHabilidades= require('./Voluntarios/updateHabilidades')
var updateDisponibilidad= require('./Voluntarios/updateDisponibilidad')
var updateVoluntario= require('./Voluntarios/updateVoluntario')
var updateContacto = require('./Voluntarios/updateContacto')


var selectVoluntario = require('./Voluntarios/selectVoluntario')
var selectTalleres = require('./Voluntarios/selectTalleres')
var selectEventos = require('./Voluntarios/selectEventos')


//Exports encabezado de funciones
exports.crearVoluntario = crearVoluntario.crearVoluntario
exports.crearContacto = crearContacto.crearContacto
exports.crearDisponibilidad = crearDisponibilidad.crearDisponibilidad
exports.CrearHabilidades = CrearHabilidades.CrearHabilidades
exports.crearTaller = crearTaller.crearTaller
exports.crearEvento = crearEvento.crearEvento

//Export updates
exports.updateHabilidades = updateHabilidades.updateHabilidades
exports.updateDisponibilidad = updateDisponibilidad.updateDisponibilidad
exports.updateVoluntario = updateVoluntario.updateVoluntario
exports.updateContacto = updateContacto.updateContacto

//Selects
exports.selectVoluntario = selectVoluntario.selectVoluntario
exports.selectTalleres = selectTalleres.selectTalleres
exports.selectEventos = selectEventos.selectEventos
