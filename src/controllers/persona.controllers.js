const personaCtl = {};
const Persona = require('../models/persona');

personaCtl.getPersonas = async (req, res)=>{
    const personas = await Persona.find();
    res.json(personas);
};

personaCtl.createPersona = async (req, res)=>{
    const newPersona = new Persona(req.body);
    await newPersona.save();
    res.send({message: 'Persona creada exitosamente.'});

};

personaCtl.getPersona = async (req, res)=>{
    const persona = await Persona.findById(req.params.id);
    res.send(persona);
};

module.exports = personaCtl;