//MONGOOSE modules
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // required =obligatoire
    age: { type: Number, default: 0 }, // si lage nest pas renseigne 0 par defaut
    email:{ type: [String]} // Tableau vide si aucun plat n'est renseigner
  });