
const express = require('express');//le module express
const dotenv = require('dotenv').config({ path: "config/.env" });//charger les variables d'environnment
const mongoose = require('mongoose');//le module mongoose
const mongodb = require('mongodb');//le module mongodb au cas où
const routes = require("./routes") // new

// Créer une instance de l'application Express
const app = express();
// Définir le port à partir de la variable d'environnement 
const PORT = process.env.PORT ;

//connexion avec express
app.listen(PORT, () => {
    console.log(`Le serveur est en Express cours d'exécution sur le port ${PORT}`);
});

app.use(express.json());// pour que notre server accept du json
app.use( routes) // new
//connexion avec mongodb
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connecté à la base de données MongoDB');
}).catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
});
const db = mongoose.connect;

const user = require('./models/user'); //importation du shema
