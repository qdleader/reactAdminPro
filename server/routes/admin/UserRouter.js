var UserController = require("../../controllers/admin/UserController")
var express = require('express');
var UserRouter = express.Router();


UserRouter.post("/api/user/login", UserController.login)


module.exports = UserRouter