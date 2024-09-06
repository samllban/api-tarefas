const express = require('express');
const TarefasController = require('../controllers/tarefaController');

const router = express.Router();

const tarefasController = new TarefasController();

router.get('/', (req, res) => tarefasController.getAllTarefas(req, res));
router.post('/', (req, res) => tarefasController.createTarefa(req, res));

module.exports = router;