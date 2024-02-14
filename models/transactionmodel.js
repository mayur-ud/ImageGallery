const mongoose = require('mongoose');



const storageSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    image: {
        data: Buffer, 
        contentType: String
    }
}, { timestamps: true });

const storageModel=mongoose.model('storage',storageSchema)
module.exports=storageModel