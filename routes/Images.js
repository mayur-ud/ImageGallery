const multer = require("multer");
const {
  addImages,
  getImages,
  deleteImages,
} = require("../controllers/imagecntrl");

const router = require("express").Router()


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

//add Image
router.post("/add-image", upload.single("file"), addImages);

//delete Image
router.post("/delete-image", deleteImages);


//get Image
router.post("/get-images", getImages);
    
module.exports=router 