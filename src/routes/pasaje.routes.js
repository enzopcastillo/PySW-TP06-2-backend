const {Router} = require('express');
const router = Router();
const pasajeCtl = require('../controllers/pasaje.controllers');

router.get('/', pasajeCtl.getPasajes);
router.get('/categorias', pasajeCtl.getPasajesCategoria);
router.post('/', pasajeCtl.createPasaje);
router.put('/:id', pasajeCtl.updatePasaje);
router.delete('/:id', pasajeCtl.deletePasaje);

module.exports = router;