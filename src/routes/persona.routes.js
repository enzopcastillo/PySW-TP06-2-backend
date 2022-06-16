const {Router} = require('express');
const router = Router();
const personaCtl = require('../controllers/persona.controllers');

router.get('/', personaCtl.getPersonas);
router.post('/', personaCtl.createPersona);
router.get('/:id', personaCtl.getPersona);

module.exports = router;