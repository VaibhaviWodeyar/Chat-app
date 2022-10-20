const express = require('express')
const {
  registerController,
  userLoginController,
  logoutController,
 
} = require("../controllers/authController");
const { protection, authorize } = require("../helpers/authProtect");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", userLoginController);
router.get("/logout", protection, authorize("user"), logoutController);

module.exports = router;
