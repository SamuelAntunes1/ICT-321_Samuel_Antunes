/*
 * Nom du fichier : app.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Configurer l'application Express, ses middlewares et ses routes.
§*/


const express = require("express");

const app = express();


// Permet à Express de comprendre les données envoyées au format JSON.
app.use(express.json());


// Importation du routeur principal de l'API.
const router = require("./routes/router");


// Toutes les routes de l'API commencent par /api.
app.use("/api", router);


// Route principale de l'API.
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});


module.exports = app;