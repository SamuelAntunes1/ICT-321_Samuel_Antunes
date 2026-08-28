/*
 * Nom du fichier : products.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Définir les routes permettant de gérer les produits de l'API.
 */


const express = require("express");

const router = express.Router();


// Route permettant de récupérer tous les produits.
router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Produit exemple"
        }
    ]);
});


module.exports = router;