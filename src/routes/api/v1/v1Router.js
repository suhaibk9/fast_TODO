async function v1Router(fastify, options) {
  fastify.register(require('./todos'), { prefix: '/todos' });
}

module.exports = v1Router;
