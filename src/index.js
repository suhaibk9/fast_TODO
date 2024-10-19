const { PORT } = require('./config/serverConfig');

const fastify = require('fastify')({ logger: true });
async function startServer() {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
startServer();
