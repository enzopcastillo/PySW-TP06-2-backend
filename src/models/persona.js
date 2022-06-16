const {Schema, model} = require('mongoose');

const personaSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    nro_documento: {type: String, required: true},
    email: {type: String, required: true},
})

module.exports = model('Persona', personaSchema);