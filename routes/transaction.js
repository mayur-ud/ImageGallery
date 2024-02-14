const multer = require("multer");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require("../controllers/transactioncntrl")

const router = require("express").Router()


const storage = multer.memoryStorage(); // Store uploaded files in memory
const upload = multer({ storage: storage });

//add transaction
router.post('/add-image',upload.single('file'),addTransaction)

//edit transaction
// router.post('/edit-transaction',editTransaction)
//delete transaction
router.post('/delete-image',deleteTransaction)


//get transaction
router.post('/get-images',getAllTransaction)
    
module.exports=router 