/*
 * Nom du fichier : server.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Démarrer le serveur Express et définir le port d'écoute de l'API.
 */


require("dotenv").config();

const app = require("./app");


// Récupère le port depuis le fichier .env.
// Utilise le port 3000 si aucun port n'est défini.
const PORT = process.env.PORT || 3000;


// Démarre le serveur.
app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});