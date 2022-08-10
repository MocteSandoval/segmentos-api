const mongoose = require("mongoose");

const url =
  "mongodb+srv://adminSegmentos:MocteS2609@segmentos.pdqya3s.mongodb.net/test";

mongoose
  .connect(url)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log(err));
