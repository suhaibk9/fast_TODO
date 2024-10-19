async function getAllTodos(request, reply) {
  const todos = await this.todoService.getAll();
  console.log('ALL TODOS', todos);
  if (todos.length === 0) {
    return await reply.code(404).send({ response: 'No todos found' });
  }
  return await reply.code(200).send({ response: todos });
}
async function getById(req, res) {
  const id = req.params.id;
  const todo = await this.todoService.getById(id);
  if (!todo) {
    return await res.code(404).send({ response: 'Todo not found' });
  }
  return await res.code(200).send({ response: todo });
}
async function createTodo(request, reply) {
  const todo = request.body.todoText;
  const newTodo = await this.todoService.create(todo);
  return await reply.code(201).send({ response: newTodo });
}
async function deleteAll(request, reply) {
  await this.todoService.deleteAll();
  return await reply.send('All todos deleted');
}
module.exports = {
  getAllTodos,
    getById,
  createTodo,
  deleteAll,
};
