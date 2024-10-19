async function apiRouter(fastify, options) {
  fastify.register(require('./v1/v1Router'), { prefix: '/v1' });
}

module.exports = apiRouter;
