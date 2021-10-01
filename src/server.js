const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");

mongoose.connect("mongodb://localhost:27017/hvex", { useNewUrlParser: true })
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use(router);

        app.listen(3333, () => console.log("Server is running on port 3333"));
    })
    .catch((err) => {
        console.log(`Error on connect to mongodb: ${err}`);
    });