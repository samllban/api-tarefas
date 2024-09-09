const TarefaRepository = require('../repository/tarefaRepository');


class TarefasController {
    async getAllTarefas(req, res) {
        try {
            const tarefas = await TarefaRepository.getAllTarefas();
            res.json(tarefas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createTarefa(req, res) {

        const { titulo, descricao, concluida } = req.body;
        try {
            const newTask = await TarefaRepository.createTarefa({ titulo, descricao, concluida });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateTarefa(req, res) {
        const { id } = req.params;
        const { titulo, descricao, concluida } = req.body;

        try {
            const update = await TarefaRepository.updateTarefa(id,{ titulo, descricao, concluida })
            res.status(201).json(update);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteTarefa(req, res) {
        const { id } = req.params;
        try {
            await TarefaRepository.deleteTarefa(id);
            res.status(201).send({message: 'Tarefa deletada'});

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    async getTareById(res, req) {
        const { id } = req.params;

        try{
            const tarefa = await TarefaRepository.getTareById(id);
            res.json(tarefa);
        } catch(error) {
            res.status(500).json({ error: error.message})
        }
    }
    //implementar o update, delete, get by id
}

module.exports = TarefasController;