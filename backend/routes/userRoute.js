let express = require("express");

const { register, signIn } = require("../controller/userController");

let userRoutes = express.Router();

userRoutes.route("/register").post(register);
userRoutes.route("/signIn").post(signIn);

module.exports = userRoutes;
