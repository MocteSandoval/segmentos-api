const { Schema, model } = require("mongoose");

const productoSchema = new Schema(
  {
    id: String,
    nombre: String,
    descripcion: String,
    precio: String,
    imagen: String,
    categoria: String,
    existencia: String,
    estado: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Producto", productoSchema);
