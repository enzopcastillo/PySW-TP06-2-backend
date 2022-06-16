const {Schema, model} = require('mongoose');

const libroSchema = new Schema({
    name: {type: String, required: true},
    descripcion: {type: String, required: true},
    cover: {type: String, required: true},
    created_editions: {type: Number, required: true},
    destacado: {type: Boolean, required: true},
})

module.exports = model('Libro', libroSchema);