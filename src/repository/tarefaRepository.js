const Tarefa = require('../models/tarefa');

class TarefaRepository {
    async getAllTarefas() {
        try {
            return await Tarefa.findAll();
        } catch (error) {
            throw new Error('Erro ao buscar todas as tarefa:' + error.message);
        }
    }

    async createTarefa(tarefaData) {
        try {
            return await Tarefa.create(tarefaData);
        } catch(error) {
            throw new Error('Erro ao criar uma nova tarefa: ' + error.message);
        }
    }

    async updateTarefa(id, updateData) {
        try {
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa){
                throw new Error('Tarefa não encontrada para atualização');
            }
            await tarefa.update(updateData);
            return tarefa;

        } catch (error) {
            throw new Error('Erro ao atualizar um tarefa:' + error.message);
        }
    }

    async deleteTarefa(id) {
        try {
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa){
                throw new Error('Tarefa não encontrada');
            }
            await tarefa.destroy(); // deletar a tarefa
            return { messesge: 'Tarefa deletada com sucesso'};
        }catch (error) {
            throw new Error('Error ao deletar tarefa', + error.message)
        }
    }

    async getTareById(id) {
        try {
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa) {
                throw new Error('Tarefa não encontrada');
            }
            return tarefa;
        } catch(error) {
            throw new Error('Error ao buscar tarefa por ID:' + error.message);
        }
    }
}

module.exports = new TarefaRepository();
