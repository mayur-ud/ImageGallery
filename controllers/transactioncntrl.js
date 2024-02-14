const storageModel = require("../models/transactionmodel");

const getAllTransaction= async (req,res)=>{
    try {
        const {userid} = req.body;
        const images = await storageModel.find({ userid: userid });

    const imageUrls = images.map(img => ({
      dataURL: `data:${img.image.contentType};base64,${img.image.data.toString('base64')}`,
      alt: `Image for user ${userid}`,
      Imgid : String(img._id)
    }));

    res.json(imageUrls);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


const deleteTransaction= async (req,res)=> {
    try {
    
        const response = await storageModel.findByIdAndDelete(req.body.imgId)  
        res.status(200).send("Transaction deleted successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
}

const addTransaction = async(req,res)=>{
    try {
        const { userid } = req.body;
        const image = req.file; 
        console.log("Upload Called")
        
        const newImage = new storageModel({
            userid: userid,
            image: {
                data: image.buffer,
                contentType: image.mimetype
            }
        });
        
        await newImage.save()
        console.log("Upload Finished")
        res.status(201).send('Transaction Created')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports={getAllTransaction,addTransaction,deleteTransaction}

