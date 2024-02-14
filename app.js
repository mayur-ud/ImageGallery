const express = require('express');
const cors = require('cors');
const {db} = require('./db/db');
const {readdirSync}=require('fs');
const app=express();
const path =require('path');
const multer = require('multer');
// const storageModel = require('./storageModel')

require('dotenv').config();
db();

const PORT = process.env.PORT;



//middlewares
app.use(express.json())
app.use(cors())


//user routes
app.use('/api/v1/users', require('./routes/userRoutes'))
//transaction routes
app.use('/api/v1/transactions',require('./routes/Images'))

app.use(express.static(path.join(__dirname, './client/build')))



const server=()=>{
    
    app.listen(PORT,()=>{
        console.log(`listening to port ${PORT}`)
    })
}


server()