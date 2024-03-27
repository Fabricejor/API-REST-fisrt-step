//MONGOOSE modules
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {type: Number},
    name: { type: String, required: true }, // required =obligatoire
    age: { type: Number, default: 0 }, // si lage nest pas renseigne 0 par defaut
    email:{ type:String ,max:100} ,
    userData:{type:Date,required:true, default: Date.now()  
    }
    });

const User = mongoose.model('User', userSchema);

// const fisrtUser= new User(
//   {
//       _id:1,
//       name: "Jordan",
//       age: 22,
//       email:"fabricejon@gmail.com",
//   })
  // a decomenté pour creer l'utilisateur
  // fisrtUser.save()
  // .then(doc => {
  //     console.log(doc)
  // })
  // .catch(err => {
  //     console.error("Erreur lors de la creation", err)
  // });
  // Création du modèle ou composant de user et on l'exporte
module.exports =  User ;