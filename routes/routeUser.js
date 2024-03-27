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
router.get("/:id", (req, res) => {
    res.send(req.params.id);	
})
//CREATING ONE
router.post("/:id", (req, res) => {

})

//Updating one
router.patch("/", (req, res) => {

})
//DELETE ONE
router.delete("/:id", (req, res) => {

})
module.exports = router
