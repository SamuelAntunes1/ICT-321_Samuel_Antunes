/*
 * Nom du fichier : app.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Configurer l'application Express, ses middlewares et ses routes.
 */


const express = require("express");

const app = express();


// Permet à Express de comprendre les données reçues au format JSON.
app.use(express.json());


// Importation des routes concernant les utilisateurs.
const userRoutes = require("./routes/user");


// Toutes les routes des utilisateurs commencent par /api/users.
app.use("/api/users", userRoutes);


// Route principale de l'API.
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});


module.exports = app;