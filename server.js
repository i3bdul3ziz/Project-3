const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/project',
{useUnifiedTopology : true , useNewUrlParser : true}  )
.then(res => console.log("mongodb is connected"))
.catch(err => console.log(err))


app.use(express.urlencoded({extended:false}))




app.listen(4000 , ()=> console.log('server run on 4000'))