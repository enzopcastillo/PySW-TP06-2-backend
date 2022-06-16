const {Router} = require('express');
const router = Router();
const libroCtl = require('../controllers/libro.controllers');

router.get('/', libroCtl.getLibros);
router.get('/destacados', libroCtl.getLibrosDestacados);
router.post('/', libroCtl.createLibro);
router.put('/:id', libroCtl.getLibro);
router.put('/:id', libroCtl.updateLibro);
router.delete('/:id', libroCtl.deleteLibro);

module.exports = router;