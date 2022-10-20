// const storage=require('../config/multer');
// const multer=require('multer')
// let upload = multer({storage})

// const express = require("express");
// const UserController = require("../controllers/userController");
// const router = express.Router();

// router.get("/get", UserController.findAll);
// // router.get("/:id", UserController.findOne);
// router.post("/post",upload.any(['Add_Student']), UserController.create);
// // router.patch("/:id", UserController.update);
// // router.delete("/:id", UserController.destroy);

// module.exports = router;



const express = require('express')
const multer=require('multer')
const {registerController,getuserController,findCount} = require('../controllers/userController')
const router = express.Router();
const storage=require('../middlewares/multer');
let upload=multer({storage})
// var upload = multer({ storage: storage }).array('file')

// router.post("/post",upload.any(["Add_Student"]), registerController);
router.post("/post",upload.any(["Add_Student"]), registerController);

router.get("/get", getuserController);
// router.get("/findCount",findCount)

module.exports = router;