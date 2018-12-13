var crearVoluntario= require('./Voluntarios/crearVoluntario')
var crearContacto= require('./Voluntarios/crearContacto')
var crearDisponibilidad= require('./Voluntarios/crearDisponibilidad')
var CrearHabilidades= require('./Voluntarios/CrearHabilidades')
var crearTaller= require('./Talleres/creaTaller')
var crearEvento= require('./Eventos/crearEvento')
var creaVoluntarioTaller= require('./Voluntarios/creaVoluntarioTaller')
var voluntariosSearch= require('./Voluntarios/voluntariosSearch')


var updateHabilidades= require('./Voluntarios/updateHabilidades')
var updateDisponibilidad= require('./Voluntarios/updateDisponibilidad')
var updateVoluntario= require('./Voluntarios/updateVoluntario')
var updateContacto = require('./Voluntarios/updateContacto')
var updateTallerFinalizado = require('./Voluntarios/updateTallerFinalizado')
var updateTallerVoluntario = require('./Voluntarios/updateTallerVoluntario')


var selectVoluntario = require('./Voluntarios/selectVoluntario')
var selectTalleres = require('./Voluntarios/selectTalleres')
var selectTalleresAsignar = require('./Voluntarios/selectTalleresAsignar')
var selectEventos = require('./Voluntarios/selectEventos')
var selectTalleresFinalizados = require('./Voluntarios/selectTalleresFinalizados')
var selectVoluntariosActivos = require('./Voluntarios/selectVoluntariosActivos')
var voluntariosEnTalleres = require('./Voluntarios/voluntariosEnTalleres')


//Exports encabezado de funciones
exports.crearVoluntario = crearVoluntario.crearVoluntario
exports.crearContacto = crearContacto.crearContacto
exports.crearDisponibilidad = crearDisponibilidad.crearDisponibilidad
exports.CrearHabilidades = CrearHabilidades.CrearHabilidades
exports.crearTaller = crearTaller.crearTaller
exports.crearEvento = crearEvento.crearEvento
exports.creaVoluntarioTaller = creaVoluntarioTaller.creaVoluntarioTaller

//Export updates
exports.updateHabilidades = updateHabilidades.updateHabilidades
exports.updateDisponibilidad = updateDisponibilidad.updateDisponibilidad
exports.updateVoluntario = updateVoluntario.updateVoluntario
exports.updateContacto = updateContacto.updateContacto
exports.updateTallerFinalizado = updateTallerFinalizado.updateTallerFinalizado
exports.updateTallerVoluntario = updateTallerVoluntario.updateTallerVoluntario

//Selects
exports.selectVoluntario = selectVoluntario.selectVoluntario
exports.selectTalleres = selectTalleres.selectTalleres
exports.selectTalleresAsignar = selectTalleresAsignar.selectTalleresAsignar
exports.selectEventos = selectEventos.selectEventos
exports.selectTalleresFinalizados = selectTalleresFinalizados.selectTalleresFinalizados
exports.selectVoluntariosActivos = selectVoluntariosActivos.selectVoluntariosActivos
exports.voluntariosEnTalleres = voluntariosEnTalleres.voluntariosEnTalleres
exports.voluntariosSearch = voluntariosSearch.voluntariosSearch
