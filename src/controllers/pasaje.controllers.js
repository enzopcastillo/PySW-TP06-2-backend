const pasajeCtl = {};
const Pasaje = require('../models/pasaje');

pasajeCtl.getPasajes = async (req, res)=>{
    const pasajes = await Pasaje.find().populate('pasajero');
    res.json(pasajes);
};

pasajeCtl.getPasajesCategoria = async (req, res)=>{
    criteria = {};
    if(req.query.categoriaPasajero!=null && req.query.categoriaPasajero!=""){
        criteria.categoriaPasajero = { $regex: req.query.categoriaPasajero, $options: "i" }};
    const pasajes = await Pasaje.find(criteria).populate('pasajero');
    res.json(pasajes);
};

pasajeCtl.createPasaje = async (req, res)=>{
    const newEmployee = new Pasaje(req.body);
    await newEmployee.save();
    res.send({message: 'Pasaje creado exitosamente.'});
};

pasajeCtl.updatePasaje = async (req, res)=>{
    await Pasaje.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated.'});
};

pasajeCtl.deletePasaje = async (req, res)=>{
    await Pasaje.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted.'});
};

module.exports = pasajeCtl;