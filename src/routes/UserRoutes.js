const Router = require("express").Router();
const controller = require("../controllers/UserControllers");
const validation = require("../validations/UserValidations");

Router.post("/", validation.store, controller.store);

module.exports = Router;
