const User = require('../models/User')
const express = require('express')
const router = express.Router()
const Item = require('../models/Item')


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
    let item = new Item(newItem)
    item
      .save()
      .then(() => {

        User.findById("5e9c48a4e40afc37b427547e", (err, user) => {
            console.log(req.user)
          user.items.push(item)
          user.save()

        })
        res.json({msg : "Item created" , ItemInf : newItem  })
      })
      .catch( err => {
        console.log(err)
      })
    console.log(req.user)
});
   
router.get('/home/:id' , (req , res) => {
    


});

router.put('/home/:id/edit' , (req , res) => {

});


module.exports = router