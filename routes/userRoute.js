const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router
  .post("/register", userController.registerUser)
  .post("/login", userController.loginUser)
  .get("/logout", userController.logoutUser)
  .get("/current-user", authMiddleware, userController.getCurrentUser);

module.exports = router;
