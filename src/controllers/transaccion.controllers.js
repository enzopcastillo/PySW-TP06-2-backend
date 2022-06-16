const transaccionCtl = {};
const Transaccion = require('../models/transaccion');

transaccionCtl.getTransacciones = async (req, res)=>{
    const transacciones = await Transaccion.find();
    res.json(transacciones);
};

transaccionCtl.getTransaccionesClientes = async (req, res)=>{
    criteria = {};
    if(req.query.emailCliente!=null && req.query.emailCliente!=""){
        criteria.emailCliente = { $regex: req.query.emailCliente, $options: "i" }};
    const transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
};

transaccionCtl.getTransaccionesDivisas = async (req, res)=>{
    criteria = {};
    if(req.query.monedaOrigen!=null && req.query.monedaOrigen!=""){
        criteria.monedaOrigen = { $regex: req.query.monedaOrigen, $options: "i" }};
    if(req.query.monedaDestino!=null && req.query.monedaDestino!=""){
        criteria.monedaDestino = req.query.monedaDestino};
    const transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
};

transaccionCtl.createTransaccion = async (req, res)=>{
    const newTransaccion = new Transaccion(req.body);
    try {
        await newTransaccion.save();
        res.send({message: 'Transaccion creada exitosamente.'});
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error creando.'
        })
    }
    
};

transaccionCtl.getTransaccion = async (req, res)=>{
    const transaccion = await Transaccion.findById(req.params.id);
    res.send(transaccion);
};

transaccionCtl.updateTransaccion = async (req, res)=>{
    await Transaccion.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Transaccion updated.'});
};

transaccionCtl.deleteTransaccion = async (req, res)=>{
    await Transaccion.findByIdAndDelete(req.params.id);
    res.json({status: 'Transaccion deleted.'});
};

module.exports = transaccionCtl;