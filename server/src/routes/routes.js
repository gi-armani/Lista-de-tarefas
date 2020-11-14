const { Router } = require('express');
const router = Router(); // objeto que permite definir as rotas

const { getTarefas, createTarefas } = require('../controllers/index.controllers')

router.get('/', getTarefas);
router.post('/adiciona', createTarefas);

module.exports = router;