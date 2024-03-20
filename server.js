
const express = require('express');//le module express
const dotenv = require('dotenv').config({ path: "config.env" });//charger les variables d'environnment
const mongoose = require('mongoose');//le module mongoose



// Créer une instance de l'application Express
const app = express();

// Définir le port à partir de la variable d'environnement ou utiliser 3000 par défaut
const PORT = process.env.PORT ;

//connexion avec express
app.listen(PORT, () => {
    console.log(`Le serveur est en Express cours d'exécution sur le port ${PORT}`);
});
//connexion avec mongodb
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connecté à la base de données MongoDB');
}).catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
});