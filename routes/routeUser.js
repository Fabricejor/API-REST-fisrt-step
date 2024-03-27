const express = require('express');
const router = express.Router();
const User = require('../models/UserShema')

//methode asynchrone pour eviter les blocages
//GETTING ALL
router.get("/", async (req, res) => {
   try {
    const users = await User.find();
    res.status(200).json(users);//afficher sous format json le resultat
   } catch (error) {
    res.status(500).json({message: error.message })
   }
})
//GETTING ONE
// Obtenir un utilisateur par ID
router.get("/:id", async (req, res) => {
    try {
     const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL
 
     // Rechercher l'utilisateur correspondant à cet ID dans la base de données
     const user = await User.findById(id);
 
     // Si aucun utilisateur avec cet ID n'est trouvé, renvoyer une erreur 404
     if (!user) {
       return res.status(404).json({ message: "Utilisateur non trouvé" });
     }
 
     // Renvoyer les données de l'utilisateur trouvé
     res.json(user);
    } catch (error) {
     // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
     res.status(400).json({ message: error.message });
    }
 });
 
//CREATING ONE
router.post("/", async (req, res) => {
    try {
        //destructuration pour eviter une repetition
        const { _id,name, email, age } = req.body;

        const newUser = new User({
            _id,
            name ,
            age,
            email
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
    res.status(400).json({message: error.message })
        
    }
})

//Updating one
// Mettre à jour un utilisateur par ID
router.put("/:id", async (req, res) => {
    try {
     const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL
     const { name, email, age } = req.body; // Récupérer les données à mettre à jour à partir du corps de la requête
 
     // Vérifier si l'utilisateur avec l'ID donné existe
     const existingUser = await User.findById(id);
     if (!existingUser) {
       return res.status(404).json({ message: "Utilisateur non trouvé" });
     }
 
     // Mettre à jour les champs de l'utilisateur avec les nouvelles valeurs
     existingUser.name = name;
     existingUser.email = email;
     existingUser.age = age;
 
     // Enregistrer les modifications dans la base de données
     const updatedUser = await existingUser.save();
 
     // Renvoyer les données de l'utilisateur mis à jour
     res.json(updatedUser);
    } catch (error) {
     // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
     res.status(400).json({ message: error.message });
    }
 });
 
//DELETE ONE
// Supprimer un utilisateur par ID
router.delete("/:id", async (req, res) => {
    try {
     const id = req.params.id; // Récupérer l'ID à partir des paramètres de l'URL
 
     // Rechercher l'utilisateur correspondant à cet ID dans la base de données
     const deletedUser = await User.findByIdAndDelete(id);
 
     // Si aucun utilisateur avec cet ID n'est trouvé, renvoyer une erreur 404
     if (!deletedUser) {
       return res.status(404).json({ message: "Utilisateur non trouvé" });
     }
 
     // Renvoyer les données de l'utilisateur supprimé
     res.json(deletedUser);
    } catch (error) {
     // Si une erreur se produit, renvoyer un statut 400 (Bad Request) avec le message d'erreur
     res.status(400).json({ message: error.message });
    }
 });
 
module.exports = router
