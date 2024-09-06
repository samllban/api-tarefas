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

    async updateTarefa(updateData) {
        try {
            return await Tarefa.update(updateData);
        } catch (error) {
            throw new Error('Erro ao atualizar um tarefa:' + error.message);
        }
    }

    async deleteTarefa() {
        try {

        }catch (error) {
            throw new Error('Error ao deletar tarefa', + error.message)
        }
    }

    // continuar o detelte, update e get by id;
}

module.exports = new TarefaRepository();
