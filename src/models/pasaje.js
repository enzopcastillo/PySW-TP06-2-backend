const Persona = require('./persona');
const {Schema, model} = require('mongoose');

const pasajeSchema = new Schema({
    precioPasaje: {type: Number, required: true},
    categoriaPasajero: {type: String, required: true},
    fechaCompra: {type: String, required: true},
    pasajero: {type: Schema.Types.ObjectId, ref: Persona, required: true},
})

module.exports = model('Pasaje', pasajeSchema);