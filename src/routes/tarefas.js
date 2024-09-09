const express = require('express');
const TarefasController = require('../controllers/tarefaController');

const router = express.Router();

const tarefasController = new TarefasController();

router.post('/', (req, res) => tarefasController.createTarefa(req, res));
router.get('/', (req, res) => tarefasController.getAllTarefas(req, res));
router.get('/id/:id', (req,res) => tarefasController.getTareById(req, res));
router.delete('/id/:id', (req, res) => tarefasController.deleteTarefa(req, res));
router.put('/id/:id', (req, res) => tarefasController.updateTarefa(req, res));

module.exports = router;