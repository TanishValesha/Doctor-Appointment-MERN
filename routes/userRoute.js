const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router
  .post("/register", userController.registerUser)
  .post("/login", userController.loginUser)
  .get("/logout", userController.logoutUser);

module.exports = router;
