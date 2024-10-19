const fastifyPlugin = require('fastify-plugin');
async function app(fastify, options) {
    
  fastify.register(require('./db'));
  fastify.register(require('./repository/todoRepository'));
  fastify.register(require('./services/todoService'));
  
  fastify.register(require('./routes/api/apiRouter'), { prefix: '/api' });
}
module.exports = fastifyPlugin(app);
