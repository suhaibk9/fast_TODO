const {
  getAllTodos,
  createTodo,
  deleteAll,
  getById,
} = require('../../../../controllers/todoController');

async function todoRouter(fastify, options) {
  //Get all todos
  fastify.get('/', getAllTodos);
  //Get Todo by id
  fastify.get('/:id', getById);
  //Create a new todo
  fastify.post('/', createTodo);
  //Delete all todos
  fastify.delete('/', deleteAll);
}

module.exports = todoRouter;
