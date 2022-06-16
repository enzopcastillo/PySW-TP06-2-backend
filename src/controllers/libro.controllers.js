const libroCtl = {};
const Libro = require('../models/libro');

libroCtl.getLibros = async (req, res)=>{
    const libros = await Libro.find();
    res.json(libros);
};

libroCtl.getLibrosDestacados = async (req, res)=>{
    var criteria = {'destacado': true};
    const libros = await Libro.find(criteria);
    res.json(libros);
};

libroCtl.createLibro = async (req, res)=>{
    const newLibro = new Libro(req.body);
    await newLibro.save();
    res.send({message: 'Libro creado exitosamente.'});
};

libroCtl.getLibro = async (req, res)=>{
    const libro = await Libro.findById(req.params.id);
    res.send(libro);
};

libroCtl.updateLibro = async (req, res)=>{
    await Libro.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Libro updated.'});
};

libroCtl.deleteLibro = async (req, res)=>{
    await Libro.findByIdAndDelete(req.params.id);
    res.json({status: 'Libro deleted.'});
};

module.exports = libroCtl;