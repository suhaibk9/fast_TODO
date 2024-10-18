const fastify = require('fastify')({ logger: true });
const PORT=3000;
async function start() {
    try{
        await fastify.listen({port:PORT});
        console.log(`Server is running on port ${PORT}`);
    }
    catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();