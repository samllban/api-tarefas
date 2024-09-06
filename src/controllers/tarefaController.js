const TarefaRepository = require('../repository/tarefaRepository');


class TarefasController {
    async getAllTarefas(req, res) {
        try {
            const tarefas = await TarefaRepository.getAllTarefas();
            res.json(tarefas);
        } catch(error) {
            res.status(500).json({ error: error.message});
        }
    }

    async createTarefa(req, res) {
        
        const { titulo, descricao, concluida } = req.body;
        try {
            const newTask = await TarefaRepository.createTarefa({titulo, descricao, concluida});
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    //implementar o update, delete, get by id
}

module.exports =  TarefasController;