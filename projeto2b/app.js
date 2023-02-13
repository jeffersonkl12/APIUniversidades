const express = require("express");
require("dotenv").config({ path: "./dotenv.env" });
require("./database/db.js");
const universidadeController = require("./server/controller/universidadeController");
const handlerException = require("./server/middleware/handlerException");

const servidor = express();

servidor.use("/", express.json());

servidor.use("/universities", universidadeController);

servidor.use("/", handlerException)

servidor.use((req, res) => {
    res.status(404).send('404 not found')
})

servidor.listen(8080, "127.0.0.1", async () => {
    console.log("servidor iniciado");
})





