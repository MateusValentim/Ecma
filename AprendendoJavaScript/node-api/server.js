const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Init App
const app = express()
app.use(express.json());
//Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/node-api",{ useNewUrlParser: true, 
    useUnifiedTopology: true}
);

requireDir('./src/models');

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);