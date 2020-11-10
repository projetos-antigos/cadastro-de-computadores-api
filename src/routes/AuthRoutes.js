const Router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const AuthValidations = require("../validations/AuthValidations");

Router.post("/", AuthValidations.login, AuthController.login);

module.exports = Router;
