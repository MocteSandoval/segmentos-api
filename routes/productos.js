const fastify = require("fastify");
const Producto = require("../models/producto_model");
const routes = [
  // ---------- Obtener todos los productos ----------
  {
    url: "/segmentos/productos",
    method: "GET",
    handler: async (request, reply) => {
      const productos = await Producto.find();
      return productos;
      //   reply.send(productos);
    },
  },
  // ---------- Obtener producto por id ----------
  {
    url: "/segmentos/productos/:id",
    method: "GET",
    handler: (request, reply) => {
      reply.send("Producto por id");
    },
  },

  // ---------- Agregar producto ----------

  {
    url: "/segmentos/productos",
    method: "POST",
    handler: (request, reply) => {
      reply.send("Crear producto");
    },
  },

  // ---------- Actualizar producto ----------

  {
    url: "/segmentos/productos/:id",
    method: "PUT",
    handler: (request, reply) => {
      reply.send("Actualizar producto");
    },
  },

  // ---------- Borrar producto ----------

  {
    url: "/segmentos/productos/:id",
    method: "DELETE",
    handler: (request, reply) => {
      reply.send("Borrar producto");
    },
  },
];

module.exports = routes;
