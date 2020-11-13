const { Router } = require('express');
const router = Router(); // objeto que permite definir as rotas

const { getTarefas } = require('../controllers/index.controllers')

router.get('/', getTarefas);

module.exports = router;