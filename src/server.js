const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");

mongoose.connect("mongodb://localhost:27017/hvex", { useNewUrlParser: true })
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use(router);

        app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
    })
    .catch((err) => {
        console.log(`Erro ao conectar com o banco: ${err}`);
    });