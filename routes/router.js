/*
 * Nom du fichier : router.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Regrouper et organiser les différentes routes de l'API.
 */


const express = require("express");

const router = express.Router();


// Routes liées aux produits.
const productRoutes = require("./products");


// Toutes les routes définies dans products.js
// seront accessibles avec le préfixe /api/products.
router.use("/products", productRoutes);


module.exports = router;