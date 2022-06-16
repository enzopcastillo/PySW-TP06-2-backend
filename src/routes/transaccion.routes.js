const {Router} = require('express');
const router = Router();
const transaccionCtl = require('../controllers/transaccion.controllers');

router.get('/', transaccionCtl.getTransacciones);
router.get('/clientes', transaccionCtl.getTransaccionesClientes);
router.get('/divisas', transaccionCtl.getTransaccionesDivisas);
router.post('/', transaccionCtl.createTransaccion);
router.put('/:id', transaccionCtl.getTransaccion);
router.put('/:id', transaccionCtl.updateTransaccion);
router.delete('/:id', transaccionCtl.deleteTransaccion);

module.exports = router;