const fastifyPlugin = require('fastify-plugin');

class TodoRepository {
  constructor(db) {
    this.db = db;
  }
  async getAll() {
    return this.db.todos;
  }
  async getById(id) {
    console.log('ID: ', id);
    return await this.db.todos.find((todo) => todo.id === toString(id));
  }
  async create(todoText) {
    const newTodo = {
      text: todoText,
      id: this.db.todos.length + 1,
    };
    this.db.todos.push(newTodo); // Push the new todo to the array
    return newTodo; // Return the created todo
  }

  async update(id, todo) {
    const index = this.db.todos.findIndex((todo) => todo.id === id);
    this.db.todos[index] = todo;
    return await todo;
  }
  async delete(id) {
    const index = this.db.todos.findIndex((todo) => todo.id === id);
    return await this.db.todos.splice(index, 1);
  }
  async deleteAll() {
    return (this.db.todos = []);
  }
}

async function todoRepository(fastify, options) {
  const db = fastify.db;
  const repo = new TodoRepository(db);
  fastify.decorate('todoRepository', repo);
}

module.exports = fastifyPlugin(todoRepository);
