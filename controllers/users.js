/*
 * Nom du fichier : users.js
 * Date de création : 24.08.2026
 * Créateur du fichier : Samuel Antunes
 * But du fichier : Contenir la logique métier liée aux utilisateurs.
 */


// Récupère la liste des utilisateurs.
const getUsers = (req, res) => {
    res.json([
        {
            id: 1,
            name: "Alice"
        }
    ]);
};


module.exports = {
    getUsers
};