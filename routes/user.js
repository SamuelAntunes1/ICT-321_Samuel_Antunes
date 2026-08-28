/*
 * Nom du fichier : users.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Définir les routes permettant d'accéder aux utilisateurs.
 */


const express = require("express");

const router = express.Router();


// Importation du contrôleur des utilisateurs.
const userController = require("../controllers/users");


// Route permettant de récupérer tous les utilisateurs.
router.get("/", userController.getUsers);


module.exports = router;