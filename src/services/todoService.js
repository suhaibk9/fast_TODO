const fastifyPlugin = require('fastify-plugin');
class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAll() {
    return await this.todoRepository.getAll();
  }

  async getById(id) {
    return await this.todoRepository.getById(id);
  }

  async create(todo) {
    return await this.todoRepository.create(todo);
  }

  async update(id, todo) {
    return await this.todoRepository.update(id, todo);
  }

  async delete(id) {
    return await this.todoRepository.delete(id);
  }
  async deleteAll() {
    return await this.todoRepository.deleteAll();
  }
}
async function todoService(fastify, options) {
  const repo = fastify.todoRepository;
  const service = new TodoService(repo);
  fastify.decorate('todoService', service);
}
module.exports = fastifyPlugin(todoService);
