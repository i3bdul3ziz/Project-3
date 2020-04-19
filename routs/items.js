
const express = require('express')
const router = express.Router()
const User = require('../model/Item')


router.get("/home", (req, res) => {
 
});

router.post("/home/create", (req, res) => {
  
       
    const newItem = {
        name : req.body.name , 
        image : req.body.image,
        expiration_date : req.body.expiration_date ,
        address:{
            city : req.body.city , 
            street : req.body.street
        },
        time_to_pick : req.body.time_to_pick
    }
});

router.get('/home/:id' , (req , res) => {
    
    

});

router.put('/home/:id/edit' , (req , res) => {

});


module.exports = router