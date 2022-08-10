const fastify = require("fastify")({ logger: true });

const productosRoute = require("./routes/productos");

require("./database/config");

productosRoute.forEach((route) => {
  fastify.route(route);
});

fastify.register(require("./routes/items"));

const start = async () => {
  await fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    // Server is now listening on ${address}
  });
};

start();
