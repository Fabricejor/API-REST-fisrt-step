
const express = require('express');//le module express
const dotenv = require('dotenv').config({ path: "config/.env" });//charger les variables d'environnment
const mongoose = require('mongoose');//le module mongoose
const mongodb = require('mongodb');//le module mongodb au cas où
const user = require('./models/UserShema'); //importation du shema

// const routes = require("./routes") // new
// const cors = require("cors")

// Créer une instance de l'application Express
const app = express();
// Définir le port à partir de la variable d'environnement 
const PORT = process.env.PORT ;



// qpp.use(cors); // d'apres le coach cela facilite la communications entre plusieurs servers
app.use(express.json());// pour que notre server accept du json
// app.use( routes) // new
//connexion avec mongodb
mongoose.connect(process.env.DB_CONNECTION, {
   
}).then(() => {
    // console.log('Connecté à la base de données MongoDB');
}).catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
});
const db = mongoose.connect;

const routeUser = require("./routes/routeUser")// importations de la route
app.use("/api/users" , routeUser);

//connexion avec express
app.listen(PORT, () => {
    console.log(`Server express running on http://localhost/${PORT}`);
});